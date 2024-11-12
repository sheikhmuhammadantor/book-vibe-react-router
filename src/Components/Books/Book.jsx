/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Book = ({ book }) => {


    const {bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <div className="card max-w-96 shadow-xl p-6 border">
            <figure className="mx-auto bg-slate-100 w-full rounded-xl">
                <img className="h-52 m-5"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex gap-4">
                    {
                        tags.map((tag, idx) => <div key={idx} className="badge text-primary font-semibold">{tag}</div>)
                    }
                </div>
                <Link to={`${bookId}`}><h2 className="card-title text-2xl">
                    {bookName}
                </h2></Link>
                <p>By : {author}</p>
                <div className="card-actions justify-between border-t border-dotted pt-5 mt-3">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline items-center gap-2 text-lg">{rating}<CiStar></CiStar></div>
                </div>
            </div>
        </div>
    )
}

export default Book
