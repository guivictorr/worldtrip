import { Navigation, Pagination } from 'swiper';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { VStack, Text } from '@chakra-ui/react';

type SwiperProps = {
  slides: {
    title: string;
    subtitle: string;
    image: string;
  }[];
};

export function Swiper({ slides }: SwiperProps) {
  return (
    <SwiperReact
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ marginTop: 20 }}
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.title}
          style={{
            backgroundImage: `url(${slide.image})`,
            height: 250,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <VStack color="gray.50" fontWeight={700} spacing="3">
            <Text fontSize="x-large">{slide.title}</Text>
            <Text>{slide.subtitle}</Text>
          </VStack>
        </SwiperSlide>
      ))}
    </SwiperReact>
  );
}
