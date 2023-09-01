// <<<<<<< HEAD
import Navigation from "./Navigation";
import HomeTwoHeroSection from "./HomeTwoHeroSection";
import ServicesArea from "./ServicesArea";
import HomeTwoAbout from "./HomeTwoAbout";
import HomeTwoFaq from "./HomeTwoFaq";
import PricingArea from "./PricingArea"
import AppointmentFeedback from "./AppointmentFeadback";
import ChoseArea from './ChoseArea'
import Footer from "@/components/shared/Footer/Footer";

const LandingPage: React.FC<any> = () => {
  return (
    <>
    <Navigation/>
    <HomeTwoHeroSection/> {/* slideshow */}
    <ServicesArea/> {/* Device */}
    <HomeTwoAbout/> {/* Fitur */}
    <ChoseArea/> {/* Pengelolaan data warga */}
    <HomeTwoFaq/> {/* manfaat */}
    <PricingArea/> {/* pricelist */}
    <Footer/>


    {/* <AppointmentFeedback/> */}
    {/* <ServicesTestimonials/> */}
    {/* {Array.from({ length: 30 }).map((item: any, index: number) => <p key={index}>DUMMY {index + 1}</p>)} */}
    </>
 
// =======
// const LandingPage: React.FC<any> = () => {
//   return (
//     <>
//       <h1>Hai Robot Corporate </h1>
//     </>    
// >>>>>>> 2d2231cd1d0f0b2445d49377cec2e8518bcd9c70
  )
}

export default LandingPage;
