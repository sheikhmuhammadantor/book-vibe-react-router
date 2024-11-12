// import { useEffect, useState } from "react";
import { useContext } from "react"
import Book from "./Book"
import { BooksDataContext } from "../../App"
// import axios from 'axios';

const Books = () => {

  const books = useContext(BooksDataContext)

  return (
    <div className="w-full my-12">
      <h1 className="text-center text-4xl font-bold my-12">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16 justify-items-center">
        {
          books.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  )
}

export default Books
