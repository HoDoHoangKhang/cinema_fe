import React, { useState } from "react";
import ImageComponent from "../ImageComponent";

const SeasonList = ({ seasons = [] }) => {
  const [isShow, setIsShow] = useState(false);
  const seasonCurrent = isShow
    ? seasons
    : seasons.slice(-5);

  console.log({ seasonCurrent: seasonCurrent });
  return (
    <div className="mt-8 text-[1.3wh]">
      <p className="mb-4 text-[1.4vw] font-bold">Season</p>
      <div className="space-y-4">
        {seasonCurrent
          .slice()
          .reverse()
          .map((season) => (
            <div
              key={season.id}
              className="flex gap-4 rounded-lg border border-slate-200 p-4 shadow-md"
            >
              <ImageComponent
                src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                width={130}
                height={195}
                className={"rounded-lg object-cover"}
              ></ImageComponent>
              <div className="space-y-1">
                <p className="text-[1.4vw] font-bold">{season.name}</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold">Rating </p>
                  <span className="h-8 w-8 rounded-full bg-slate-300/50 text-center leading-8">
                    {season.vote_average}
                  </span>
                </div>
                <div>
                  <span className="font-bold">Release Data: </span>
                  {season.air_date}
                </div>
                <div className="font-bold">Episodes {season.episode_count}</div>
                <p>{season.overview}</p>
              </div>
            </div>
          ))}
      </div>
      {seasons.length <= 5 ? (
        ""
      ) : (
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default SeasonList;
