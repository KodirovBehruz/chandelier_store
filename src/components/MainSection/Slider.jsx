import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Slider.css';

export default function Slider({ slides }) {
    console.log(slides);
    return (
        <Swiper modules={[ Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay ]}
                spaceBetween={50} slidesPerView={1}
                navigation pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                effect='fade'
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img src={slide.image} alt={slide.title} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
