import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
import ListedBook from './Components/ListedBook.jsx/ListedBook.jsx';
import ReadPage from './Components/ReadPage/ReadPage.jsx';
import Books from './Components/Books/Books.jsx';
import BookDetails from './Components/Books/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: 'books',
            element: <Books></Books>,
          }
        ]
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/listed",
        element: <ListedBook></ListedBook>
      },
      {
        path: "/read",
        element: <ReadPage></ReadPage>
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
