import Image from "next/image";
import type { Metadata } from "next";
import HeroSection from "@/app/Home/Hero";
import CemilanKmi from "@/app/Home/CemilanKmi";
import ProdukUnggulan from "@/app/Home/Prod";
import Tentang from "@/app/Home/Tentang";

export const metadata: Metadata = {
  title: "Tentang Kami - Website Cemilan",
  description: "Kisah di balik Website Cemilan, misi, dan tim kami.",
};

export default function Home() {
  return (
    <>
  <HeroSection />
  <CemilanKmi />
  <ProdukUnggulan />
  <Tentang />
</>
  );
}
