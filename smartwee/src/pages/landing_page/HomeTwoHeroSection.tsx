import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { CgArrowLongRight,CgArrowLongLeft } from 'react-icons/cg';
import "swiper/css";
import "swiper/css/pagination"

// import 'swiper/swiper.min.css'
// import 'swiper/components/navigation/navigation.min.css'
// import 'swiper/components/pagination/pagination.min.css'

import { FaPlay } from 'react-icons/fa';
import { Fade } from 'react-reveal';
// import Fade from 'react-reveal/Fade';
import SwiperCore, { Pagination,Navigation, Autoplay, A11y, EffectFade } from 'swiper';
import HomeTwoHeroSectionSingleSlide from '@/pages/landing_page/HomeTwoHeroSectionSingleSlide';
import { Carousel } from 'react-bootstrap';
import { IconBrandZalando } from '@tabler/icons';

// install Swiper modules
SwiperCore.use([Pagination,Navigation, Autoplay, A11y, EffectFade]);

const HomeTwoHeroSection = () => {
   const [isOpen, setOpen] = useState(false);
   return (
      <>

          {/* @ts-ignore */}
         <ModalVideo channel='youtube' autoplay isOpen={isOpen}
            videoId="zSln8WMUwcs" onClose={() => setOpen(false)} />
         
        
         <section className="tp-slider-area fix">
            <div className="tp-slider-active swiper-container">
 
            <Carousel indicators={false}
               nextIcon={<div className="swiper-button-next slide-next">
               <i><CgArrowLongRight className="long_arrow" /></i> </div>}
               prevIcon={<div className="swiper-button-prev slide-prev">
               <i><CgArrowLongLeft className="long_arrow" /></i> </div>}
               >
                  {[
                     { 
                        bg: "url('src/assets/img/background/landingpage.png')", 
                        content: (
                           
                              <div className="tp-slider-wrapper-two text-center mt-35">
                                 <div className="tp-slider-two z-index text-center">
                                    <Fade bottom>
                                       <h1 className="tp-slider-title-two mb-35"><span>Welcome to</span></h1>
                                       <h3 className="tp-slider-title-two">SMARTWEE</h3><br></br>
                                       {/* <h3 className="tp-slider-subtitle-two">Sebagai aplikasi manajemen rukun tetangga, SMARTWee membantu pengguna dengan berbagai cara, seperti pencatatan data warga, pencatatan keuangan, surat-menyurat, kalender acara RT, pengaduan dan permintaan layanan, informasi dan berita terkini.</h3>                                        */}
                                    </Fade>     
                                    <Fade bottom>
                                       <div className="tp-slider-video-btn-two mb-10" data-animation="fadeInUp" data-delay=".3s"> {/* @ts-ignore */}
                                             <button onClick={() => setOpen(true)} className="venobox" data-autoplay="true" data-vbtype="video" href ="https://www.youtube.com/watch?v=zSln8WMUwcs">
                                                   <i > <FaPlay className="text-white" /> </i>
                                             </button>
                                       </div>
                                       <h1><br></br></h1>
                                    </Fade>
                                 </div>
                              </div>
                           
                        ) 
                     }
                     // ,{ 
                     //    bg: "url('src/assets/img/background/landingpage.png')",
                     //    content: (
                     //       <div className="tp-slider-wrapper-two text-center mt-35">                               
                     //            <div className="tp-slider-two z-index text-center">
                     //                <Fade right>
                     //                    <h1 className="tp-slider-title-two mb-35">SMART</h1>                                      
                     //                    <h3 className="tp-slider-title-two"><span>in everyway</span></h3>
                     //                    <h3 className="tp-slider-subtitle-two"></h3>
                     //                    <div className="tp-slider-video-btn-two mb-10" data-animation="fadeInUp" data-delay=".3s">{/* @ts-ignore */}
                     //                        <button onClick={() => setOpen(true)} className="venobox" data-autoplay="true" data-vbtype="video" href ="https://www.youtube.com/watch?v=zSln8WMUwcs">
                     //                                <i > <FaPlay className="text-white" /> </i>
                     //                        </button>
                     //                    </div>
                     //                </Fade>
                     //            </div>
                     //        </div>
                     //    ) 
                     // }
                     ,{ 
                        bg: "url('src/assets/img/background/landingpage.png')",
                        content: (
                           <div className="tp-slider-three z-index">
                                <Fade left>
                                    <h4 className="tp-slider-three-subtitle" style={{color: '#ffffff'}}> Fast and efficient service</h4>
                                </Fade>
                                <Fade right>
                                    {/* <h1 className="tp-slider-three-title">Cleaning
                                        <br />Excellence <br />Guaranteed!</h1> */}
                                        <h1 className="tp-slider-title-two mb-35">SMART<span>in everyway</span></h1>
                                </Fade>
                                
                                {/* <Fade bottom>
                                    <div className="tp-slider-three-btn">
                                        <Link to="/about" className="yellow-btn">
                                            <i className="flaticon-enter"></i> Register</Link>
                                    </div>
                                </Fade> */}
                            </div>
                        ) 
                     }
                  ].map((item, index) => (
                     <Carousel.Item key={index}>
                        <HomeTwoHeroSectionSingleSlide 
                           // openVideo={setOpen} 
                           bg={item.bg}
                           content={item.content}
                        />
                     </Carousel.Item>
                  ))}

               </Carousel>

            </div>
         </section> 
      </>
   );
};

export default HomeTwoHeroSection;