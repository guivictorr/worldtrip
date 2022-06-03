import { Navigation, Pagination } from 'swiper';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { VStack, Text, useBreakpointValue } from '@chakra-ui/react';

type SwiperProps = {
  slides: {
    title: string;
    subtitle: string;
    image: string;
  }[];
};

export function Swiper({ slides }: SwiperProps) {
  const isWide = useBreakpointValue({
    base: false,
    sm: true,
  });
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
            backgroundSize: 'cover',
            height: isWide ? 450 : 250,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <VStack color="gray.50" fontWeight={700} spacing="3">
            <Text fontSize={['2xl', '5xl']}>{slide.title}</Text>
            <Text fontSize={['sm', '2xl']}>{slide.subtitle}</Text>
          </VStack>
        </SwiperSlide>
      ))}
    </SwiperReact>
  );
}
