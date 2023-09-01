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
                              <Link to="/home"><img src="src/assets/img/logo/logo_putih.png" className="img-fluid-logo text-center" alt="logo not found" />
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
                                       <Link to="/login" className="yellow-btn"><i className="flaticon-enter"></i> Login</Link>
                                    </div>
                                 </div>
                              )}

                              {!!user && (
                                 <div className="tp-header-top-info-single">
                                    <div className="tp-header-top-info-single-btn">
                                       <Link to="/profile" className="yellow-btn"><i className="flaticon-enter"></i> My Profile</Link>
                                    </div>
                                 </div>
                              )}
                           </div>
                        </div>
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