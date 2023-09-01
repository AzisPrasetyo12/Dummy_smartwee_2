import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const HomeSinglePrice = ({icon_name,title,price, price1, price2}) => {
   return (
      <>
         
         <div className="col-xl-5 col-md-6 mb-30">
            <div className="tp-pricing grey-bg text-center wow flipInY" data-wow-delay=".2s">
               <div className="tp-pricing-icon mb-40">
                  <div className="tp-pricing-icon-inner">
                     <i className={`flaticon-${icon_name}`}></i>
                  </div>
               </div>
               <div className="tp-pricing-rate">
                  <div className="tp-pricing-rate-inner text-center">
                     <h2 className="tp-pricing-rate-title mb-45">{price}</h2>
                     <h4 className="tp-pricing-rate-subtitle mb-30">{title}</h4>       
                  </div>
               </div>
               {/* <div className="tp-pricing-list mb-45">
                  <ul>
                     <li><i > <GiCheckMark/> </i> Carpet Cleaning</li>
                     <li><i > <GiCheckMark/> </i> Bathroom Cleaning</li>
                     <li><i > <GiCheckMark/> </i> Floor Cleaning</li>
                     <li><i > <GiCheckMark/> </i> Bedroom Cleaning</li>
                  </ul>
               </div> */}
                <div className="tp-pricing-list mb-45">
                  <div className='row'>
                     <div className="col-lg-12">
                        <ul>
                        <li><i > <GiCheckMark/> </i> Dashboard</li>
                        <li><i > <GiCheckMark/> </i> Kepengurusan RT</li>
                        <li><i > <GiCheckMark/> </i> Management Warga</li>
                        <li><i > <GiCheckMark/> </i> Keuangan RT</li>
                        <li><i > <GiCheckMark/> </i> Pengelolaan Tagihan Warga</li>
                        <li><i > <GiCheckMark/> </i> Surat Menyurat</li>
                        <li><i > <GiCheckMark/> </i> Laporan Kejadian</li>
                        <li><i > <GiCheckMark/> </i> Kalender Acara</li>
                        <li><i > <GiCheckMark/> </i> Berita Terkini</li>
                           {/* <li><i > <img src="src/assets/img/icon/checklist2.png" className="img-fluid" alt="img not found"/> </i> Dashboard</li>
                           <li><i > <img src="src/assets/img/icon/checklist2.png" className="img-fluid" alt="img not found"/> </i> Kepengurusan RT</li>
                           <li><i > <img src="src/assets/img/icon/checklist2.png" className="img-fluid" alt="img not found"/> </i> Management Warga</li>
                           <li><i > <img src="src/assets/img/icon/checklist2.png" className="img-fluid" alt="img not found"/> </i> Keuangan RT</li>
                           <li><i > <img src="src/assets/img/icon/checklist2.png" className="img-fluid" alt="img not found"/> </i> Pengelolaan Tagihan Warga</li>                        */}
                        {/* </ul>
                     </div>
                     <div className="col-lg-6">
                        <ul> */}
                           {/* <li><i > <img src="src/assets/img/icon/checklist2.png" className="img-fluid" alt="img not found"/> </i> Surat Menyurat</li>
                           <li><i > <img src="src/assets/img/icon/checklist2.png" className="img-fluid" alt="img not found"/> </i> Laporan Kejadian</li>
                           <li><i > <img src="src/assets/img/icon/checklist2.png" className="img-fluid" alt="img not found"/> </i> Kalender Acara</li>
                           <li><i > <img src="src/assets/img/icon/checklist2.png" className="img-fluid" alt="img not found"/> </i> Berita Terkini</li> */}
                        </ul>
                     </div>
                  </div>              
               </div>
               <div className="tp-pricing-btn">
                  <div className="row">
                     <div className="col-lg-9">
                        <h6 className="tp-pricing-rate-subtitle mb-10">{price1}/Bulan</h6>
                        {/* <h6>/Bulan</h6> */}
                     </div>
                     <div className="col-lg-2">
                        <Link to="/registrasi" className="theme-btn text-white"><i className="flaticon-enter"></i> Choose</Link>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-9">
                        <div className='row'>
                           <h6 className="tp-pricing-rate-subtitle mb-10">{price2}/Bulan</h6>
                           {/* <h6>/Bulan</h6> */}
                        </div>                   
                     </div>
                     <div className="col-lg-2">
                        <Link to="/registrasi" className="theme-btn text-white"><i className="flaticon-enter"></i> Choose</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSinglePrice;