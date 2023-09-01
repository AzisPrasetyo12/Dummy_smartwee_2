import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import Sidebar from '../../../Sidebar/Sidebar';
import Sidebar from '@/components/Sidebar/Sidebar';
import { FaBars } from 'react-icons/fa';
import { useGetIdentity } from "@refinedev/core";

const Navigation = () => {
   const { data: user } = useGetIdentity<any>();
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   // sticky state
   const [sticky,setSticky] = useState(false);

   useEffect(() => {
      const stickyNavbar = () => {
         if(window.scrollY > 80){
            setSticky(true)
         }
         else{
            setSticky(false)
         }
      }
      window.addEventListener('scroll',stickyNavbar);
      return () => {
         window.removeEventListener('scroll',stickyNavbar);
      }
   }, []);
   
   return (
      <>
         <header className='position-relative'>
            <div className="tp-header-area" >
               <div className="tp-header-top theme-dark-bg pt-20 pb-50 d-none d-xl-block" style={{backgroundColor: '#31544E'}}>
                  <div className="tp-custom-container">
                     <div className="row align-items-center">
                        <div className="col-xxl-4 col-xl-7">
                           <div className="tp-header-top-info">
                              <div className="tp-header-top-info-single pr-40 mr-40 border-right-1">
                                 <div className="tp-header-top-info-single-icon mr-10">
                                    <i className="flaticon-pin"></i>
                                 </div>
                                 <div className="tp-header-top-info-single-text">
                                    <span className="tp-header-top-info-single-label">EMS Paramitra</span>
                                    <span className="tp-header-top-info-single-content font-medium">Pulogadung, Jakarta</span>
                                 </div>
                              </div>
                              <div className="tp-header-top-info-single">
                                 <div className="tp-header-top-info-single-icon mr-15">
                                    <i className="flaticon-email"></i>
                                 </div>
                                 <div className="tp-header-top-info-single-text">
                                    <span className="tp-header-top-info-single-label">Email us</span>
                                    <a href="mailto:info@ems.co.id" className="tp-header-top-info-single-content font-medium text-white">info@ems.co.id</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5">
                           <div className="header-logo text-center">
                              <Link to="/"><img src="src/assets/img/logo/logo_putih.png" className="img-fluid-logo text-center" alt="logo not found" />
                              </Link>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5">
                           <div className="tp-header-top-info justify-content-end">
                              <div className="tp-header-top-info-single mr-85">
                                 <div className="tp-header-top-info-single-icon tp-header-top-info-single-icon-call mr-10">
                                    <i className="flaticon-phone-call"></i>
                                 </div>
                                 <div className="tp-header-top-info-single-text">
                                    <span className="tp-header-top-info-single-label">Call Center</span>
                                    <a href="tel:33388820055" className="tp-header-top-info-single-content font-medium text-white">333 888 200 - 55</a>
                                 </div>
                              </div>

                              {!user && (
                                 <div className="tp-header-top-info-single">
                                    <div className="tp-header-top-info-single-btn">
                                       <Link to="/home" className="theme-btn yellow-btn"><i className="flaticon-enter"></i> Login</Link>
                                    </div>
                                 </div>
                              )}

                              {!!user && (
                                 <div className="tp-header-top-info-single">
                                    <div className="tp-header-top-info-single-btn">
                                       <Link to="/profile" className="theme-btn yellow-btn"><i className="flaticon-enter"></i> My Profile</Link>
                                    </div>
                                 </div>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={sticky ? "sticky-menu tp-header-menu-area tp-transparent-header-menu header-sticky" :"tp-header-menu-area tp-transparent-header-menu header-sticky"}>
                  <div className="container" style={{backgroundColor: 'white'}}>
                     <div className="row justify-content-xl-center align-items-center">
                        <div className="col-xl-2 col-8 tp-sticky-column">
                           <div className="tp-sticky-logo">
                              <Link to="/"><img src="src/assets/img/logo/logo_hijau.png" className="img-fluid" alt="logo not found" /></Link>
                           </div>
                        </div>
                        <div className="col-xl-8 col-4">
                           <div className="tp-main-menu-bg"> 
                              <div className="tp-main-menu ">
                                 <nav id="tp-mobile-menu">
                                    <ul className="text-center">
                                       <li className="menu-item-has-children"><NavLink to="/home">Pengurus<br/>RT</NavLink></li>
                                       <li><NavLink to="/password">Manajemen<br/>Warga</NavLink></li>
                                       <li><NavLink to="/register">Tagihan</NavLink></li>
                                       <li><NavLink to="/help">Keuangan</NavLink></li>
                                       <li><NavLink to="/notifications">Surat<br/>Menyurat</NavLink></li>
                                       <li><NavLink to="/addmember">Laporan</NavLink></li>
                                       <li><NavLink to="/inbox">Kalender<br/>Acara</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>


                              <div className="side-menu-icon d-xl-none text-end">
                                 <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                                 <i> <FaBars className='bar_icon' /> </i></button>
                              </div>
                           </div>
                        </div>
                        {!user && (
                           <div className="col-xl-2 tp-sticky-column-btn">
                              <div className="tp-sticky-btn text-end">
                                 <Link to="/home" className="theme-btn justify-content-end text-white"><i className="flaticon-enter"></i> Login</Link>
                              </div>
                           </div>
                        )}
                        {!!user && (
                           <div className="col-xl-2 tp-sticky-column-btn">
                              <div className="tp-sticky-btn text-end">
                                 <Link to="/home" className="theme-btn justify-content-end text-white"><i className="flaticon-enter"></i> My Profile</Link>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose}></Sidebar>
      </>
   );
};

export default Navigation;