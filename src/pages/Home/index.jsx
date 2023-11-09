import { Banner, Button, Container } from "../../components";
import CategoriesOfBook from "./CategoriesOfBook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Home = () => {
  return (
    <>
      <Swiper
        loop
        effect="fade"
        speed={1000}
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <Banner
            image="https://i.ibb.co/2NDYWV3/book-library-1.jpg"
            height={84}
          >
            <div className="max-w-2xl">
              <h1 className="mb-5 text-[54px] leading-none font-bold">
                Discover Your Next Adventure in the World of Books.
              </h1>
              <p className="mb-5 text-xl font-medium">
                Our hand-picked book collection has something for everyone. A
                Curated Collection of Books for Every Reader. Enjoy browsing!
              </p>
            </div>
          </Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image="https://i.ibb.co/n0kbhnK/book-library-2.jpg"
            height={84}
          >
            <div className="max-w-2xl">
              <h1 className="mb-5 text-[54px] leading-none font-bold">
                Explore, Learn, and Immerse Yourself in Literature
              </h1>
              <p className="mb-5 text-xl font-medium">
                Your Source for the Latest Releases and Timeless Classics. Find
                the latest and timeless classics on our platform. We prioritize
                clear and concise information tailored to your needs.
              </p>
            </div>
          </Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner image="https://i.ibb.co/wygv2Bn/books.jpg" height={84}>
            <div className="max-w-xl">
              <h1 className="mb-5 text-[54px] leading-none font-bold">
                Start Your Reading Journey Today
              </h1>
              <Button className="text-lg btn-primary mt-3 w-40">
                Get Start
              </Button>
            </div>
          </Banner>
        </SwiperSlide>
      </Swiper>

      <Container.Main className="max-w-7xl mx-auto w-[95%]">
        <CategoriesOfBook />
      </Container.Main>
    </>
  );
};

export default Home;
