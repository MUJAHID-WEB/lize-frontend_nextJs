import React, { useEffect, useState } from "react";
import axios from "axios";
import RentalSection from "./RentalSection";
import Slider from "react-slick";
import Image from "next/image";
import HelicopterSVG from "../svg/HelicopterSVG";
import { data } from "./CargoRental";
import { useRouter } from "next/router";
let airCrafts: any = [
  {
    id: "1",
    image: "/plane04.webp",
    airCraftName: "CDS BE1900",
    description:
      "It is a matter of pride for Falcon 900DX that we have one of the best air charter safety records in the region",
    descriptionFr:
      "C'est une question de fierté pour Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région",
    features: [
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum1.",
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum1.",
    ],
  },
  {
    id: "2",
    image: "/plane05.webp",
    airCraftName: "CDS BE1900",
    description:
      "It is a matter of pride for Falcon 901DX that we have one of the best air charter safety records in the region",
    descriptionFr:
      "C'est une question de fierté pour Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région",
    features: [
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum2.",
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum2",
    ],
  },
  {
    id: "3",
    image: "/plane06.webp",
    airCraftName: "CDS BE1900",
    description:
      "It is a matter of pride for Falcon 902DX that we have one of the best air charter safety records in the region",
    descriptionFr:
      "C'est une question de fierté pour Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région",
    features: [
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum3.",
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum3.",
    ],
  },
];

function HelicopterRental() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const router = useRouter();
  const [helicopterList, setHelicopterList] = useState<any>();
  console.log(
    "🚀 ~ file: HelicopterRental.tsx:13 ~ HelicopterRental ~ helicopterList:",
    helicopterList
  );
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/plane?typeOfPlane=helicopters`
      );
      let max: any = Math.random() * response?.data?.planes.length - 1;
      setHelicopterList(response?.data?.planes[Math.round(max)]);
    })();
  }, []);
  const planeImage = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "relative h-full w-full overflow-hidden",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="container relative flex flex-col items-start justify-start lg:mt-28 lg:pl-12 2xl:mt-[288px]">
      <div className="l flex w-full flex-row flex-wrap items-start justify-center lg:flex-nowrap lg:justify-start ">
        <div
          className="mt-[30px] flex w-[96%] flex-col flex-wrap items-start 
           lg:mt-4 lg:w-[60%] 
           xl:mt-5 2xl:mt-6 
           3xl:mt-[30px] 3xl:w-[calc(100%-580px)] "
        >
          <h3
            className="pt-6 text-2xl font-bold capitalize text-secondary 
             md:pt-10 
             lg:pt-3 lg:text-[26px] lg:leading-[36px]
             xl:text-[28px] xl:leading-[40px]
             2xl:text-[30px] 2xl:leading-[44px]
             3xl:pt-0 3xl:text-[34px] 3xl:leading-11"
          >
            {router.locale === "fr"
              ? `Location hélicoptère`
              : `Helicopter rental`}
          </h3>
          {/* Description Section */}
          <p
            className=" text-[12px] leading-6 
           md:text-[14px] md:leading-7 
           lg:w-[90%] lg:text-[16px] lg:leading-[30px] 
           xl:w-[80%] xl:text-[18px] xl:leading-[34px] 
           2xl:w-[90%] 2xl:text-[20px] 2xl:leading-[40px] 
           3xl:text-[24px] 3xl:leading-[44px] "
          >
            {data.length >= 115 && !expanded ? (
              <>
                {data.substring(0, 115)}
                <span
                  onClick={() => setExpanded(!expanded)}
                  className="cursor-pointer text-primary "
                >
                  {router.locale === "fr" ? `...voir plus` : `...see more`}
                </span>
              </>
            ) : (
              <>
                {data}
                <span
                  onClick={() => setExpanded(!expanded)}
                  className="cursor-pointer text-primary "
                >
                  {router.locale === "fr" ? ` voir moins` : ` see less`}
                </span>
              </>
            )}
          </p>
          {/* Features. Map that P! */}
          <p
            className="relative mt-[39px] w-[85%] pl-[27px] font-montserrat text-[12px] leading-6 
           md:w-[94%] md:text-[14px] md:leading-7 
           lg:mt-8 lg:w-[94%] lg:text-[16px] lg:leading-[30px]
           xl:w-[83%] xl:text-[18px] xl:leading-[34px]
           2xl:mt-[39px] 2xl:w-[85%] 2xl:text-[20px]
           2xl:leading-[34px] 3xl:w-[85%] 3xl:text-[24px] 3xl:leading-[40px]"
          >
            <span className="absolute inset-y-0 left-0 h-full w-[6px] rounded-[14px] bg-primary" />
            {helicopterList?.keyFeatureOne}
          </p>
          <p
            className="relative mt-[39px] w-[85%] pl-[27px] font-montserrat text-[12px] leading-6 md:w-[94%] md:text-[14px] md:leading-7 
           lg:mt-8 lg:w-[94%] lg:text-[16px] lg:leading-[30px]
           xl:w-[83%] xl:text-[18px] xl:leading-[34px]
           2xl:mt-[39px] 2xl:w-[85%] 2xl:text-[20px]
           2xl:leading-[34px] 3xl:w-[85%] 3xl:text-[24px] 3xl:leading-[40px]"
          >
            <span className="absolute inset-y-0 left-0 h-full w-[6px] rounded-[14px] bg-primary" />
            {helicopterList?.keyFeatureTwo}
          </p>
          <h3
            className="mt-6 pb-4 text-[24px] font-semibold capitalize leading-[36px] text-primary 
             lg:mt-4 lg:text-[19px]
             xl:mt-6 xl:text-[22px]
             2xl:mt-9 2xl:text-[24px]
             3xl:mt-10  "
          >
            {router.locale === "fr" ? `Nos jet privé` : `Our private jets`}
          </h3>
          {/* Slider 02 */}
          <Slider
            slidesToShow={3}
            slidesToScroll={1}
            speed={500}
            className="planeItems slideGap flex w-full flex-row flex-wrap justify-center md:justify-between"
          >
            {helicopterList?.planeImage?.map((e: any, i: any) => (
              <div
                key={i}
                className="relative !flex h-[170px] w-[90%] cursor-pointer justify-center bg-cover bg-center text-center 
                 md:h-[170px] md:w-[230px]
                 lg:h-24 lg:w-40
                 xl:h-[142px] xl:w-[206px]
                 2xl:h-[178px] 2xl:w-[242px]
                 3xl:h-[200px] 3xl:w-[264px]"
              >
                <Image
                  src={e || "/plane06.webp"}
                  alt="plane image"
                  className="absolute h-full w-full rounded-[10px]"
                  layout="fill"
                />
                <p
                  className="relative mb-[15px] mt-auto text-[16px] font-semibold leading-[30px]
                   text-white-primary
                   md:text-[18px] lg:text-[14px]
                   lg:leading-[12px] xl:text-[16px]
                   xl:leading-[16px] 2xl:text-[18px]
                   2xl:leading-[20px] 3xl:text-[20px] 3xl:leading-[30px]"
                >
                  {helicopterList?.LIT_Name}
                </p>
              </div>
            ))}
          </Slider>
          {/* Slider 02 ends */}
        </div>
        {/* Slider 01 */}
        <div
          className="relative mt-12 h-[356px] w-[96%]
           md:h-[390px] md:w-[60%] 
           lg:h-[302px] lg:w-[327px]
           xl:h-[380px] xl:w-[410px]
           2xl:h-[456px] 2xl:w-[492px]
           3xl:mt-0 3xl:h-[524px] 3xl:w-[565px] "
        >
          <div className="absolute right-0 z-20">
            <HelicopterSVG />
          </div>
          <div className="absolute z-20 rotate-[272deg]">
            <HelicopterSVG />
          </div>
          <div className="absolute h-full w-full overflow-hidden rounded-bl-[322px] rounded-br-[322px] rounded-tl-[10px] rounded-tr-[10px]">
            <Slider {...planeImage}>
              {helicopterList?.planeImage?.map((p: any, i: any) => (
                <Image key={i} src={p} alt="planes" layout="fill" objectFit="cover" />
              ))}
            </Slider>
          </div>
        </div>
        {/* Slider 01 ends */}
      </div>
    </section>
  );
}

export default HelicopterRental;
