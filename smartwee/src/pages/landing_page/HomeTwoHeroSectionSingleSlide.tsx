import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Fade } from 'react-reveal';

const HomeTwoHeroSectionSingleSlide = ({ bg, content }) => {
    return (
        <>
            <div className="tp-single-slider tp-slider-height-two d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg " //responsive-img
                style={{ 
                    backgroundImage: bg,
                    backgroundColor: '#31544E',
                    // width: '100%',
                    // height:'auto'
                    }}
                ></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTwoHeroSectionSingleSlide;