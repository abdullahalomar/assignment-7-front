import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./DonorTestimonial.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const DonorTestimonial = () => {
  return (
    <div className="mx-6 sm:mx-6 md:mx-28 lg:mx-28 mt-10">
      <h1 className="text-center text-4xl font-semibold">donor testimonial</h1>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-80 h-[400px] shadow-xl bg-gradient-to-r from-cyan-300 to-blue-400">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Emily R.</h2>
                <p>
                  <span className="font-semibold">Location:</span> Chicago,
                  Illinois
                </p>
                <p>
                  <span className="font-semibold">Contribution Date:</span>{" "}
                  December 10, 2023
                </p>
                <p className="">
                  "Knowing that my donation of coats and scarves can bring
                  warmth to someone in need fills my heart with joy. It's a
                  simple gesture, but the gratitude I've received is
                  immeasurable."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80   shadow-xl bg-gradient-to-r from-cyan-300 to-blue-400">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center ">
                <h2 className="card-title">Michael T.</h2>
                <p>
                  <span className="font-semibold">Location:</span> Denver,
                  Colorado
                </p>
                <p>
                  <span className="font-semibold">Contribution Date:</span>{" "}
                  November 25, 2023
                </p>
                <p className="">
                  "I donated in memory of my grandfather, who always told us to
                  help others whenever we can. Seeing the community come
                  together to support those in need during winter is truly
                  inspiring." Visual: Michael standing beside a pile of winter
                  jackets, with a nostalgic look.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 shadow-xl bg-gradient-to-r from-cyan-300 to-blue-400">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Anita S</h2>
                <p>
                  <span className="font-semibold">Location:</span> New York, New
                  York
                </p>
                <p>
                  <span className="font-semibold">Contribution Date:</span>{" "}
                  January 5, 2024
                </p>
                <p>
                  "Every winter, I clear out our closets to donate clothes. It's
                  become a family tradition. The thought that our clothes help
                  someone stay warm makes our winter much brighter."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 shadow-xl bg-gradient-to-r from-cyan-300 to-blue-400">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Raj P.</h2>
                <p>
                  <span className="font-semibold">Location:</span> Seattle,
                  Washington
                </p>
                <p>
                  <span className="font-semibold">Contribution Date:</span>{" "}
                  December 15, 2023
                </p>
                <p>
                  "As someone who has experienced hardship, I understand the
                  importance of support. Donating winter clothes is my way of
                  weaving a tighter community fabric, one thread at a time."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 shadow-xl bg-gradient-to-r from-cyan-300 to-blue-400">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Jessica H.</h2>
                <p>
                  <span className="font-semibold">Location:</span> Minneapolis,
                  Minnesota
                </p>
                <p>
                  <span className="font-semibold">Contribution Date:</span>{" "}
                  November 18, 2023
                </p>
                <p>
                  "There's something incredibly fulfilling about helping others
                  stay warm. I knit several scarves and beanies every year,
                  knowing they'll bring warmth and smiles to faces I may never
                  see. It's a small act, but I believe it makes a big
                  difference."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 shadow-xl bg-gradient-to-r from-cyan-300 to-blue-400">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Luis F.</h2>
                <p>
                  <span className="font-semibold">Location:</span> Aspen,
                  Colorado
                </p>
                <p>
                  <span className="font-semibold">Contribution Date:</span>{" "}
                  December 22, 2023
                </p>
                <p>
                  "Donating winter gear has become a holiday tradition for us.
                  Instead of exchanging gifts, we buy and donate new winter
                  clothes to those in need. It warms our hearts, knowing we're
                  spreading holiday cheer and warmth in a meaningful way."
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DonorTestimonial;
