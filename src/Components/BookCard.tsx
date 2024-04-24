import { IBook } from "@/Types/globalTypes";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <Link to={`/product-details/${book._id}`} className="w-full">
        <figure className="px-10 pt-10">
          <img src={book.image} alt="Shoes" className="rounded-xl" />
        </figure>
      </Link>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Publication Year: {book.publicationDate}</p>
      </div>
    </div>
  );
};

export default BookCard;
