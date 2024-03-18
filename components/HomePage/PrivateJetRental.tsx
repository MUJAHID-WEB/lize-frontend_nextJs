import React, { useEffect, useState } from "react";
import PrivateJetRentalSVJ from "../svg/PrivateJetRentalSVJ";
import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "react-slick";
import axios from "axios";

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
function PrivateJetRental() {
  const [airCraft, setAirCraft] = useState(airCrafts[0]);
  const router = useRouter();

  const [planeList, setPlaneList] = useState<any>([]);

  const activePlane = (id: any) => {
    setAirCraft(airCrafts.filter((data: any) => id == data.id)[0]);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/plane?typeOfPlane=private jet`
      );
      let max: any = Math.random() * response?.data?.planes.length - 1;
      setPlaneList(response?.data?.planes[Math.round(max)]);
    })();
    return () => {
      setPlaneList([]);
    };
  }, []);

  const planeImage = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "relative h-full w-full overflow-hidden rounded-[24px]",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section
      className="container mt-32 md:mt-40 
       lg:mt-40 lg:pl-24 lg:pr-3
       xl:mt-40 xl:pl-28 
       2xl:mt-[200px] 2xl:pl-[120px] 2xl:pr-14
       3xl:mt-[200px] 3xl:pl-[188px] 3xl:pr-[102px] "
    >
      <div className="flex w-full flex-row flex-wrap justify-center lg:justify-start">
        <div
          className="relative h-[356px] w-[94%] 
           md:h-[356px] md:w-[80%] 
           lg:h-[400px] lg:w-[40%]
           xl:h-[456px] xl:w-[40%] 
           2xl:h-[500px] 2xl:w-[40%]
           3xl:h-[556px] 3xl:w-[554px]"
        >
          <div className="absolute -top-[90px] -left-[90px] -z-10 ">
            <PrivateJetRentalSVJ />
          </div>

          <Slider {...planeImage}>
            {planeList?.planeImage?.map((p: any, i: any) => (
              <Image
                src={p}
                key={i}
                // src="/plane01.webp"
                alt="planes"
                layout="fill"
                objectFit="cover"
              />
            ))}
          </Slider>
        </div>
        <div
          className="flex w-[96%] flex-col items-start pl-5 
           lg:w-[60%] lg:pl-10
           xl:pl-12 2xl:pl-16
           3xl:w-[calc(100%-554px)] "
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
              ? "Location de jet privé"
              : "Private jet rental"}
          </h3>
          <p
            className="mt-5 text-[12px] leading-6
             md:mt-6 md:w-[60%] md:text-[13.5px] md:leading-7 
             lg:mt-4 lg:w-[90%] lg:text-[16px] lg:leading-[30px]
             xl:mt-5 xl:w-[80%] xl:text-[18px] xl:leading-[34px]
             2xl:mt-6 2xl:w-[78%] 2xl:text-[20px] 2xl:leading-[40px]
             3xl:mt-[30px] 3xl:w-[85%] 3xl:text-[24px] 3xl:leading-[44px]"
          >
            {/* {airCraft?.description} */}
            {router.locale === "fr"
              ? airCraft?.descriptionFr
              : airCraft?.description}
          </p>
          <p
            className="relative mt-6 w-[85%] pl-[27px] font-montserrat text-[12px] leading-6 md:mt-6
                md:w-[60%] md:text-[13.5px] md:leading-7 lg:mt-8
                lg:w-[94%] lg:text-[16px] lg:leading-[30px]
                xl:w-[83%] xl:text-[18px] xl:leading-[34px]
                2xl:mt-10 2xl:w-[85%] 2xl:text-[20px]
                2xl:leading-[34px] 3xl:w-[85%] 3xl:text-[24px] 3xl:leading-[40px]"
          >
            <span className="absolute inset-y-0 left-0 h-full w-[6px] rounded-[14px] bg-primary" />
            {planeList?.keyFeatureOne}
          </p>
          <p
            className="relative mt-6 w-[85%] pl-[27px] font-montserrat text-[12px] leading-6 md:mt-6
                md:w-[60%] md:text-[13.5px] md:leading-7 lg:mt-8
                lg:w-[94%] lg:text-[16px] lg:leading-[30px]
                xl:w-[83%] xl:text-[18px] xl:leading-[34px]
                2xl:mt-10 2xl:w-[85%] 2xl:text-[20px]
                2xl:leading-[34px] 3xl:w-[85%] 3xl:text-[24px] 3xl:leading-[40px]"
          >
            <span className="absolute inset-y-0 left-0 h-full w-[6px] rounded-[14px] bg-primary" />
            {planeList?.keyFeatureTwo}
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
          <Slider
            slidesToShow={3}
            slidesToScroll={1}
            speed={500}
            className="planeItems flex w-full flex-row flex-wrap justify-center gap-[13px] md:justify-between"
          >
            {planeList?.planeImage?.map((e: any, i: any) => (
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
                  src={e || "/plane01.webp"}
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
                  {planeList?.LIT_Name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default PrivateJetRental;
