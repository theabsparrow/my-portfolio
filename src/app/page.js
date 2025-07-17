import AboutMe from "@/component/aboutMe/AboutMe";
import Banner from "@/component/banner/Banner";
import ContactComponent from "@/component/contact/ContactComponent";
import MySkills from "@/component/mySkills/MySkills";

const Home = () => {
  return (
    <section className="md:px-56 px-4 space-y-8 md:space-y-16">
      <Banner />
      <AboutMe />
      <MySkills />
      <ContactComponent />
    </section>
  );
};

export default Home;
