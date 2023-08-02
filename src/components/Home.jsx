import HomeS2 from "./home/HomeS2";
import HomeS1 from "./home/HomeS1";
import HomeS3 from "./home/HomeS3";
import HomeS4 from "./home/HomeS4";
import HomeS5 from "./home/HomeS5";
import HomeS6 from "./home/HomeS6";
import Pros from "./Pros";
import '../scss/Home.scss'

function Home() {
  return (
    <div className="Home">
      <HomeS1 />
      <HomeS2 />
      <HomeS3 />
      <HomeS4 />
      <HomeS5 />
      <HomeS6 />
      <Pros />
    </div>
  );
}

export default Home;
