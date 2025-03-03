import { useState } from "react";
import ActorInfo from "./ActorInfo";

function ActorList({ actors }) {
    const [isShowMore, setIsShowMore]=useState(false);
    const currentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);
    console.log({ actors: actors });
  return (
    <div>
      <p className="mb-4 text-xl font-bold">Actor</p>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {currentActors.map((actor) => (
          <ActorInfo key={actor.id} actor={actor}></ActorInfo>
        ))}
      </div>
      <p
        className="mt-4 cursor-pointer text-[1.8vw] font-bold"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
}

export default ActorList;
