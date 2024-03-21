import "react-image-gallery/styles/scss/image-gallery.scss";

import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";

import first from "../../assets/images/hero-image/first.jpg";
import second from "../../assets/images/hero-image/second.jpg";
import third from "../../assets/images/hero-image/third.jpg";
const images = [
  {
    original: first,
    thumbnail: first,
  },
  {
    original: second,
    thumbnail: second,
  },
  {
    original: third,
    thumbnail: third,
  },
];

const Gallery = () => {
  return (
    <div className="my-24 lg:mx-28 md:mx-28 sm:mx-10 mx-10">
      <h1 className="text-center text-4xl font-semibold mb-10">Gallery</h1>
      <div data-aos="zoom-in-down">
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default Gallery;
