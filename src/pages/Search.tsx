import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { fetchMovies } from "../utils/http";
import ErrorBlock from "../components/common/ErrorBlock";
import LoadingPage from "../components/common/LoadingPage";
import CardMovie from "../components/CardMovie";

const Search = () => {
  const searchElement = useRef();
  const [searchParams, setSearchParams] = useState();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies", { searchTerm: searchParams }],
    queryFn: ({ queryKey, signal }) =>
      fetchMovies(signal, null, queryKey[1].searchTerm),
    enabled: searchParams !== undefined,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSearchParams(searchElement.current.value);
  };

  let content = (
    <p className="font-medium text-lg">
      نام فیلم مورد نظر خود را جست و جو کنید.!
    </p>
  );

  if (isLoading) {
    content = <LoadingPage />;
  }

  if (isError) {
    content = (
      <p>
        {error.message}
        {error.info || "cant find events with this params you entered "}
      </p>
    );
  }
  console.log(data);

  if (data && data.length > 0) {
    content = (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.map((movie) => {
          return <CardMovie movie={movie} key={movie.id} />;
        })}
      </div>
    );
  } else {
    content = (
      <p className="font-medium text-lg">
        نتیجه ای برای جستوجوی شما پیدا نشد.!!
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start gap-5 w-full">
      <form
        onSubmit={onSubmitHandler}
        className="flex items-center justify-center gap-2 w-full md:w-8/12"
      >
        <input
          ref={searchElement}
          type="text"
          placeholder="جستوجو بر اساس نام فیلم : مثل inception"
          name="search"
          id="search"
          required
          className="w-9/12 p-2 rounded-lg outline-none text-blackColor"
        />
        <input
          type="submit"
          value={"جستوجو"}
          className="w-3/12 bg-primaryColor p-2 rounded-lg"
        />
      </form>
      {content}
    </div>
  );
};

export default Search;
