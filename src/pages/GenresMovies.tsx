import { useLoaderData } from "react-router-dom";
import { fetchMoviesByGenId, queryClient } from "../utils/http";
import CardMovie from "../components/CardMovie";

const GenresMovies = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {data.map((movie) => {
        return <CardMovie movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default GenresMovies;

export const loader = async ({ params }) => {
  const id = params.genresId;
  return await queryClient.fetchQuery({
    queryKey: ["genres", { genres_id: id }],
    queryFn: ({ signal, queryKey }) =>
      fetchMoviesByGenId(signal, queryKey[1].genres_id),
  });
};
