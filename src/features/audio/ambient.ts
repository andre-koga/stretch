import type { SoundId } from '../../data/sounds'

export type AmbientHandle = {
  stop: (fadeMs?: number) => void
}

let sharedCtx: AudioContext | null = null

function getCtx(): AudioContext {
  if (!sharedCtx) {
    sharedCtx = new AudioContext()
  }
  return sharedCtx
}

async function ensureRunning(ctx: AudioContext) {
  if (ctx.state === 'suspended') {
    await ctx.resume()
  }
}

function createNoiseBuffer(ctx: AudioContext, seconds = 2): AudioBuffer {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1
  }
  return buffer
}

export async function playAmbient(soundId: SoundId, volume = 0.35): Promise<AmbientHandle | null> {
  if (soundId === 'silence') return null

  const ctx = getCtx()
  await ensureRunning(ctx)

  const master = ctx.createGain()
  master.gain.value = 0
  master.connect(ctx.destination)
  master.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.8)

  const nodes: AudioNode[] = [master]
  const intervals: number[] = []

  if (soundId === 'rain') {
    const src = ctx.createBufferSource()
    src.buffer = createNoiseBuffer(ctx, 3)
    src.loop = true
    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 1200
    filter.Q.value = 0.6
    const gain = ctx.createGain()
    gain.gain.value = 0.55
    src.connect(filter)
    filter.connect(gain)
    gain.connect(master)
    src.start()
    nodes.push(src, filter, gain)
  }

  if (soundId === 'ocean') {
    const src = ctx.createBufferSource()
    src.buffer = createNoiseBuffer(ctx, 4)
    src.loop = true
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 500
    const gain = ctx.createGain()
    gain.gain.value = 0.4
    const lfo = ctx.createOscillator()
    lfo.type = 'sine'
    lfo.frequency.value = 0.08
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 0.25
    lfo.connect(lfoGain)
    lfoGain.connect(gain.gain)
    src.connect(filter)
    filter.connect(gain)
    gain.connect(master)
    src.start()
    lfo.start()
    nodes.push(src, filter, gain, lfo, lfoGain)
  }

  if (soundId === 'drone') {
    const freqs = [110, 164.81, 220]
    for (const freq of freqs) {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = freq
      const gain = ctx.createGain()
      gain.gain.value = 0.12
      osc.connect(gain)
      gain.connect(master)
      osc.start()
      nodes.push(osc, gain)
    }
  }

  return {
    stop(fadeMs = 600) {
      const now = ctx.currentTime
      const fade = Math.max(0.05, fadeMs / 1000)
      try {
        master.gain.cancelScheduledValues(now)
        master.gain.setValueAtTime(master.gain.value, now)
        master.gain.linearRampToValueAtTime(0, now + fade)
      } catch {
        // ignore
      }
      for (const id of intervals) window.clearInterval(id)
      window.setTimeout(() => {
        for (const node of nodes) {
          try {
            if ('stop' in node && typeof node.stop === 'function') {
              node.stop()
            }
            node.disconnect()
          } catch {
            // already stopped
          }
        }
      }, fadeMs + 50)
    },
  }
}

export async function playChime() {
  const ctx = getCtx()
  await ensureRunning(ctx)
  const now = ctx.currentTime
  const freqs = [523.25, 659.25]
  for (const [i, freq] of freqs.entries()) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = freq
    gain.gain.value = 0
    osc.connect(gain)
    gain.connect(ctx.destination)
    const start = now + i * 0.08
    gain.gain.linearRampToValueAtTime(0.12, start + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.7)
    osc.start(start)
    osc.stop(start + 0.75)
  }
}
