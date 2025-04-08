import { FaPlay } from "react-icons/fa";
import { useModelContext } from "../../context/ModelProvider";
import CircleProgress from "../CircleProgress";

function Banner({ movieDetail, groupedCrews }) {
  const {openPopup}=useModelContext();
  console.log({ movieDetail: movieDetail });
  const videoKey = (movieDetail?.videos?.results || []).find((videoKey) => videoKey.type === 'Trailer')?.key;
  console.log({ videoKey: videoKey });
  const certification = (
    (movieDetail?.release_dates?.results || []).find(
      (iso) => iso.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((certifi) => certifi.certification !== "")?.certification;

    const genres = (movieDetail.genres || [])
      .map((genre) => genre.name)
      .join(", ");

  return (
    <div>
      <div className="relative overflow-hidden text-white">
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
          alt=""
          className="w-full brightness-50"
        />
        <div className="absolute top-[50%] left-8 flex translate-y-[-50%] items-start gap-6">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            alt=""
            className="aspect-video h-[210px] w-[140px] rounded-md object-cover sm:h-[300px] sm:w-[230px] md:h-[400px] md:w-[300px]"
          />
          <div>
            <h3 className="mb-2.5 text-3xl font-semibold">
              {movieDetail.title || movieDetail.name}
            </h3>
            <div className="mb-9 flex items-center gap-6">
              {certification != "" || (
                <span className="border-1 border-gray-300 px-2 py-1 text-gray-300">
                  {certification}
                </span>
              )}
              <p className="hidden sm:block">
                {movieDetail.release_date || movieDetail.first_air_day}
              </p>
              <p className="hidden sm:block">{movieDetail.origin_country}</p>
              <p className="hidden sm:block">{genres}</p>
            </div>
            <div className="mb-5 flex items-center gap-8 text-[14px] font-bold">
              <div className="flex items-center gap-1">
                <CircleProgress
                  value={Math.round(movieDetail.vote_average * 10)}
                ></CircleProgress>
                <span>
                  User <br /> Score
                </span>
              </div>
              <button
                className="flex cursor-pointer items-center gap-2 rounded-full bg-[#032541] px-4 py-2 transition-all hover:scale-110"
                onClick={() => {
                  openPopup(
                    <iframe
                      title="Trailer"
                      src={`https://www.youtube.com/embed/${videoKey}`}
                      className="aspect-video w-[50vw]"
                    />,
                  );
                }}
              >
                <FaPlay></FaPlay>
                <span>Trailer</span>
              </button>
            </div>
            <div className="mb-8 hidden md:block">
              <p className="text-lg font-bold">Overview</p>
              <p>{movieDetail.overview}</p>
            </div>
            <div className="flex gap-15 text-sm">
              {Object.keys(groupedCrews).map((job) => (
                <div key={job}>
                  <p className="text-lg font-semibold">{job}</p>
                  <p className="text-[14px] font-light">
                    {groupedCrews[job].map((crew) => crew.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
