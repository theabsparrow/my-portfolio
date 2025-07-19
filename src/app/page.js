import AboutMe from "@/component/aboutMe/AboutMe";
import Banner from "@/component/banner/Banner";
import ContactComponent from "@/component/contact/ContactComponent";
import MySkills from "@/component/mySkills/MySkills";
import RecentProject from "@/component/recentProject/RecentProject";

const Home = () => {
  return (
    <section className="md:px-56 px-4 space-y-16 md:space-y-28">
      <Banner />
      <AboutMe />
      <RecentProject />
      <MySkills />
      <ContactComponent />
    </section>
  );
};

export default Home;
