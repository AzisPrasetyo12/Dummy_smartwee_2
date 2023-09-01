import React from 'react';
import HomeThreeSingleFeature from './HomeThreeSingleFeature';

const HomeThreeFeatures = () => {
   return (
      <>
         <section className="tp-feature-area-three pt-10 pb-10" style={{ backgroundColor: 'white'}}>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        {/* <h5 className="tp-section-subtitle-three mb-20"> _ _ How We Works _ _</h5> */}
                        <h2 className="tp-section-title-two">Struktur Organisasi</h2>
                     </div>
                  </div>
               </div>
               <div className="col-12">
                  <div className="row text-center">
                     <div className="col-1"></div>                
                     <HomeThreeSingleFeature icon="booking" title="Dimas Saptoyoaji M.Art" jabatan= "Ketua RT" img1="src/assets/img/team/orang1.png"/>
                     <HomeThreeSingleFeature icon="delivery-box" title="Alfinur Angga" jabatan= "Wakil Ketua RT" img1="src/assets/img/team/orang2.png"/>
                     <HomeThreeSingleFeature icon="boy" title="Niarwidya Imelda" jabatan= "Sekretaris RT" img1="src/assets/img/team/orang3.png"/>
                     <HomeThreeSingleFeature icon="cleaning" title="Christine Novalia" jabatan= "Bendahara RT" img1="src/assets/img/team/orang4.png"/>
                     <HomeThreeSingleFeature icon="cleaning" title="Tio Kurniawan" jabatan= "Ketua Karang Taruna" img1="src/assets/img/team/orang5.png"/> 
                     {/* <HomeThreeSingleFeature icon="cleaning" title="Cahyo Wicaksono" jabatan= "Koordinator Lingkungan" img1="src/assets/img/team/orang6.png"/>          */}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeFeatures;