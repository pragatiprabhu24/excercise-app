import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                {data?.map((item) => (
                    <Box
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.title || item}

                    >
                        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    </Box>

                ))}

            </Slider>
            <h1 class="title-font sm:text-4xl text-left mt-20 font-bold text-orange-500 opacity-25">Fit is not a destination. It is a way of life.</h1>
        </>
    )
}

export default HorizontalScrollBar
