import { useContext } from "react"
import { useParams } from "react-router-dom"
import { BooksDataContext } from "../../App"

function BookDetails() {

    const { bookId } = useParams()

    const [...books] = useContext(BooksDataContext)

    const detailsBook = (bookId) => {
        
    }


    return (
        <div>
            <h1>BookDetails {bookId}</h1>
        </div>
    )
}

export default BookDetails
