import BookCard from "@/Components/BookCard";
import { useGetBooksQuery } from "@/Redux/api/apiSlice";
import { Link } from "react-router-dom";

export default function Books() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/api/v1/book")
  //       .then((res) => res.json())
  //       .then((data) => setData(data.data));
  //   }, []);

  const { data, isLoading, error } = useGetBooksQuery(undefined);

  return (
    <>
      <div>
        <h1 className="text-4xl underline mt-10 mb-10">Recent Books</h1>
      </div>
      <div className="grid grid-cols-12 max-w-7xl mx-auto  ">
        <div className="col-span-12 grid md:grid-cols-4 sm:grid-cols-2  gap-10 pb-20 ">
          {data?.data?.map((book) => (
            <BookCard book={book} key={book!} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <div>
          <Link to={"/books"}>
            <button className="btn btn-neutral  text-center">
              Show All Books
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
