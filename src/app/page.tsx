"use client"
import Header from "../components/header";
import Hero from "../components/hero";
import Socialproof from "../components/social-proof";
import Acheivements from "../components/acheivements";
import Team from "../components/team";
import Footer from "../components/foooter";
// import Slider from "../components/slider";
import Categories from "@/components/category";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Socialproof/>
     <Categories/>
      <Acheivements/>
      <Team/>
      <Footer/>
    </div>
  );
}
