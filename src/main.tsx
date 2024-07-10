import { lazy, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
const App = lazy(() => import('./App'));
import './styles/global.sass'
import ThemeProvider from './dataslot-ui/provider/index.tsx'
import Navbar from './components/navbar.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.tsx'
import Sheet from './components/Sheet.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/:mid/chats', element: <App /> },
      { path: '/:mid/sheets', element: <Sheet /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>

      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
