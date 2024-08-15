import MoviesCompo from "../components/MoviesSec";
import { fetchMovies, queryClient } from "../utils/http";

const Movies = () => {
  return (
    <div>
      <MoviesCompo />
    </div>
  );
};

export default Movies;

export const loader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const pageNum = searchParams.get("page");

  return await queryClient.fetchQuery({
    queryKey: ["movies", { pgNum: pageNum }],
    queryFn: ({ signal, queryKey }) => fetchMovies(signal, queryKey[1].pgNum),
  });
};
