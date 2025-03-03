import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Banner from "../components/MovieDetail/Banner";
import ActorList from "../components/MovieDetail/ActorList";
import { groupBy } from "lodash";
import RelatedMediaList from "../components/MovieDetail/RelatedMediaList";
import Information from "../components/MovieDetail/Information";
import useFetch from "../hooks/useFetch";

function MovieDetail() {
  const { id } = useParams();
  
  const { data: movieDetail, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  });
  const { data: movieRelatedTemp, isLoading: loadingRelated } = useFetch({
    url: `/movie/${id}/recommendations`,
  });
  const movieRelated=(movieRelatedTemp.results || [] ).slice(0,8);
  
  const crews = (movieDetail.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
  console.log(crews);
  const groupedCrews = groupBy(crews, "job");
  console.log(groupedCrews);

  if (isLoading || loadingRelated) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-black text-[1.4vw] text-white">
      <Banner movieDetail={movieDetail} groupedCrews={groupedCrews}></Banner>
      <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
        <div className="flex-[2]">
          <ActorList actors={movieDetail.credits?.cast || []}></ActorList>
          <RelatedMediaList
            movieRelated={movieRelated || []}
          ></RelatedMediaList>
        </div>
        <div className="flex-1">
          <Information movieDetail={movieDetail}></Information>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
