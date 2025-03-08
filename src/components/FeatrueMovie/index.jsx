import { useEffect, useState } from "react";
import Movie from "./Movie";
import Paginate from "./Paginate";
import Loading from "../Loading";
import useFetch from "../../hooks/useFetch";

function FeatureMovie() {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true); // Thêm trạng thái loading
  // const [error, setError] = useState(null); // Thêm trạng thái lỗi
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: moviesPopular, isLoading } = useFetch({
    url: '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&include_video=true',
  });

  const { data: videoResponse } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );
  const movies = (moviesPopular.results || []).slice(0, 4);
  console.log({ moviesPopular: movies, videoResponse: videoResponse });

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
  }, [JSON.stringify(movies)]);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTA5YTAwYTIzN2FmYTg2NDljMWJhOTI4NjQwM2I3MyIsIm5iZiI6MTc0MDYyOTMyNC40MzI5OTk4LCJzdWIiOiI2N2JmZTU0YzhjMzg2YzRlNWJjOGM4NmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AAO0IjGgnpYbL8wZkrTy0OHUrFnQGgBD1WlcjnLaHp4",
  //         },
  //       });

  //       if (!res.ok) {
  //         throw new Error(`Error: ${res.status} ${res.statusText}`);
  //       }

  //       const data = await res.json();
  //       let movieList = data.results.slice(0, 4);
  //       setMovies(movieList);
  //       setActiveMovieId(movieList[0].id);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  // Tự động chuyển slide mỗi 5 giây
  useEffect(() => {
    if (movies.length === 0) return;

    let index = movies.findIndex((movie) => movie.id === activeMovieId);
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % movies.length;
      setActiveMovieId(movies[nextIndex].id);
      index = nextIndex; // Cập nhật index
    }, 5000);

    return () => clearInterval(interval); // Xóa interval khi unmount
  }, [movies, activeMovieId]);

  return (
    <div className="relative">
      {isLoading && <Loading></Loading>}
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => {
          return (
            !isLoading &&
            movies.length > 0 && (
              <Movie
                key={movie.id}
                data={movie}
                videoResponse={(videoResponse?.results || []).find(
                  (video) => video.type === "Trailer" && video.site==='YouTube',
                )?.key}
              />
            )
          );
        })}
      <Paginate
        data={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
}

export default FeatureMovie;
