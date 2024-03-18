import AboutUs from "./AboutUs";
import DonorTestimonial from "./DonorTestimonial";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import VolunteerOpportunities from "./VolunteerOpportunities";
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
      <VolunteerOpportunities />
      {/* <SuccessStory></SuccessStory> */}
    </div>
  );
};

export default home;
