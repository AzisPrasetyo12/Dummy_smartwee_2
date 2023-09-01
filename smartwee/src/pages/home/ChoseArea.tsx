import React from 'react';
import { Link } from 'react-router-dom';

const ChoseArea = () => {
    return (
        <>
            <section className="tp-choose-area position-relative pt-20 pb-20" style={{ backgroundColor: 'white'}}>
            
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-12 col-lg-12">
                            <div className="row">
                                <div className="tp-faq-text pt-10">
                                    <div className="section-title-wrapper-two text-center mb-45">
                                        <h2 className="tp-section-title-two">Pengumuman</h2>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="tp-choose-timeline ml-15 mb-30">
                                        <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay=".4s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                                              <Link to="/home">Perayaan 17 Agustusan</Link>
                                             </h4>
                                            <p style={{color: '#042917', textAlign: 'justify'}}>17 Agustus 2023 Jam 09, Lapangan RT 05/06</p>
                                            <p style={{color: '#042917', textAlign: 'justify'}}>Dalam rangka memeriahkan Hari Kemerdekaan Republik Indonesia ke-78, 
                                            kami dari panitia lomba 17-an ingin mengundang Bapak/Ibu dan seluruh anggota keluarga guna 
                                            berpartisipasi dalam serangkaian perlombaan. Terima kasih</p>
                                        </div>
                                        <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay=".4s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                                              <Link to="/home">Bersih-Bersih Lingkungan</Link>
                                             </h4>
                                            <p style={{color: '#042917', textAlign: 'justify'}}>13 Agustus 2023 Jam 07, Lingkungan RT 05/06</p>
                                            <p style={{color: '#042917', textAlign: 'justify'}}>Dalam rangka memeriahkan Hari Kemerdekaan Republik Indonesia ke-78, 
                                            kami dari perangkat RT ingin mengundang Bapak/Ibu dan seluruh anggota keluarga untuk berpartisipasi dalam kegiatan bersih-bersih lingkungan. Terima kasih</p>
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