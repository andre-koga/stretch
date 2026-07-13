import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { HomePage } from './pages/HomePage'
import { MeditatePage } from './pages/MeditatePage'
import { StretchListPage } from './pages/StretchListPage'
import { StretchSessionPage } from './pages/StretchSessionPage'
import { ThemeDetailPage } from './pages/ThemeDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="stretch" element={<StretchListPage />} />
          <Route path="stretch/:themeId" element={<ThemeDetailPage />} />
          <Route
            path="stretch/:themeId/:variationId/session"
            element={<StretchSessionPage />}
          />
          <Route path="meditate" element={<MeditatePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
