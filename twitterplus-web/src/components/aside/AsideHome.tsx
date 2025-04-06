import UserCardSmall from "../UserCardSmall";

const AsideHome = () => {
  return (
    <div className="space-y-4 ">
      <div className="space-y-4">
        <h2 className="underline text-xl">Whom to follow</h2>
        <UserCardSmall />
        <UserCardSmall />
        <UserCardSmall />
        <UserCardSmall />
        <UserCardSmall />
      </div>
    </div>
  );
};

export default AsideHome;
