import TradingViewWidget from "../components/TradingViewWidget";
import Performance from "../components/Performance";
import Navbar from "../components/Navbar";
import DesktopCard from "../components/DesktopCard";
import TrendingCoin from "../components/TrendingCoin";
import Menu from "../components/Menu";
// import Like from "../components/Like";

const Home = () => {
  return (
    <>
    <section id="top-section" className="bg-default-gray min-h-screen">
      <Navbar />
      <div className="bg-default-gray w-full max-h-screen mt-7 max-w-[83rem] mx-auto xl:flex gap-5 h-auto ">
        <div className=" bg-white w-full h-auto  max-w-[55.0625rem]  xl:bg-default-gray pt-4 px-4 sm:px-0  xl:pt-5 ">
          <TradingViewWidget />
          <Menu/>
        </div>
        <div className="w-[95%] sm:w-full mx-auto  mt-[4.25rem] mb-[3.875rem] lg:mt-7 lg:mb-0">
          <DesktopCard className="xl:hidden" />
          <DesktopCard className="hidden xl:block xl:mx-0" />
          <TrendingCoin className="hidden mt-2 xl:block xl:mx-0" />
          <TrendingCoin className="xl:hidden mt-2 xl:mx-0" />
        </div>
      </div>
    </section>
   
    </>
  );
};
export default Home;