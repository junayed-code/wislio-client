import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Section, Card } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "../../utils/axiso";

const getCategories = () => {
  return axios.get("/categories").then(res => res.data.data);
};

export default function CategoriesOfBook() {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
  });

  return (
    <Section className="py-10 md:py-16">
      <Section.Title className="text-primary-content">
        Featured Categories
      </Section.Title>

      <Swiper
        className="group mt-8"
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        modules={[Autoplay, Navigation]}
        autoplay={{ disableOnInteraction: false, delay: 2000 }}
        spaceBetween={20}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {categories?.map(category => (
          <SwiperSlide key={category._id}>
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
        <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full flex justify-between invisible group-hover:visible">
          <button className="swiper-prev btn btn-circle btn-secondary">
            ❮
          </button>
          <button className="swiper-next btn btn-circle btn-secondary">
            ❯
          </button>
        </div>
      </Swiper>
    </Section>
  );
}

const CategoryCard = ({ category = {} }) => {
  const { name, image } = category;

  return (
    <Card className="max-w-xs mx-auto">
      <Card.Image className="max-h-36" src={image} alt={name}></Card.Image>
      <Card.Title className="py-2">
        <Link
          className="underline underline-offset-2 hover:no-underline hover:text-primary-content"
          to={`/category/${name?.toLowerCase()}`}
        >
          {name}
        </Link>
      </Card.Title>
    </Card>
  );
};
