import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./DonorTestimonial.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useGetAllTestimonialsQuery } from "../../redux/features/dashboard/testimonialManagement.api";
import Loader from "../../utils/Loader";

const DonorTestimonial = () => {
  const { data: testimonialData, isLoading } =
    useGetAllTestimonialsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  // const testimonials = testimonialData?.data?.slice(0, 6);
  // console.log(testimonials);

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
          {testimonialData?.data?.slice(0, 6).map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="card w-80 h-[400px] shadow-xl bg-gradient-to-r from-cyan-300 to-blue-400">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={testimonial?.image} />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{testimonial.name}</h2>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {testimonial.location}
                  </p>
                  <p>
                    <span className="font-semibold">Contribution Date:</span>{" "}
                    {testimonial.contributionDate}
                  </p>
                  <p className="">{testimonial.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DonorTestimonial;
