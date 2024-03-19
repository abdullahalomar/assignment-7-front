import DonorTestimonial from "./DonorTestimonial";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import VolunteerOpportunities from "./VolunteerOpportunities";
import WeatherSafetyTips from "./WeatherSafetyTips";
import WhatWeDo from "./WhatWeDo";
import WinterCloths from "./WinterCloths";

const home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <WinterCloths></WinterCloths>
      <DonorTestimonial></DonorTestimonial>
      <Gallery></Gallery>
      <WhatWeDo></WhatWeDo>
      <WeatherSafetyTips></WeatherSafetyTips>
      <VolunteerOpportunities />
      {/* <SuccessStory></SuccessStory> */}
    </div>
  );
};

export default home;
