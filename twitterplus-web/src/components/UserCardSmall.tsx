import PrivateRoute from "@/providers/PrivateRoutes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

const UserCardSmall = () => {
  return (
    <PrivateRoute>
      <Card className="bg-black text-white p-3 gap-3 shadow-md shadow-purple-400/50">
        <div className="flex gap-3 text-sm">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>img</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-3">
            <CardHeader className="flex  justify-between">
              <CardTitle>
                <h2>User name</h2>
                <p className="text-white/50 ml-auto">@username</p>
              </CardTitle>

              <Button
                size={"sm"}
                variant={"ghost"}
                className="bg-blue-500 rounded-md"
              >
                Follow
              </Button>
            </CardHeader>

            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolorum tempore eos omnis obcaecati similique! Id
              esse quis tenetur labore?
            </p>
          </div>
        </div>
      </Card>
    </PrivateRoute>
  );
};

export default UserCardSmall;
