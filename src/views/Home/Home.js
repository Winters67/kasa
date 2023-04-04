import "./Home.scss";
import Header from "../../components/Header/Header";
import Logements from "../../data/logements.json";

function Home() {
  const title = "Home const 2";

  console.log(Logements);

  return (
    <>
      <Header />
      <div className="App">
        <h1>{title}</h1>
      </div>
    </>
  );
}

export default Home;
