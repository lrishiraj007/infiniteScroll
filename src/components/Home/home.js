import React from "react";
import InfiniteScroll from "../Infinitescroll/Infinitescroll";

export default function Home(props) {
  return (
    <div>
      <div className="page-container container text-center">
        <div className="page-content mini-container">
          <InfiniteScroll />
        </div>
      </div>
    </div>
  );
}
