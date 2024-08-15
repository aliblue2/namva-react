import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import CardMovie from "./CardMovie";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const MoviesSec = () => {
  const data = useLoaderData();
  console.log(data);
  const [searchParams] = useSearchParams();
  let pageNumber = searchParams.get("page");

  const navigator = useNavigate();
  const changePage = (flag: string) => {
    if (flag === "back") {
      --pageNumber;
      navigator(`?page=${pageNumber}`);
    } else {
      ++pageNumber;
      navigator(`?page=${pageNumber}`);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })}
      </div>
      <div className="flex items-center justify-between gap-5 my-5">
        {pageNumber > 1 && (
          <button
            onClick={() => changePage("back")}
            className="flex items-center justify-center gap-1"
          >
            <FiArrowRight size={18} />
            صفحه قبلی
          </button>
        )}
        <span>{pageNumber}</span>
        {pageNumber < 25 && (
          <button
            onClick={() => changePage("next")}
            className="flex items-center justify-center gap-1"
          >
            صفحه بعدی
            <FiArrowLeft size={18} />
          </button>
        )}
      </div>
    </>
  );
};

export default MoviesSec;
