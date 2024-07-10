import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from './dataslot-ui/provider'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.tsx'

const App = lazy(() => import('./pages/chats'));
const Sheet = lazy(() => import('./pages/sheets'));
import './styles/global.sass'
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/:mid/chats', element: <Suspense fallback={<div></div>}><App /></Suspense> },
      { path: '/:mid/sheets', element: <Suspense fallback={<div></div>}><Sheet /></Suspense> },
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
