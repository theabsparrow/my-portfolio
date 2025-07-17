import AboutMe from "@/component/aboutMe/AboutMe";
import Banner from "@/component/banner/Banner";
import ContactComponent from "@/component/contact/ContactComponent";

const Home = () => {
  return (
    <section className="md:px-56 px-4">
      <Banner />
      <AboutMe />
      <div className="mt-10 md:mt-20">
        <ContactComponent />
      </div>
    </section>
  );
};

export default Home;
