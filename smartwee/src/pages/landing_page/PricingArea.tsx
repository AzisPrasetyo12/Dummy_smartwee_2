import React from 'react';
import HomeSinglePrice from './HomeSinglePrice';

const PricingArea = () => {
   return (
      <>
         <section className="tp-pricing-area pt-10 pb-10">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-2">
                  </div>
                  <div className="col-md-8">
                     <div className="section-title-wrapper mb-55 wow fadeInUp" data-wow-delay=".2s">                      
                        <h2 className="tp-section-title">Cara Mendaftar SMARTWee</h2>
                        <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-20">Untuk mendaftar aplikasi website SMARTWee melalui email, ikuti langkah-langkah berikut ini:</h5><br/>
                        <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-20">1. Buka situs resmi SMARTWee di browser Anda. (Pengurus RT) harus mendaftar/registrasi sebagai member di aplikasi SMARTWee terlebih dahulu, Disarankan menggunakan email/nomor milik RT.</h5><br/>
                        <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-20">2. Isi Form Registrasi Penanggung Jawab, Data Wilayah, Serta selesaikan Payment sesuai Package Plan yang dipilih.</h5><br/>
                        <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-20">3. Biaya aktivasi sewaktu-waktu bisa berubah.</h5><br/>
                     </div>
                  </div> 
                  {/* <div className="col-md-4">
                     <nav className="text-start text-md-end wow fadeInUp" data-wow-delay=".4s">
                        <div className="nav tp-pricing-tabs" id="nav-tab" role="tablist">
                           <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</button>
                           <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</button>
                        </div>
                     </nav>
                  </div> */}
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                           <div className="row">
                              <div className="col-xl-1">

                              </div>
                              {/* <div className="col-xl-4 col-md-6 mb-30">
                                 <div className="tp-pricing grey-bg text-center wow flipInY" data-wow-delay=".2s">
                                    <div className="tp-pricing-icon mb-40">
                                       <div className="tp-pricing-icon-inner">
                                          <i className={`flaticon-gift-box`}></i>
                                       </div>
                                    </div>
                                    <div className="tp-pricing-rate">
                                       <div className="tp-pricing-rate-inner text-center">
                                          <h3 className="tp-pricing-rate-title">Registrasi</h3>
                                          <br></br><br></br><br></br><br></br>                                      
                                          <h5 className=""
                                          style={{ textAlign: 'left'}}>Untuk mendaftar aplikasi website SMARTWee melalui email, ikuti langkah-langkah berikut ini:
                                          <br/><br/>1. Buka situs resmi SMARTWee di browser Anda. (Pengurus RT) harus mendaftar/registrasi sebagai member di aplikasi SMARTWee terlebih dahulu, Disarankan menggunakan email/nomor milik RT.
                                          <br/><br/>2. Isi Form Registrasi Penanggung Jawab, Data Wilayah, Serta selesaikan Payment sesuai Package Plan yang dipilih.
                                          <br/><br/>3. Biaya aktivasi sewaktu-waktu bisa berubah.</h5>  
                                             
                                       </div>
                                    </div>
                                 </div>
                              </div> */}
                              {/* <HomeSinglePrice icon_name="mop" title="Residential" price="25.00" price1="Rp. 100.000" price2="Rp. 1.000.000"/> */}

                              <HomeSinglePrice icon_name="network" title="Untuk 100KK" price="Basic" price1="Rp. 100.000" price2="Rp. 1.000.000" />

                              <HomeSinglePrice icon_name="badge" title="Untuk 500KK" price="Premium" price1="Rp. 200.000" price2="Rp. 2.000.000" />

                           </div>
                        </div>
                        {/* <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                           <div className="row">

                              <HomeSinglePrice icon_name="mop" title="Residential" price="55.00" price1="Rp. 100.000" price2="Rp. 1.000.000" />

                              <HomeSinglePrice icon_name="cleaning-1" title="Buildings" price="75.00" price1="Rp. 100.000" price2="Rp. 1.000.000" />

                              <HomeSinglePrice icon_name="vacuum-cleaner-1" title="Commercial" price="95.00" price1="Rp. 100.000" price2="Rp. 1.000.000" />

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

export default PricingArea;