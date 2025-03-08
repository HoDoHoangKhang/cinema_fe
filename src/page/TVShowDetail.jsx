import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Banner from "../components/MovieDetail/Banner";
import ActorList from "../components/MovieDetail/ActorList";
import { groupBy } from "lodash";
import RelatedMediaList from "../components/MovieDetail/RelatedMediaList";
import Information from "../components/MovieDetail/Information";
import useFetch from "../hooks/useFetch";
import SeasonList from "../components/MovieDetail/SeasonList";

function TVShowDetail() {
  const { id } = useParams();

  const { data: movieDetail, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,release_dates,aggregate_credits,videos`,
  });
  const { data: movieRelatedTemp, isLoading: loadingRelated } = useFetch({
    url: `/tv/${id}/recommendations`,
  });
  const movieRelated = (movieRelatedTemp.results || []).slice(0, 8);

  const crews = (movieDetail.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));

  console.log({ crews });
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
          <ActorList
            actors={movieDetail.aggregate_credits?.cast || []}
          ></ActorList>
          <SeasonList seasons={movieDetail.seasons}></SeasonList>
          <RelatedMediaList
            movieRelated={movieRelated || []}
            title={"Related"}
          ></RelatedMediaList>
        </div>
        <div className="flex-1">
          <Information movieDetail={movieDetail}></Information>
        </div>
      </div>
    </div>
  );
}

export default TVShowDetail;
