import React from 'react';
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelopeOpen} from 'react-icons/fa';
import { PiNumberCircleOneBold, PiNumberCircleTwoBold, PiNumberCircleThreeBold} from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Box, Container, Stack } from '@chakra-ui/react'
import { Step } from '@/components/step/Step';
import { steps } from '@/components/step/data';
import { useStep } from '@/components/step/useStep';
import Navigation from './Navigation';

const Registrasi3: React.FC<any> = () => {
    const [currentStep, { setStep }] = useStep({ maxStep: steps.length, initialStep: 3 })
    return (
        <>
        <Navigation/>
        <section className="tp-contact-area pb-120 pt-50" style={{ backgroundColor: 'white'}}>
            <div className="container">
                <div className="row" style={{ color: 'white', alignItems: 'center'}}>
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
                                        <Link to="/registrasi"><h4 className="tp-contact-info-title " style={{backgroundColor: 'white', padding: "10px 10px", borderRadius: "10px" }}>Penanggung Jawab</h4></Link>
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
                                    <Link to="/registrasi3"><h4 className="tp-contact-info-title" style={{backgroundColor: '#FDD639', padding: "10px 10px", borderRadius: "10px" }}>Payment</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-xl-5 col-md-6 mb-10 " >
                            <div className="tp-contact-form  pt-10 pb-10 pl-40 pr-40 border-shadow" >
                                <div className="row custom-mar-30">
                                    <div className="custom-pad-10" >
                                        <div className="tp-contact-form-field mb-30" >
                                            <p>Nama Lengkap</p>
                                            <input type="text" placeholder="Nama Lengkap"/>
                                        </div>
                                    </div>
                                    <div className="custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Email</p>
                                            <input type="Email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <p>Nomor Handphone</p>
                                            <input type="text" placeholder="Nomor Handphone"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        <br></br>
                    
                        <div className="tp-contact-form  pt-10 pb-10 pl-40 pr-40 border-shadow" >
                            <div className="row custom-mar-30 pt-50 pb-40">
                                <h5 className = "pb-40">Payment Methods</h5><br/>
                                <div className="custom-pad-10 pb-10" >
                                    <h6> <input type="radio" />  Credit/Debit Cards</h6>
                                </div>
                                <div className="custom-pad-10 pb-10" >
                                    <h6> <input type="radio" />  Direct Bank Transfer</h6>
                                </div>
                                <div className="custom-pad-10" >
                                    <h6> <input type="radio" />  Other Payment Methods</h6>
                                </div>
                            </div>
                        </div>
                    </div>    
                        <br></br>
                    <div className="col-xl-5 border-shadow" >
                        <div className="tp-contact-form pl-20 pr-20" >
                            <div className="row custom-mar-30">
                            {/* <img src="src/assets/img/service/fitur2.svg"  alt="img not found"/> */}
                            <img src="src/assets/img/service/homepage.svg"  className="img-fluid" alt="img not found"/>
                                <div className="col-md-12 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20"style={{float: 'left'}}>
                                        <h4>Total</h4>
                                    </div>
                                    <div className="tp-contact-form-field mb-20"style={{float: 'right'}}>
                                        <h5>Rp. 1.100.000</h5>
                                    </div>
                                </div> 
                                <div className="tp-contact-form-field">                                
                                    <div className="col-md-12">
                                    <Link to="/registrasi2">
                                        <button type="submit" className="theme-btn text-white" style={{float: 'left'}}>
                                            <i></i> Sebelumnya</button></Link>
                                    </div>
                                    <div className="col-md-12">
                                    <Link to="/registrasi4">
                                        <button type="submit" className="theme-btn text-white" style={{float: 'right'}}>
                                            <i></i> Payment</button></Link>
                                    </div>                                        
                                        {/* <i className="flaticon-enter"></i> Sebelumnya</button> */}
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

export default Registrasi3;
