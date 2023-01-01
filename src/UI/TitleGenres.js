import React from "react";
import style from "./UI.module.scss";

function TitleGenres({ genres, banner, detail }) {
  // console.log(genres)
  const genresAll = detail ? genres : genres?.slice(0, 2);
  return (
    <>
      {genresAll?.map((genre) => (
        <div className={`${style.genres} ${banner ? style.banner : ""}`}>
          {genre.name}
        </div>
      ))}
    </>
  );
}

export default TitleGenres;
