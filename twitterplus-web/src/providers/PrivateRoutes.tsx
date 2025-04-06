import LoginForm from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/card";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const user = useSelector((state: RootState) => state.user);

  // if (!user.id)
  //   return (
  //     <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-slate-900 opacity-10 flex justify-center ">
  //       <Card className="ring-2 ring-white min-w-md h-fit mt-[10vh] p-6">
  //         <LoginForm />
  //       </Card>
  //     </div>
  //   );

  return children;
};

export default PrivateRoute;
