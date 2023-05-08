import React, { useEffect, useState } from "react";
import Tmdb from "../Tmdb";

//Style
import "./HomePage.css";

//Components
import MovieRow from "../components/MovieRow";
import FeaturedMovie from "../components/FeaturedMovie";
import Header from "../components/Header";
import Loading from "../components/Loading";

// ----------------------- //

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState();
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o filme em destaque (featured)
      let originals = list.filter((item) => item.slug === "originals");
      let random = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[random];
      let choseMovie = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(choseMovie);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((movie, key) => (
          <MovieRow key={key} title={movie.title} items={movie.items} />
        ))}
      </section>

      <footer>Made with ReactJS and the TMDB API</footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <Loading />
        </div>
      )}
    </div>
  );
};
