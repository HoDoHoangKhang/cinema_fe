import React from "react";
import { useParams } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";
import useFetch from "../hooks/useFetch";
import RelatedMediaList from "../components/MovieDetail/RelatedMediaList";

const PeopleDetail = () => {
  //   const data = useLoaderData();
  const { id } = useParams();
  const { data: peopleDetail } = useFetch({
    url: `/person/${id}?append_to_response=combined_credits`,
  });
  console.log({ peopleDetail: peopleDetail });
  return (
    <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
      <div className="flex-1">
        <ImageComponent
          width={600}
          height={900}
          className="mb-6"
          src={`https://image.tmdb.org/t/p/original/${peopleDetail.profile_path}`}
        ></ImageComponent>
        <div>
          <p className="mb-6 text-lg font-bold">Personal Info</p>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Known for</p>
              <p>{peopleDetail.known_for_department}</p>
            </div>
            <div>
              <p className="font-bold">Gender</p>
              <p>{peopleDetail.gender === 1 ? "Female" : "Male"}</p>
            </div>
            <div>
              <p className="font-bold">Place of Birth</p>
              <p>{peopleDetail.place_of_birth}</p>
            </div>
            <div>
              <p className="font-bold">Birthday</p>
              <p>{peopleDetail.birthday}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2]">
        <p className="mb-6 text-2xl font-bold">{peopleDetail.name}</p>
        <div className="mb-6">
          <p className="mb-4 text-lg font-bold">Biography</p>
          <p>{peopleDetail.biography}</p>
        </div>
        <div>
          <div>
            <RelatedMediaList
              movieRelated={peopleDetail.combined_credits?.cast || []}
              title={"Known For"}
            ></RelatedMediaList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetail;
