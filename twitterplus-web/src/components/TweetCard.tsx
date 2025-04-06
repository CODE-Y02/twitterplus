import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { FaEye, FaRegHeart, FaRegMessage, FaRetweet } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import PrivateRoute from "@/providers/PrivateRoutes";

function TweetCard() {
  return (
    <div className="p-2 max-w-lg">
      <PrivateRoute>
        <Card className="bg-black text-white shadow-2xl shadow-white/30">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>img</AvatarFallback>
              </Avatar>
              <h2>User name</h2>
              <p className="text-white/50 ml-auto">@username</p>
            </CardTitle>
          </CardHeader>

          <CardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            officiis pariatur voluptatum ratione quaerat reprehenderit aliquam
            repellat fugit, perferendis, minima repellendus nam quos asperiores
            dolore dolorem, quam veniam explicabo corrupti nostrum suscipit
            temporibus sunt labore dicta optio. Veritatis debitis laudantium sit
            tenetur nam quia magni consequuntur consequatur ullam temporibus
            quas, distinctio cumque illum rem id est voluptatibus itaque.
            Laborum eos quae inventore eaque nemo et! Sunt non itaque nihil
            doloribus. Itaque inventore officiis hic soluta neque eius libero
            incidunt impedit odio labore est voluptate autem ex harum
            perferendis, aspernatur doloremque iure aut animi veniam dolore
            iusto veritatis eveniet praesentium. Non.
          </CardContent>

          <CardFooter className="p-3 justify-between">
            <Button
              variant={"outline"}
              className="bg-black text-white"
              size={"sm"}
            >
              <FaRegHeart />
              <p>100k</p>
            </Button>
            <Button
              variant={"outline"}
              className="bg-black text-white"
              size={"sm"}
            >
              <FaRegMessage />
              <p>100k</p>
            </Button>
            <Button
              variant={"outline"}
              className="bg-black text-white"
              size={"sm"}
            >
              <FaRetweet />
              <p>100k</p>
            </Button>
            <Button
              variant={"outline"}
              className="bg-black text-white"
              size={"sm"}
            >
              <FaEye />
              <p>100k</p>
            </Button>
            <Button
              variant={"outline"}
              className="bg-black text-white"
              size={"sm"}
            >
              <RiShareForwardLine />
              <p>100k</p>
            </Button>
          </CardFooter>
        </Card>
      </PrivateRoute>
    </div>
  );
}

export default TweetCard;
