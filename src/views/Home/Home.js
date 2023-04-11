import "../Home/Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <main className="home-container">
      <Banner title="Chez vous, partout et ailleurs" />
      <section className="gallery Card">
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
      </section>
    </main>
  );
}

export default Home;
