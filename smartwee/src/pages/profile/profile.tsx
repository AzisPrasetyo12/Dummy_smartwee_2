import React from 'react';
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelopeOpen} from 'react-icons/fa';
import { GrEdit} from 'react-icons/Gr';
import { GiSave} from 'react-icons/gi';
import { FaPenToSquare} from 'react-icons/fa6';


import { Link } from 'react-router-dom';

import Navigation from './Navigation';

const Profile: React.FC<any> = () => {
    
    return (
        <>
        <Navigation/>
        <section className="tp-contact-area pb-120 pt-50" style={{ backgroundColor: 'white'}}>
            <div className="container">
                <div className="row" style={{ color: 'white', alignItems: 'center'}}>
                    <div className="col-lg-12">
                        <div className="section-title-wrapper-two mb-50 wow fadeInUp" data-wow-delay=".2s">
                            <h2 className="tp-section-title heading-color-black text-center"><Link to="/profile">Profile</Link></h2>
                            <div className="col-lg-11">                            
                                <div className="text-right" style={{color: '#FDD639'}}>
                                    <button style={{float: 'right', color: '#31544E'}}> <GiSave className='contact_icon '/> Save</button>
                                </div>
                                <div className="text-right pr-50" style={{color: '#FDD639'}}>
                                    <button style={{float: 'right', color: '#31544E'}}> <FaPenToSquare className='contact_icon '/>Edit </button>
                                </div>                       
                            </div>                   
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-10  pt-20 pb-20 border-shadow">
                        <div className="tp-contact-form " >
                            <div className="row custom-mar-20">
                                <div className="col-md-4 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Nama/Nomor RT</p>
                                        <input type="text" placeholder="Nama/Nomor RT"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Penanggung jawab akun</p>
                                        <input type="text" placeholder="Penanggung jawab akun"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Email</p>
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Nomor Handphone</p>
                                        <input type="text" placeholder="Nomor Handphone"/>
                                    </div>
                                </div>
                                <div className="col-md-8 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Jabatan</p>
                                        <input type="text" placeholder="Jabatan"/>
                                    </div>
                                </div>
                                <div className="col-md-2 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Awal Pengurusan</p>
                                        <input type="text" placeholder="YYYY"/>
                                    </div>
                                </div>
                                <div className="col-md-2 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Selesai Pengurusan</p>
                                        <input type="text" placeholder="YYYY"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Nama Ketua RT</p>
                                        <input type="text" placeholder="Nama Ketua RT"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Nama Ketua RW</p>
                                        <input type="text" placeholder="Nama Ketua RW"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Provinsi</p>
                                        <input type="text" placeholder="Provinsi"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Kab./Kota</p>
                                        <input type="text" placeholder="Kab./Kota"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Kecamatan</p>
                                        <input type="text" placeholder="Kecamatan" />
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Dusun (Jika ada)</p>
                                        <input type="text" placeholder="Dusun (Jika ada)"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>RT</p>
                                        <input type="text" placeholder="RT"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>RW</p>
                                        <input type="text" placeholder="RW"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Kode Pos</p>
                                        <input type="text" placeholder="Kode Pos"/>
                                    </div>
                                </div>
                                <div className="col-md-8 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Lokasi Pin Map</p>
                                        <input type="text" placeholder="Lokasi Pin Map"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Nama Bank</p>
                                        <input type="text" placeholder="Nama Bank"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Nama Pemilik Rekening</p>
                                        <input type="text" placeholder="Nama Pemilik Rekening"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Nomor Rekening</p>
                                        <input type="text" placeholder="Nomor Rekening"/>
                                    </div>
                                </div>                            
                                <div className="col-md-6 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                    <p>Keterangan</p>
                                        <textarea placeholder="Keterangan"></textarea>
                                    </div>
                                </div>  
                                <div className="col-md-6 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Paket Subcription</p>
                                        <input type="text" placeholder="Paket Subcription"/>
                                    </div>
                                </div>                                                       
                                {/* <div className="tp-contact-form-field">                                
                                    <div className="col-md-12">
                                        <Link to="/home">
                                        <button type="submit" className="theme-btn text-white" style={{float: 'right'}}>
                                            <i></i> Home</button></Link>
                                    </div>                                                                              
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Profile;
