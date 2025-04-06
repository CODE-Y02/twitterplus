import TweetList from "@/components/TweetList";
import Aside from "./Aside";
import AsideExplore from "@/components/aside/AsideExplore";

const Explore = () => {
  return (
    <div className="overflow-y-scroll flex px-10 relative">
      <div className="flex-1">
        <TweetList />
      </div>

      {/* aside */}
      <Aside>
        <AsideExplore />
      </Aside>
    </div>
  );
};

export default Explore;
