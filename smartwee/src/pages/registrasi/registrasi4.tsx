import React from 'react';
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelopeOpen} from 'react-icons/fa';
import { PiNumberCircleOneBold, PiNumberCircleTwoBold, PiNumberCircleThreeBold} from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Box, Container, Stack } from '@chakra-ui/react'
import { Step } from '@/components/step/Step';
import { steps } from '@/components/step/data';
import { useStep } from '@/components/step/useStep';
import Navigation from './Navigation';

const Registrasi4: React.FC<any> = () => {
    const [currentStep, { setStep }] = useStep({ maxStep: steps.length, initialStep: 4 })
    return (
        <>
        <Navigation/>
        <section className="tp-contact-area pb-120 pt-50" style={{ backgroundColor: 'white'}}>
            <div className="container">
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
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        {/* <h5 className="tp-section-subtitle-three mb-20"> _ _ How We Works _ _</h5> */}
                        <div className="col-xl-12 col-sm-6">
                            <div className="tp-feature-three text-center  wow fadeInUp" data-wow-delay=".4s">
                                <div className="tp-feature-three-icon ">
                                    <img src="src/assets/img/icon/fact-bg.png" className="img-fluid" alt="img not found"/>
                                    <i><img src= "src/assets/img/icon/check-icon.svg" className="img-fluid-finish text-center" alt="img not found"/></i>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <h4>Selamat!, Pengisian form pendaftaran telah berhasil</h4>
                        <p>Terima kasih telah menggunakan SmartWee! <br/>Kami menginginkan Anda mengetahui bahwa setiap data yang Anda berikan <br/>telah terlindungi melalui proses <b>enkripsi</b> yang aman.</p>
                        <br/><br/>
                        <div className="col-md-12 pb-50">
                            <Link to="/registrasi5">
                            <button type="submit" className="theme-btn text-white" >
                            <i></i>Selesai</button></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </section>
    </>
    )
}

export default Registrasi4;
