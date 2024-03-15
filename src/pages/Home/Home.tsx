import AboutUs from "./AboutUs";
import DonorTestimonial from "./DonorTestimonial";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import Volunteer from "./Volunteer";
import WeatherSafetyTips from "./WeatherSafetyTips";
import WinterCloths from "./WinterCloths";

const home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <WinterCloths></WinterCloths>
      <DonorTestimonial></DonorTestimonial>
      <Gallery></Gallery>
      <AboutUs></AboutUs>
      <WeatherSafetyTips></WeatherSafetyTips>
      <Volunteer></Volunteer>
      {/* <SuccessStory></SuccessStory> */}
    </div>
  );
};

export default home;
