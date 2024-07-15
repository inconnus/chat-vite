import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from './dataslot-ui/provider'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.tsx'

const Chats = lazy(() => import('./pages/chats'));
const Sheets = lazy(() => import('./pages/sheets'));
import './styles/global.sass'
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/:mid/chats', element: <Suspense fallback={<div></div>}><Chats /></Suspense> },
      { path: '/:mid/sheets', element: <Suspense fallback={<div></div>}><Sheets /></Suspense> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </ThemeProvider>

)
