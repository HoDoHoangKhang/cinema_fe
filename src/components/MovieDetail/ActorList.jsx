import { useState } from "react";
import ActorInfo from "./ActorInfo";

function ActorList({ actors }) {
    const [isShowMore, setIsShowMore]=useState(false);
    const currentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);
    console.log({ actors: actors });
  return (
    <div>
      <p className="mb-4 text-xl font-bold">Top Billed Cast</p>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {currentActors.map((actor) => (
          <ActorInfo key={actor.id} actor={actor}></ActorInfo>
        ))}
      </div>
      <p
        className="mt-4 cursor-pointer border border-white inline py-1 px-2 rounded-sm"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
}

export default ActorList;
