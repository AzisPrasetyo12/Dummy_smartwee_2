import React from 'react';
import { Link } from 'react-router-dom';

const ChoseArea = () => {
    return (
        <>
            <section className="tp-choose-area position-relative pt-50 pb-50">
            {/* <div className="tp-choose-yellow-bg"></div> */}
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-12 col-lg-12">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="tp-choose-timeline ml-15 mb-30">
                                        <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay=".4s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                                              <Link to="/login">Pengelolaan Data Warga</Link>
                                             </h4>
                                            <p style={{color: '#042917', textAlign: 'justify'}}>Pengelolaan data warga merupakan salah satu fitur penting dalam aplikasi manajemen rukun tetangga SMARTWee. Dalam fitur ini, pengguna dapat mencatat dan menyimpan data kependudukan warga, data keluarga, dan data inventaris rumah tangga secara lengkap dan terorganisir dengan baik.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="tp-choose-timeline ml-15 mb-30">
                                        <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay="1s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link to="/login">Pengelolaan Keuangan</Link></h4>
                                            <p style={{color: '#042917', textAlign: 'justify'}} >Pengelolaan keuangan dalam aplikasi rukun tetangga SMARTWee bertujuan untuk memudahkan pengguna dalam mencatat dan memantau pengeluaran dan pemasukan kas RT. Fitur ini dapat membantu pengguna dalam mengelola keuangan RT dengan lebih terstruktur dan transparan.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="tp-choose-timeline ml-15 mb-30">
                                        <div className="tp-choose-timeline-single pl-35 wow fadeInUp" data-wow-delay="1.4s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link to="/login">Surat Menyurat</Link></h4>
                                            <p style={{color: '#042917', textAlign: 'justify'}} >Pengelolaan keuangan dalam aplikasi rukun tetangga SMARTWee bertujuan untuk memudahkan pengguna dalam mencatat dan memantau pengeluaran dan pemasukan kas RT. Fitur ini dapat membantu pengguna dalam mengelola keuangan RT dengan lebih terstruktur dan transparan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="row justify-content-between">
                    <div className="col-xl-12 col-lg-12">
                        <div className="row">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-4">
                                <div className="tp-choose-timeline ml-15 mb-30">
                                    <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay="1.2s">
                                        <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link to="/login">Laporan Kejadian</Link></h4>
                                        <p style={{color: '#042917', textAlign: 'justify'}} >Laporan kejadian merupakan salah satu fitur penting dalam aplikasi rukun tetangga SMARTWee yang berguna untuk mencatat dan melacak kejadian atau peristiwa penting yang terjadi di lingkungan RT/RW. Fitur ini memungkinkan pengguna untuk membuat laporan kejadian secara cepat dan mudah, serta memberikan kemudahan dalam pengolahan data dan informasi. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="tp-choose-timeline ml-15 mb-30">
                                    <div className="tp-choose-timeline-single pl-35 wow fadeInUp" data-wow-delay="1.4s">
                                        <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link to="/login">Kalender Acara</Link></h4>
                                        <p style={{color: '#042917', textAlign: 'justify'}} >Kalender acara dalam aplikasi rukun tetangga SMARTWee berfungsi sebagai pengingat dan penyusun jadwal kegiatan yang akan dilakukan di lingkungan RT/RW. Pengguna dapat dengan mudah menambahkan dan melihat daftar kegiatan yang akan datang, seperti rapat RT, arisan, kegiatan sosial, dan acara-acara lainnya.</p>
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

export default ChoseArea;