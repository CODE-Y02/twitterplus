const arr = new Array(8).fill(true);

function AsideExplore() {
  return (
    <div className="space-y-2 ">
      <div className="space-y-2">
        <h2 className="underline text-xl">Trending</h2>
        <TrendingItem no={1} />
        {arr?.map((_, idx) => (
          <TrendingItem no={idx + 1} />
        ))}
      </div>
    </div>
  );
}

export default AsideExplore;

const TrendingItem = ({
  no,
  hashtag = "MSDHONI",
  count = 1000000,
}: {
  no: number;
  hashtag?: string;
  count?: number;
}) => (
  <div className="text-sm text-gray-400">
    <h3>{no} . Trending</h3>
    <div>
      <h3 className="text-base text-white">#{hashtag}</h3>
      <p>{count} posts</p>
    </div>
  </div>
);
