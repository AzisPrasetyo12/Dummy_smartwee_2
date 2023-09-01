import React from 'react';
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelopeOpen} from 'react-icons/fa';
import { PiNumberCircleOneBold, PiNumberCircleTwoBold, PiNumberCircleThreeBold} from 'react-icons/pi';

const ContactForm = () => {
    return (
        <>
            <section className="tp-contact-area pb-120 pt-200">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="section-title-wrapper-two mb-50 wow fadeInUp" data-wow-delay=".2s">
                                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Anda harus melengkapi form</h5>
                                <h2 className="tp-section-title heading-color-black">Registrasi</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="row custom-mar-20">
                                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                    <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="tp-contact-info-icon" style={{color: 'yellow'}}>
                                            <i> <PiNumberCircleOneBold className='contact_icon'/> </i>
                                        </div>
                                        <div className="tp-contact-info-text">
                                            <h4 className="tp-contact-info-title " style={{backgroundColor: 'yellow', padding: "10px 10px", borderRadius: "10px" }}>Penanggung Jawab</h4>
                                            {/* <p>5/A 5suvastu arcade, 3rd Floor <br/>palace road, London.</p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                    <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="tp-contact-info-icon">
                                            <i> <PiNumberCircleTwoBold className='contact_icon'/> </i>
                                        </div>
                                        <div className="tp-contact-info-text">
                                            <h4 className="tp-contact-info-title" style={{backgroundColor: 'white', padding: "10px 10px", borderRadius: "10px" }}>Data Wilayah</h4>
                                            {/* <a href="tel:333888200-55">333888200-55</a> */}
                                            {/* <a href="tel:444555300-25">444555300-25</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                    <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="tp-contact-info-icon">
                                            <i > <PiNumberCircleThreeBold className='contact_icon'/> </i>
                                        </div>
                                        <div className="tp-contact-info-text">
                                            <h4 className="tp-contact-info-title" style={{backgroundColor: 'white', padding: "10px 10px", borderRadius: "10px" }}>Payment</h4>
                                            {/* <a href="mailto:info@themepure.com">info@themepure.com</a>
                                            <a href="mailto:info@themepure.com">info@themepure.com</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 grey-bg pt-20 pb-20" >
                            <div className="tp-contact-form " >
                                <div className="row custom-mar-20">
                                    <div className="col-md-6 custom-pad-20" >
                                        <div className="tp-contact-form-field mb-20" >
                                            <p>Nama lengkap penanggung jawab akun*</p>
                                            <input type="text" placeholder="Nama lengkap penanggung jawab akun*"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Email*</p>
                                            <input type="email" placeholder="Email*"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Nomor Handphone*</p>
                                            <input type="text" placeholder="Nomor Handphone*" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Jabatan*</p>
                                            <input type="text" placeholder="Jabatan*"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Awal Periode Kepengurusan* (Tahun)</p>
                                            <input type="text" placeholder="Awal Periode Kepengurusan* (Tahun)"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Akhir Periode Kepengurusan* (Tahun)</p>
                                            <input type="text" placeholder="Akhir Periode Kepengurusan* (Tahun)"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Nama Ketua RT*</p>
                                            <input type="text" placeholder="Nama Ketua RT*"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Nama Ketua RW*</p>
                                            <input type="text" placeholder="Nama Ketua RW*"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Nama Bank*</p>
                                            <input type="text" placeholder="Nama Bank*"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Nomor Rekening*</p>
                                            <input type="text" placeholder="Nomor Rekening*"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Nama Pemilik Rekening*</p>
                                            <input type="text" placeholder="Nama Pemilik Rekening*"/>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-6 custom-pad-20">
                                        <p>* (Wajib diisi)</p> */}
                                        {/* <div className="tp-contact-form-field mb-20">
                                            <input type="text" placeholder="Nama Pemilik Rekening*"/>
                                        </div> */}
                                    {/* </div> */}
                                    {/* <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field select-field-arrow mb-20">
                                            <select>
                                                <option defaultValue="">Choose Subject</option>
                                                <option defaultValue="">House Cleaning</option>
                                                <option defaultValue="">Office Cleaning</option>
                                                <option defaultValue="">Kitchen Cleaning</option>
                                                <option defaultValue="">Club Cleaning</option>
                                            </select>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-md-12 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <textarea placeholder="Your Message"></textarea>
                                        </div>
                                    </div> */}
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field">
                                            <p>* (Wajib diisi)</p>
                                            <button type="submit" className="theme-btn text-white" style={{float: 'right'}}>
                                            <i className="flaticon-enter"></i> Selanjutnya</button>
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

export default ContactForm;