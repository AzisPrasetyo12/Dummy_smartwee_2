
import Navigation from "./Navigation";
import HomeThreeHeroSection from "./HomeThreeHeroSection";
import Footer from "@/components/shared/Footer/Footer";
import ChoseArea from "./ChoseArea";
import HomeThreeFeatures from "./HomeThreeFeatures";
import BlogsSidebarArea from "./BlogsSidebarArea";

const Home: React.FC<any> = () => {
    return (
      <>
        <Navigation/>
        <HomeThreeHeroSection/>
        <ChoseArea/> {/* Pengeumuman */}
        <HomeThreeFeatures/> {/* Struktur Organisasi */}
        <BlogsSidebarArea/> {/* Berita */}
        <Footer/>
        {/* <h1>Ini Home </h1> */}
      </>
    )
}

export default Home;

// export default function Home() {
//   return (
//     <>
//       <h1>Ini Home </h1>
//     </>
//   )
// }
