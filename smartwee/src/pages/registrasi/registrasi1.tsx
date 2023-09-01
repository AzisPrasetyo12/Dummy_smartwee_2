import React from 'react';
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelopeOpen} from 'react-icons/fa';
import { PiNumberCircleOneBold, PiNumberCircleTwoBold, PiNumberCircleThreeBold} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Box, Container, Stack } from '@chakra-ui/react'

import { Step } from '@/components/step/Step';
import { steps } from '@/components/step/data';
import { useStep } from '@/components/step/useStep';
import Navigation from './Navigation';

const Registrasi1: React.FC<any> = () => {
    const [currentStep, { setStep }] = useStep({ maxStep: steps.length, initialStep: 1 })

    return (
        <>
            
        <Navigation/>
        <section className="tp-contact-area pb-120 pt-50" style={{ backgroundColor: 'white'}}>
            <div className="container">
                <div className="row" >
                    <div className="col-lg-10">
                        <div className="section-title-wrapper-two mb-50 wow fadeInUp" data-wow-delay=".2s">
                            <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Anda harus melengkapi form</h5>
                            <h2 className="tp-section-title heading-color-black">
                            <Link to="/registrasi">Registrasi</Link></h2>                           
                        </div>
                    </div>
                </div>
                <Box bg="bg.surface" style={{ backgroundColor: 'white', color: '#31544E'}}>
                    <Container py={{ base: '4', md: '8' }}>
                        <Stack spacing="0" direction={{ base: 'column', md: 'row' }}>
                        {steps.map((step, id) => (
                            <Step
                                key={id}
                                cursor="pointer"
                                onClick={() => setStep(id)}
                                title={step.title}
                                description={step.description}
                                isActive={currentStep === id}
                                isCompleted={currentStep > id}
                                isFirstStep={id === 0}
                                isLastStep={steps.length === id + 1}
                            />
                        ))}
                        </Stack>
                    </Container>
                </Box>
                <div className="row">
                    <div className="col-lg-1">
                        {/* <div className="row custom-mar-20">
                            <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="tp-contact-info-icon" style={{color: '#FDD639'}}>
                                        <i> <PiNumberCircleOneBold className='contact_icon'/> </i>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <Link to="/registrasi"><h4 className="tp-contact-info-title " style={{backgroundColor: '#FDD639', padding: "10px 10px", borderRadius: "10px" }}>Penanggung Jawab</h4></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="tp-contact-info-icon">
                                        <i> <PiNumberCircleTwoBold className='contact_icon'/> </i>
                                    </div>
                                    <div className="tp-contact-info-text">
                                    <Link to="/registrasi2"><h4 className="tp-contact-info-title" style={{backgroundColor: 'white', padding: "10px 10px", borderRadius: "10px" }}>Data Wilayah</h4></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="tp-contact-info-icon">
                                        <i > <PiNumberCircleThreeBold className='contact_icon'/> </i>
                                    </div>
                                    <div className="tp-contact-info-text">
                                    <Link to="/registrasi3"><h4 className="tp-contact-info-title" style={{backgroundColor: 'white', padding: "10px 10px", borderRadius: "10px" }}>Payment</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-10  pt-20 pb-20 pl-40 pr-40 border-shadow" >
                        <div className="tp-contact-form " >
                            <div className="row custom-mar-20">
                                <div className="col-md-4 custom-pad-20" >
                                    <div className="tp-contact-form-field mb-20" >
                                        <p>Nama lengkap penanggung jawab akun*</p>
                                        <input type="text" placeholder="Nama lengkap penanggung jawab akun*"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Email*</p>
                                        <input type="email" placeholder="Email*"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Nomor Handphone*</p>
                                        <input type="text" placeholder="Nomor Handphone*" />
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Jabatan*</p>
                                        <input type="text" placeholder="Jabatan*"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Awal Periode Kepengurusan* (Tahun)</p>
                                        <input type="text" placeholder="Awal Periode Kepengurusan* (Tahun)"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
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
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Nama Bank*</p>
                                        <input type="text" placeholder="Nama Bank*"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Nomor Rekening*</p>
                                        <input type="text" placeholder="Nomor Rekening*"/>
                                    </div>
                                </div>
                                <div className="col-md-4 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <p>Nama Pemilik Rekening*</p>
                                        <input type="text" placeholder="Nama Pemilik Rekening*"/>
                                    </div>
                                </div>
                                <div className="col-md-12 custom-pad-20">
                                    <div className="tp-contact-form-field">
                                        <p>* (Wajib diisi)</p>
                                        <Link to="/registrasi2">
                                        <button type="submit" className="theme-btn text-white" style={{float: 'right'}}>
                                        <i className="flaticon-enter"></i> Selanjutnya</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Registrasi1;
