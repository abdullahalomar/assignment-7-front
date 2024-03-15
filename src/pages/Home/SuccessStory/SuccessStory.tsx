// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./SuccessStory.css";

// import required modules
import { EffectCards } from "swiper/modules";
const SuccessStory = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-4xl font-semibold ">success stories</h1>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="SuccessSwiper"
        >
          <SwiperSlide className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="p-10 ">
              <h1 className="text-xl font-bold">Maria's Story</h1>
              <div className="w-[130px] h-[2px] bg-black"></div>
              <p className="mt-5">
                Maria, a single mother of two, struggled to make ends meet
                during the winter months. With limited resources, she often
                worried about keeping her children warm and comfortable.
                However, thanks to the Distribution of Winter Clothes Management
                Platform, Maria received winter coats, hats, and gloves for her
                family. These essential items provided much-needed warmth and
                protection against the cold weather, allowing Maria's children
                to attend school without worrying about the harsh conditions
                outside.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-teal-500 to-sky-500">
            <div className="p-10 ">
              <h1 className="text-xl font-bold">Ahmed's Journey</h1>
              <div className="w-[130px] h-[2px] bg-black"></div>
              <p className="mt-5">
                Ahmed, a refugee displaced by conflict, found himself in a new
                country facing unfamiliar challenges, especially during the
                winter season. Accustomed to warmer climates, Ahmed struggled to
                adapt to the cold weather and lacked suitable winter clothing.
                However, with the help of the Distribution of Winter Clothes
                Management Platform, Ahmed received a winter coat, boots, and
                other essentials to keep him warm during the harsh winter
                months.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-emerald-500 to-green-500">
            <div className="p-10 ">
              <h1 className="text-xl font-bold">Elena's Gratitude</h1>
              <div className="w-[130px] h-[2px] bg-black"></div>
              <p className="mt-5">
                Elena, a senior citizen living on a fixed income, faced
                financial hardship and health challenges that made it difficult
                for her to afford winter clothing. As the temperatures dropped,
                Elena worried about staying warm and safe in her home. However,
                thanks to the Distribution of Winter Clothes Management
                Platform, Elena received a warm winter coat, scarves, and
                blankets to help her stay comfortable during the coldest months
                of the year.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-indigo-500 to-violet-500">
            <div className="p-10 ">
              <h1 className="text-xl font-bold">Jamal's Journey</h1>
              <div className="w-[130px] h-[2px] bg-black"></div>
              <p className="mt-5">
                Jamal, a young student from an underprivileged community, faced
                significant challenges accessing warm clothing during the winter
                months. His family struggled to afford basic necessities, let
                alone winter coats and boots. However, with the support of the
                Distribution of Winter Clothes Management Platform, Jamal
                received a brand-new winter coat and other essential items. This
                allowed him to focus on his studies and attend school without
                worrying about the biting cold.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-purple-500 to-fuchsia-500">
            <div className="p-10 ">
              <h1 className="text-xl font-bold">Lina's Relief</h1>
              <div className="w-[130px] h-[2px] bg-black"></div>
              <p className="mt-5">
                Lina, a single mother of three, recently lost her job and
                struggled to provide for her children during the winter season.
                With limited financial resources, she feared the impact of the
                cold weather on her family's health and well-being. However,
                thanks to the Distribution of Winter Clothes Management
                Platform, Lina received warm winter clothing for herself and her
                children. This act of kindness provided much-needed relief and
                support during a challenging time.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-pink-500 to-rose-500">
            <div className="p-10 ">
              <h1 className="text-xl font-bold">Raj's Resilience</h1>
              <div className="w-[130px] h-[2px] bg-black"></div>
              <p className="mt-5">
                Raj, a migrant worker living in temporary housing, faced
                adversity as he tried to make ends meet in a new city. Despite
                working long hours in demanding conditions, Raj struggled to
                afford warm clothing for himself and his family. However, with
                the assistance of the Distribution of Winter Clothes Management
                Platform, Raj received winter jackets, hats, and gloves for his
                entire family. This gesture of kindness and solidarity brought
                immense relief and comfort to Raj and his loved ones.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-red-500 to-orange-500">
            <div className="p-10 ">
              <h1 className="text-xl font-bold">Sarah's Support</h1>
              <div className="w-[130px] h-[2px] bg-black"></div>
              <p className="mt-5">
                Sarah, a survivor of domestic violence, sought refuge in a
                shelter to escape an abusive environment. As winter approached,
                Sarah faced the daunting task of rebuilding her life while
                coping with trauma and uncertainty. However, with the help of
                the Distribution of Winter Clothes Management Platform, Sarah
                received warm clothing and essentials to help her navigate the
                winter season with dignity and security.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStory;
