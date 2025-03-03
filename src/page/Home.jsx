import FeatureMovie from "../components/FeatrueMovie";
import MediaList from "../components/MediaList";
import { TRENDING_TABS, TOP_RATED_TABS } from "../libs/constans";

function Home() {
    return (
      <div>
        <FeatureMovie></FeatureMovie>
        <MediaList tabs={TRENDING_TABS} title={"Trending"}></MediaList>
        <MediaList tabs={TOP_RATED_TABS} title={"Top Rated"}></MediaList>
      </div>
    );
}

export default Home;
