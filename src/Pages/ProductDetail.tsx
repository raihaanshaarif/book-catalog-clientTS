
import CommentCard from "@/Components/CommentCard";
import { useGetSingleBooksQuery } from "@/Redux/books/bookApi";

import { useParams } from "react-router-dom";



const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useGetSingleBooksQuery(id);
  //   console.log(data);
  const currentBook = data?.data;



 


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={currentBook?.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Name: {currentBook?.title}</h1>
            <p className="py-6">Author: {currentBook?.author}</p>
            <p className="py-6">Genre: {currentBook?.genre}</p>
            <p className="py-6">
              Publication Year: {currentBook?.publicationDate}
            </p>
          </div>
        </div>
      </div>
      <div>
        <CommentCard id={id!} />
      </div>

      
    </div>
  );
};



export default ProductDetail;
