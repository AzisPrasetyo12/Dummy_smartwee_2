import React from 'react';
import ServicePageArea from './ServicePageArea';

const ServicesArea = () => {
   return (
      <>
         <section className="tp-service-area-three "
                        style={{ 
                           backgroundColor: "#31544E"
                           }}
         >
         {/* <section className="tp-cta-area-two tp-service-area-three">
            <div className="tp-cta-area-two-bg"> */}
               <div className="container">
                  <div className="row" style={{ color: 'white', alignItems: 'center'}}>
                     <div className="col-12">
                        <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                           {/* <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Best Services</h5> */}
                           <h6 style={{ color: 'white', alignItems: 'center'}}><br/><br/>SMARTWee merupakan aplikasi manajemen rukun tetangga, SMARTWee membantu pengguna dengan berbagai cara, <br/>
                           seperti pencatatan data warga, pencatatan keuangan, surat-menyurat, kalender acara RT, <br/> pengaduan dan permintaan layanan, informasi dan berita terkini</h6>
                        </div>
                     </div>
                  </div>
                  <div className="row">            
                  <ServicePageArea 
                  service_image_num="1" 
                  ser_icon_img="window" 
                  ser_title="WEB Version"
                  img = "src/assets/img/service/webdevice.svg"
                  textline = "Aplikasi rukun tetangga SMARTWee tersedia dalam versi web yang dapat diakses melalui browser pada PC atau laptop. Dalam versi web ini, pengguna dapat dengan mudah mengakses fitur-fitur yang telah disediakan, seperti pencatatan data warga, pencatatan keuangan, surat-menyurat, kalender acara RT dll."
                  >
                  </ServicePageArea>

                  <ServicePageArea 
                  service_image_num="10" 
                  ser_icon_img="gift-box" 
                  ser_title="Mobile Version"
                  // img = "src/assets/img/service/MOBILEKEREN.svg"
                  img = "src/assets/img/service/Mobileloop.svg"
                  textline = "SMARTWee menjadi solusi yang lengkap dan mudah digunakan untuk membantu pengelolaan dan memperbaiki kualitas hidup di lingkungan RT/RW dalam versi mobile yang sedang dikembangkan. Fiturnya antara lain pencatatan data warga, pencatatan keuangan, surat-menyurat, kalender acara RT dll. In developmet."
                  >
                  </ServicePageArea>

                  </div>
               </div>
            {/* </div> */}
         </section>
      </>
   );
};

export default ServicesArea;