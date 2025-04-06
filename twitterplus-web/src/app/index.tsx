import { Route, Routes } from "react-router";
import Layout from "./layout";
import Home from "@/containers/Home";
import Explore from "@/containers/Explore";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<div>settings pag</div>} />
          <Route path="user/:username" element={<h1>username</h1>}></Route>
          <Route path="notifications" element={<h1>notification</h1>}></Route>
          <Route path="explore" element={<Explore />} />
          <Route path="dm" element={<div>dm pag</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
