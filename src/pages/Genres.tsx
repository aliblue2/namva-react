import { useLoaderData, useNavigate } from "react-router-dom";
import { fetchGenres, queryClient } from "../utils/http";

const Genres = () => {
  const data = useLoaderData();
  const navigator = useNavigate();
  const onGenresMoviesHandler = (id: number) => {
    navigator(`${id}`);
  };

  return (
    <>
      <h6 className="text-2xl font-medium text-white text-center mb-5">
        تمام ژانرها
      </h6>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
        {data.map((genres) => {
          return (
            <span
              onClick={() => onGenresMoviesHandler(genres.id)}
              className="w-full border h-full rounded-xl p-2 text-center bg-gradient-to-b from-grayColor to-blackColor cursor-pointer"
              key={genres.id}
            >
              {genres.name}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Genres;

export const loader = async () => {
  return await queryClient.fetchQuery({
    queryKey: ["genres"],
    queryFn: ({ signal }) => fetchGenres(signal),
  });
};
