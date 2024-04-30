import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./components/Data";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-zinc-300 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">our Testimonials</h1>

        <div className="bg-violet-400 h-[4px] w-1/3 mx-auto"></div>

        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
