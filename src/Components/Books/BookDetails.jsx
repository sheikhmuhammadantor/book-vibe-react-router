import { useContext } from "react"
import { useParams } from "react-router-dom"
import { BooksDataContext } from "../../App"

function BookDetails() {

    const { bookId } = useParams()

    const books = useContext(BooksDataContext)

    const book = books.find(book => book.bookId === parseInt(bookId))

// console.log(parseInt(bookId));
// console.log("books",books);
// console.log("book",book.bookId);


    return (
        <div>
            {/* <h1>BookDetails {book.bookId}</h1> */}
        </div>
    )
}

export default BookDetails
