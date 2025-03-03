import { FaPlay } from "react-icons/fa";

function Banner({ movieDetail, groupedCrews }) {
  console.log({ movieDetail: movieDetail });
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
            className="aspect-video h-[210px] w-[140px] object-cover sm:h-[300px] sm:w-[230px] md:h-[400px] md:w-[300px]"
          />
          <div>
            <h3 className="mb-2.5 text-3xl font-semibold">
              {movieDetail.title}
            </h3>
            <div className="mb-9 flex items-center gap-6">
              <span className="border-1 border-gray-300 p-2 text-gray-300">
                P
              </span>
              <p className="hidden sm:block">
                {movieDetail.release_date || movieDetail.release_date}
              </p>
              <p className="hidden sm:block">{movieDetail.origin_country}</p>
            </div>
            <div className="mb-5 flex gap-8">
              <div className="flex items-center gap-2">
                <p className="h-[30px] w-[30px] rounded-full border-2 border-green-600 text-center leading-7">
                  73
                </p>
                <span>Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPlay></FaPlay>
                <span>Trailer</span>
              </div>
            </div>
            <div className="mb-8 hidden md:block">
              <p>Overview</p>
              <p>{movieDetail.overview}</p>
            </div>
            <div className="flex gap-15 text-sm">
              {Object.keys(groupedCrews).map((job) => (
                <div key={job}>
                  <p className="font-semibold">{job}</p>
                  <p className="text-[14px] font-light">{groupedCrews[job].map(crew=>crew.name).join(', ')}</p>
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
