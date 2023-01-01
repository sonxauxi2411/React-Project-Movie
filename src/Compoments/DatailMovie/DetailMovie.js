import React from "react";
import getDetail from "../../api/getDetail";
import { bgBanner, bgPoster, bgPosterDetail } from "../../assets/Images";
import style from "./DetailMovie.module.scss";
import AvgMovie from "../../UI/AvgMovie";
import TitleGenres from "../../UI/TitleGenres";
import getCastMovie from "../../api/getCastMovie";
import AutoSwiper from "../../UI/AutoSwiper";
import TitleDetail from "./TitleDetail";
import TrailerMovie from "./TrailerMovie";

function DetailMovie({ id }) {
  const data = getDetail(id, "movie");

  return (
    <>
      <TrailerMovie id={id} />
      <TitleDetail data={data} />
    </>
  );
}

export default DetailMovie;
