import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1.js";
import Section2 from "@/components/Section2.js";
import Section3 from "@/components/Section3.js";
import Section4 from "@/components/Section4.js";
import Section5 from "@/components/Section5.js";
import Section6 from "@/components/Section6.js";
import Section7 from "@/components/Section7.js";
import Section8 from "@/components/Section8.js";
import Section9 from "@/components/Section9.js";
import Image from "next/image";

export const metadata = {
  title: 'MEDVi - Personalized Weight Loss Solutions',
}
 
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Footer/>
    </div>
  );
}
