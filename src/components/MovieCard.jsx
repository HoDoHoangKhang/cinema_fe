import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";

function MovieCard({data}) {
    // console.log({ data: data });
  return (
    <Link
      to={`/movie/${data.id}`}
      className="overflow-hidden rounded-2xl border-1 border-white transition-all"
    >
      <div>
        <ImageComponent
          className="aspect-[8/9] w-full rounded-2xl object-cover"
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          width={188}
          height={211}
        ></ImageComponent>

        <div className="mt-[-60px] p-4">
          <p className="mb-3 inline-block h-14 w-14 items-center rounded-[100%] border-6 border-green-600 bg-black text-center text-xl leading-11 sm:text-xl">
            {data.vote_count}
          </p>
          <p className="font-semibold">{data.title || data.name}</p>
          <p className="text-gray-200">
            {data.release_date || "Chưa cập nhật"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
