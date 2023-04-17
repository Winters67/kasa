import "../Home/Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import falaise from "../../assets/img/falaise.jpg";
import DatasLodging from "../../data/logements.json";


function Home() {
  const imageURL = falaise;

  return (
    <main className="home-container">
      <Banner imageURL={imageURL} title="Chez vous, partout et ailleurs" />
      <section className="gallery">

        {DatasLodging.map((lodging) => (
          <Card key={lodging.id} title={lodging.title} cover={lodging.cover} />
        ))}
      

      </section>
    </main>
  );
}

export default Home;
