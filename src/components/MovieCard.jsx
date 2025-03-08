import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";
import CircleProgress from "./CircleProgress";

function MovieCard({data}) {
    console.log({ data: data });
  return (
    <Link
      to={data.media_type === "tv" ? `/tv/${data.id}` : `/movie/${data.id}`}
      className="overflow-hidden rounded-lg transition-all"
    >
      <div className="relative px-2">
        <ImageComponent
          className="aspect-[3/4] w-full rounded-lg object-cover"
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          width={188}
          height={211}
        ></ImageComponent>

        <div className="mt-[-45px] p-4">
          <CircleProgress
            value={Math.round(data.vote_average * 10)}
          ></CircleProgress>
          <p className="font-semibold">{data.title || data.name}</p>
        </div>
        {data.media_type === "tv" && (
          <div className="absolute top-2 right-3 rounded-sm bg-slate-500/50 px-2">
            TV Show
          </div>
        )}
      </div>
    </Link>
  );
}

export default MovieCard;
