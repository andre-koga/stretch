import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { HomePage } from './pages/HomePage'
import { MeditatePage } from './pages/MeditatePage'
import { RoutineDetailPage } from './pages/RoutineDetailPage'
import { StretchListPage } from './pages/StretchListPage'
import { StretchSessionPage } from './pages/StretchSessionPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="stretch" element={<StretchListPage />} />
          <Route path="stretch/:routineId" element={<RoutineDetailPage />} />
          <Route path="stretch/:routineId/session" element={<StretchSessionPage />} />
          <Route path="meditate" element={<MeditatePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
