import { FaPlay } from "react-icons/fa";

function Movie({data}) {
  console.log({data: data})
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt="banner"
        className="aspect-video w-full object-cover brightness-50"
      />
      <div className="absolute bottom-[10%] px-5 text-white sm:px-8">
        <p className="mb-2 text-3xl font-semibold sm:text-4xl">{data.title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-200 p-0.5 text-sm sm:text-lg">
            PG13
          </p>
          <p className="text-sm sm:text-lg">{data.release_date}</p>
        </div>
        <div className="mt-4">
          <p className="mb-3 text-2xl font-semibold">Overview</p>
          <p className="hidden md:block md:text-[16px]">{data.overview}</p>
        </div>
        <div className="mt-4 flex gap-1">
          <button className="sm:text-md flex cursor-pointer items-center gap-2 rounded-sm bg-white p-2 text-sm text-black">
            <FaPlay /> <p>Traller</p>
          </button>
          <button className="sm:text-md flex cursor-pointer items-center gap-2 rounded-sm bg-slate-300/30 p-2 text-sm">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
