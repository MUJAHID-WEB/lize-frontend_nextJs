import Head from "next/head";
import Amenities from "@/components/HomePage/Amenities";
import CargoRental from "@/components/HomePage/CargoRental";
import Experience from "@/components/HomePage/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HelicopterRental from "@/components/HomePage/HelicopterRental";
import Hero from "@/components/HomePage/Hero";
import Avion from "@/components/HomePage/Avion";
import PrivateJetRental from "@/components/HomePage/PrivateJetRental";
import Service from "@/components/HomePage/Service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  // init route hook
  const router = useRouter();
  const [logo, setLogo] = useState<any>();
  /**
   * Check if the language is English
   * router.locale === 'en'
   * Check if the language is French
   * router.locale === 'fr'
   *
   */
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/brand`);
      console.log(
        "🚀 ~ file: HeaderMobile.tsx:86 ~ res.data.brand:",
        res.data.brand
      );
      setLogo(res.data.brand);
    })();
  }, []);
  const mainTitle: string =
    router.locale === "en"
      ? `Make your memorable Trip now with easy &amp; fast
          process`
      : `Faites votre voyage mémorable maintenant avec facile et rapide
          processus`;

  return (
    <>
      <Head>
        <title>Lize Transport -{mainTitle}</title>
        <meta
          name="description"
          content="Make your memorable
Trip now with easy & fast process"
        />
        <meta
          name="og:description"
          content="Make your memorable
Trip now with easy & fast process"
        />
        <meta
          name="og:title"
          content="Make your memorable
Trip now with easy & fast process"
        />
        <link rel="icon" href={logo?.favicon} />
      </Head>
      <Header scrollable={true} />
      <Hero />
      <Experience />
      <Avion />
      <Service />
      <PrivateJetRental />
      <HelicopterRental />
      <CargoRental />
      <Amenities />
      <Footer />
    </>
  );
};

export default Home;
