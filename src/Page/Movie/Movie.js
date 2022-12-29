/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMovie from "../../api/getMovie";
import Banner from "../../Compoments/banner/Banner";
import { loadingGlobalAction } from "../../Redux/LoadingGlobal";
import Button from "../../UI/Button";
import TitleHome from "../../UI/TitleHome";
import style from "./Movie.module.scss";
function Movie() {
  const isLoading = useSelector((state) => state.loading.globalLoading);
  const typeMovie = [
    {
      name: "Popular",
      type: "poupular",
    },
    {
      name: "Top Rated",
      type: "top_rated",
    },
  ];
  const dispatch = useDispatch();
  const [type, setType] = useState("popular");

  const data = getMovie(type);
  // const handlerPopular = () => {
  //   if (type !== "popular") {
  //     dispatch(loadingGlobalAction.setGlobalLoading(true));
  //     setType("popular");
  //     setActive(true);
  //   }
  // };
  // const handlerTopRated = () => {
  //   if (type !== "top_reted") {
  //     dispatch(loadingGlobalAction.setGlobalLoading(true));
  //     setType("top_rated");
  //     setActive(true);
  //   }
  // };
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(loadingGlobalAction.setGlobalLoading(false));
      }, 2000);
    }
  }, [isLoading]);
  //console.log(data);
  const handlerType = (titleType) => {
    if (type !== titleType.type) {
      dispatch(loadingGlobalAction.setGlobalLoading(true));
      setType(titleType.type);
    }
    console.log("type", type);
    console.log("titleType", titleType);
  };
  return (
    <div>
      <Banner data={data} />
      <div className=" mt-4 ">
        <div className="d-flex justify-content-between">
          <div>
            <TitleHome title="Movie" />
          </div>
          <div className="d-flex">
            {/* <Button onClick={handlerPopular} active={active}>
              Popular
            </Button>
            <Button onClick={handlerTopRated}>Top Rated</Button> */}
            {typeMovie.map((titleType) => {
              return (
                <Button
                  key={titleType.name}
                  onClick={() => handlerType(titleType)}
                  className={titleType.type == type ? "active" : "ok"}
                >
                  {titleType.name}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Movie;
