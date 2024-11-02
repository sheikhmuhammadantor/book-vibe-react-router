import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import { createContext, useEffect, useState } from 'react'
// import axios from 'axios';

export const BooksDataContext = createContext([]);

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('booksData.json')
    .then(data => data.json())
      .then(data => setBooks(data))
  }, [])

  console.log(books)

  return (
    <>
      <BooksDataContext.Provider value={books}>
        <Header></Header>
        <Outlet></Outlet>
      </BooksDataContext.Provider>
    </>
  )
}

export default App
