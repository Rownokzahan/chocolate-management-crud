import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllChocolates from './pages/AllChocolates/AllChocolates.jsx';
import NewChocolate from './pages/NewChocolate.jsx';
import UpdateChocolate from './pages/UpdateChocolate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <AllChocolates />,
        loader: () => fetch(`http://localhost:5000/chocolates`)
      },
      {
        path: '/new',
        element: <NewChocolate/>
      },
      {
        path: '/update/:id',
        element: <UpdateChocolate />,
        loader: ({ params }) => fetch(`http://localhost:5000/chocolates/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
