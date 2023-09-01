import React from 'react';

const HomeTwoFaq = () => {
    return (
        <>
            <section className="tp-faq-area bg-gray-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-faq-img">
                                <img src="src/assets/img/service/manfaat.svg" className="img-fluid" alt="img not found"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-faq-text pt-50">
                                <div className="section-title-wrapper-two mb-45">
                                    <h2 className="tp-section-title-two">Manfaat yang akan Anda dapatkan</h2>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Meningkatkan Efektivitas Manajemen RT
                                            </button>
                                        </h2>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Mempermudah Komunikasi Antar Warga
                                            </button>
                                        </h2>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Meningkatkan Partisipasi Warga
                                            </button>
                                        </h2>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Meningkatkan Keamanan Lingkungan
                                            </button>
                                        </h2>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Memudahkan Akses dan Penggunaan
                                            </button>
                                        </h2>
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

export default HomeTwoFaq;