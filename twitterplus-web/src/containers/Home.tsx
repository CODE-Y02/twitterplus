import TweetList from "@/components/TweetList";
import Aside from "./Aside";
import AsideHome from "@/components/aside/AsideHome";

const Home = () => {
  return (
    <div className="overflow-y-scroll flex px-10 relative">
      <div className="flex-1">
        <TweetList />
      </div>

      {/* aside */}
      <Aside>
        <AsideHome />
      </Aside>
    </div>
  );
};

export default Home;
