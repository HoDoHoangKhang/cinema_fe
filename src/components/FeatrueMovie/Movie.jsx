import { FaPlay } from "react-icons/fa";
import { useModelContext } from "../../context/ModelProvider";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
function Movie({ data, videoResponse }) {
  console.log({ data111: data, videoResponse: videoResponse });
  const { openPopup } = useModelContext();

  const { data: moviesPopular } = useFetch({
    url: `/movie/${data.id}?append_to_response=release_dates`,
  });
  console.log({ tesstaasd: moviesPopular, videoResponse: videoResponse });
  const certification = (
    (moviesPopular?.release_dates?.results || []).find(
      (iso) => iso.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((certifi) => certifi.certification !== "")?.certification;
  const genres = (moviesPopular.genres || []).map((genre) => genre.name).join(", ");
  return (
    <div >
      <img
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt="banner"
        className="aspect-video w-full object-cover brightness-50"
      />
      <div className="absolute bottom-[10%] px-5 text-white sm:px-8">
        <p className="E5A00D mb-2 text-3xl font-semibold sm:text-5xl">
          {data.title}
        </p>
        <div>
          <div className="flex gap-2 mb-2 items-center">
            <p className="mb-1 inline-block border border-gray-200 p-0.5 px-2 text-sm sm:text-lg">
              {certification}
            </p>
            <div className="flex text-[14px]">{genres}</div>
          </div>
          <p className="text-sm sm:text-lg">{data.release_date}</p>
        </div>
        <div className="mt-4 hidden md:block">
          <p className="mb-3 text-2xl font-semibold">Overview</p>
          <p className="md:text-[16px]">{data.overview}</p>
        </div>
        <div className="mt-4 flex gap-2 text-[12px] sm:text-[14px]">
          <button
            className="flex cursor-pointer items-center gap-2 rounded-sm bg-white p-2 text-black"
            onClick={() => {
              openPopup(
                <iframe
                  title="Trailer"
                  src={`https://www.youtube.com/embed/${videoResponse}`}
                  className="aspect-video w-[50vw]"
                />,
              );
            }}
          >
            <FaPlay /> <p>Traller</p>
          </button>
          <Link to={`/movie/${data.id}`}>
            <button className="flex cursor-pointer items-center gap-2 rounded-sm bg-slate-300/30 p-2">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Movie;
