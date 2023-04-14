import "../Home/Home.scss";
import Banner from "../../components/Banner/Banner";
import CardDisplay from "../../components/Card/Card";
import falaise from "../../assets/img/falaise.jpg";

function Home() {
  const imageURL = falaise;
  return (
    <main className="home-container">
      <Banner imageURL={imageURL} title="Chez vous, partout et ailleurs" />
      <section className="gallery">
        <CardDisplay />
      </section>
    </main>
  );
}

export default Home;
