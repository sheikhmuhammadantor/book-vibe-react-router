import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const BooksDataContext = createContext([]);

function App() {

  const navigation = useNavigation();
  console.log(navigation);
  if(navigation.state === "loading") {console.log("loading")}


  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/booksData.json')
      // .then(data => data.json())
      .then(data => setBooks(data.data))
  }, [])

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
