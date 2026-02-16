import TopBar from "../components/TopBar";
import HeaderBanner from "../components/HeaderBanner";
import Navbar from "../components/Navbar";
import NewsTicker from "../components/NewsTicker";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="bg-white min-h-screen">
        <TopBar />
      {/* Centered Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-md">
        <HeaderBanner />
        <Navbar />
        <NewsTicker />
        <MainSection />
      

      </div>
  <Footer />
    </div>
  );
};

export default Home;