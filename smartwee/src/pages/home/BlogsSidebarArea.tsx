import React, { useState } from 'react';
// import BlogSidebarWidget from '../../../../components/BlogSidebarWidget/BlogSidebarWidget';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { FaRegComments, FaPlay, FaRegFlag, FaRegCompass } from 'react-icons/fa';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { CgArrowLongRight } from 'react-icons/cg';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import ServicePageArea from '../landing_page/ServicePageArea';
import BlogSidebarWidget from './BlogSidebarWidget';

SwiperCore.use([Navigation, Pagination]);

const BlogsSidebarArea = () => {
   const [isOpen, setOpen] = useState(false);
   return (
      <>

         <ModalVideo channel='youtube' isOpen={isOpen}
            videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} />

         <section className="blog-sidebar-area pt-20 pb-20" style={{ backgroundColor: 'white'}}>
            <div className="container">
               <div className="tp-custom-container-box">
                  <div className="row">
                     <div className="col-lg-7">
                        <div className="ablog__sidebar--wrapper mr-50">
                           <div className="ablog ablog-4 mb-55 wow fadeInUp" data-wow-delay=".4s">
                                 <div className="ablog__img">
                                    <img src="src/assets/img/blog/panjatpinang.jpg" className="img-fluid" alt="img" />
                                 </div>
                                 <div className="ablog__text ablog__text4">
                                    <div className="ablog__meta ablog__meta4">
                                       <ul>
                                          <li><Link to="/home">
                                             <i> <AiOutlineCalendar className='blog_icon' /> </i> 17 Agustus 2023 </Link>
                                          </li>
                                          <li><Link to="/home">
                                             <i > <AiOutlineUser className='blog_icon' /> </i> Anjas Traguna </Link>
                                          </li>
                                          <li><Link to="/home">
                                             <i > <FaRegCompass className='blog_icon' /> </i> Desa Sukamaju</Link>
                                          </li>
                                       </ul>
                                    </div>
                                    <h3 className="ablog__text--title4 mb-20"><Link to="/home">Kemeriahan acara panjat 50 pohon pinang</Link></h3>
                                    <p className="mb-30">Panjat pinang merupakan lomba yang identik dengan perayaan 17 Agustus.  
                                    Dalam lomba ini, para peserta harus berusaha memanjat batang pohon pinang yang diberi oli untuk sampai ke puncak. 
                                    Sebab, pada puncak batang pohon pinang tersebut, telah tersedia beragam hadiah menarik.</p>
                                    <p className="mb-30">Antusias warga terlihat dalam acara Semarak Kalimalang 'Panjat Pinang Emas' di Cipinang Melayu, Jakarta Timur. 
                                       Mereka mengaku senang dengan gelaran tersebut untuk hiburan.</p>
                                    <div className="ablog__btn4">
                                       <Link to="/home" className="theme-btn text-white">
                                          <i className="flaticon-enter"></i> Read More</Link>
                                    </div>
                                 </div>                           
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-5">
                        <div className="ablog__sidebar">
                           <div className="widget wow fadeInUp" data-wow-delay=".3s">
                              <div className="sidebar--widget__search mb-45">
                                 <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit"><i> <BiSearch className='search_icon' /> </i></button>
                                 </form>
                              </div>
                           </div>
                           <div className="widget mb-45 wow fadeInUp" data-wow-delay=".5s">
                              <h3 className="sidebar__widget--title mb-30">Recent News </h3>

                              <BlogSidebarWidget img_blog="src/assets/img/blog/makankerupuk.jpg"
                                 sidebar_post_title="Lomba makan kerupuknya Cak Gomeh" datepost="17 Agustus 2023"/>

                              <BlogSidebarWidget img_blog="src/assets/img/blog/lompatkarung.jpg"
                                 sidebar_post_title="Kemeriahan lomba lompat atau balap karung" datepost= "18 Agustus 2023"/>

                              <BlogSidebarWidget img_blog="src/assets/img/blog/estapettepung.jpg"
                                 sidebar_post_title="Emak-emak tidak mau kalah soal lempar-lempar tepung" datepost= "19 Agustus 2023" />

                              <div className="row">
                                 <div className="col-lg-5">
                                    <div className="widget mb-40 wow fadeInUp" data-wow-delay=".7s">
                                       <h3 className="sidebar__widget--title mb-25">Categories</h3>
                                       <div className="sidebar--widget__cat mb-20">
                                          <ul>
                                             <li><Link to="/home">17 Agustusan</Link></li>
                                             <li><Link to="/home">Karang Taruna</Link></li>
                                             <li><Link to="/home">Rapat RT</Link></li>
                                             <li><Link to="/home">Info Mabar</Link></li>
                                             <li><Link to="/home">Pengajian</Link></li>
                                             <li><Link to="/home">Kebersihan Lingkungan</Link></li>
                                             <li><Link to="/home">Info Tawuran</Link></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-5">
                                    <div className="widget mb-25 wow fadeInUp" data-wow-delay=".9s">
                                       <h3 className="sidebar__widget--title mb-30">Tags</h3>
                                       <div className="sidebar--widget__tag mb-20">
                                          <Link to="/home">Bersih Desa</Link>
                                          <Link to="/home">Ronda Keliling</Link>
                                          <Link to="/home">Kopdar</Link>
                                          <Link to="/home">Bazar Mingguan</Link>
                                          <Link to="/home">Maling</Link>
                                          <Link to="/home">Arisan</Link>
                                          <Link to="/home">Hajatan</Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>                                      
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogsSidebarArea;