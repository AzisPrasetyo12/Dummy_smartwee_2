import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoAbout = () => {
   return (
      <>
         <section className="tp-about-area-two fix pt-50 pb-50">
            <div className="container" style={{backgroundColor: '#ffffff'}}>
               <div className="row">
                  <div className="col-lg-6 col-md-10">
                     <div className="tp-about-img-two position-relative wow fadeInUp" data-wow-delay=".4s">
                        <img src="src/assets/img/service/fitur2.svg"  alt="img not found"/>
                           {/* <img src="src/assets/img/service/solution2.png" className="img-fluid img-second" alt="img not found"/> */}
                              {/* <div className="tp-about-img-two-badge">
                                 <h3>20</h3>
                                 <h5>years <br/>Experience</h5>
                              </div> */}
                           </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="tp-about-text-two wow fadeInUp" data-wow-delay=".7s">
                           <div className="section-title-wrapper mb-20">
                              <h2 className="tp-section-title-two translate-y--10">Fitur yang akan anda dapatkan</h2>
                           </div>
                           <p className="mb-40">SMARTWee mendorong penyampaian dan pengelolaan layanan yang efisien dan meningkatkan efektivitas, akuntabilitas, dan transparansi layanan.</p>
                           <div className="tp-about-text-two-service">
                              <div className="tp-about-text-two-service-single mb-65">
                                 <div className="tp-about-text-two-service-single-icon">
                                    <span><i className="flaticon-happy"></i></span>
                                 </div>
                                 <div className="tp-about-text-two-service-single-text">
                                    <h4 className="tp-about-text-two-service-title">
                                       <Link to="/login">Efesien</Link></h4>
                                       <p><br></br></p>
                                 </div>
                                 <div className="tp-about-text-two-service-single-icon">
                                    <span><i className="flaticon-badge"></i></span>
                                 </div>
                                 <div className="tp-about-text-two-service-single-text">
                                    <h4 className="tp-about-text-two-service-title">
                                       <Link to="/login">Efektif</Link></h4>
                                 </div>
                              </div>
                              <div className="tp-about-text-two-service-single mb-60">
                              <div className="tp-about-text-two-service-single-icon">
                                    <span><i className="flaticon-file"></i></span>
                                 </div>
                                 <div className="tp-about-text-two-service-single-text">
                                    <h4 className="tp-about-text-two-service-title">
                                       <Link to="/login">Akuntabilitas</Link></h4>
                                       <p><br></br></p>
                                 </div>
                                 <div className="tp-about-text-two-service-single-icon">
                                    <span><i className="flaticon-video-camera"></i></span>
                                 </div>
                                 <div className="tp-about-text-two-service-single-text">
                                    <h4 className="tp-about-text-two-service-title">
                                       <Link to="/login">Transparan</Link></h4>
                                 </div>
                              </div>
                           </div>
                           {/* <div className="tp-about-text-two-sign pt-10">
                              <div className="tp-about-text-two-sign-img">
                                 <img src="assets/img/about/sign.png" className="img-fluid" alt="img not found"/>
                              </div>
                              <div className="tp-about-text-two-sign-text">
                                 <h4 className="tp-about-text-two-sign-name">Fesus Cameron</h4>
                                 <span>CEO & Founder</span>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
         </section>
      </>
   );
};

export default HomeTwoAbout;