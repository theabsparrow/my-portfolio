import AboutMe from "@/component/aboutMe/AboutMe";
import Banner from "@/component/banner/Banner";

const Home = () => {
  return (
    <div className="md:px-56 px-4">
      <Banner />
      <AboutMe />
    </div>
  );
};

export default Home;
