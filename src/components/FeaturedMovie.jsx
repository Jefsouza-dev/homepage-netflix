import "./FeaturedMovie.css";

const FeaturedMovie = ({ item }) => {
  let date = new Date(item.first_air_date);
  let resleaseYear = date.getFullYear();

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <div>
      <section
        className="featured"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}
      >
        <div className="featured--vertical">
          <div className="featured--horizontal">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--info">
              <div className="featured--points">
                {item.vote_average.toFixed(1)} pontos
              </div>
              <div className="featured--year">{resleaseYear}</div>
              <div className="featured--seasons">
                {item.number_of_seasons}{" "}
                {item.number_of_seasons !== 1 ? "Temporadas" : "Temporada"}
              </div>
            </div>
            <div className="featured--description">{description}</div>
            <div className="featured--buttons">
              <a href="#" className="featured--watchButton">
                ▶ Assistir
              </a>
              <a href="#" className="featured--myListButton">
                + Minha Lista
              </a>
            </div>
            <div className="featured--genres">
              <strong>Gêneros:</strong> {genres.join(", ")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedMovie;
