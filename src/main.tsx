import { lazy, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from './dataslot-ui/provider'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.tsx'

const App = lazy(() => import('./pages/chats'));
const Sheet = lazy(() => import('./pages/chats'));
import './styles/global.sass'

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
