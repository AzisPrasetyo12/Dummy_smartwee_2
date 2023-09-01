import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const HomeThreeHeroSlide = () => {
    return (
        <>
            <div className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide col-lg-10" data-swiper-autoplay="5000"
            style={{ 
                backgroundColor: '#ffffff'
                }}
            >
                <div className="slide-bg slide_bg_three"></div>
                <div className="slider-img-three">
                    {/* <img src="src/assets/img/service/homepage.svg" className="img-fluid" alt="img not found" /> */}
                    <img src="src/assets/img/service/homepage2.png" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 svgText">
                            <div className="tp-slider-three z-index svgText">

                                <Fade left>
                                    <h4 className="tp-slider-three-subtitle svgText title-homepage2 pl-10" > Hello</h4>
                                </Fade>

                                <Fade right>
                                    <h1 className="tp-slider-three-title title-homepage1 pl-10">  Gabriel Sinapa</h1>
                                </Fade>

                                <Fade bottom>
                                    <div className="tp-slider-three-btn">
                                        <h4 className="title-homepage3 pl-10"> Welcome to SMARTWee</h4>
                                        {/* <Link to="/about" >Welcome to SMARTWee</Link> */}
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThreeHeroSlide;