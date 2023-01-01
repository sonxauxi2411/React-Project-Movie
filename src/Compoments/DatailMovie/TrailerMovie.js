import React from "react";
import YouTube from "react-youtube";
import getKeyTrailer from "../../api/getKeyTrailer";

function TrailerMovie({ id }) {
  const keyTrailerid = getKeyTrailer(id, "movie" || "tv");
  console.log(keyTrailerid);
  const opts = {
    height: "390",
    width: "640",
  };
  return (
    <div>
      <YouTube videoId="6JnN1DmbqoU" opts={opts} />
    </div>
  );
}

export default TrailerMovie;
