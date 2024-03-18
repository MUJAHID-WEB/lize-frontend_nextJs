import Image from "next/image";
import React, { useEffect, useState } from "react";
import RentalSection from "./RentalSection";
import Slider from "react-slick";
import CargoSVG from "../svg/CargoSVG";
import { useRouter } from "next/router";
import axios from "axios";

export const data = `It is a matter of pride for Falcon 900DX that we have one of the
            best air charter safety records in the region It is a matter of
            pride for Falcon 900DX that we have one of the best air charter
            safety records in the region It is a matter of pride for Falcon
            900DX that we have one of the best air charter safety records in the
            region It is a matter of pride for Falcon 900DX that we have one of
            the best air charter safety records in the region`;

function CargoRental() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const router = useRouter();
  const [cargoList, setCargoList] = useState<any>();
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/plane?typeOfPlane=cargo`
      );
      let max: any = Math.random() * response?.data?.planes.length - 1;
      setCargoList(response?.data?.planes[Math.round(max)]);
    })();
  }, []);
  const planeImage = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "relative h-full w-full overflow-hidden ",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="container relative flex flex-col items-start justify-start lg:mt-28 lg:pl-12 2xl:mt-[288px]">
      {/* Slider 01 */}

      <div
        className="flex w-full flex-row flex-wrap items-start justify-center 
       lg:flex-nowrap lg:justify-start "
      >
        <div
          className="mt-[30px] flex w-[96%] flex-col flex-wrap items-start 
         lg:mt-4 lg:w-[60%] 
         xl:mt-5 2xl:mt-6 
         3xl:mt-[30px] 3xl:w-[calc(100%-554px)] "
        >
          <h3
            className="pt-6 text-2xl font-bold capitalize text-secondary 
             md:pt-10 
             lg:pt-3 lg:text-[26px] lg:leading-[36px]
             xl:text-[28px] xl:leading-[40px]
             2xl:text-[30px] 2xl:leading-[44px]
             3xl:pt-0 3xl:text-[34px] 3xl:leading-11"
          >
            {router.locale === "fr" ? `cargaison` : `cargo`}
          </h3>
          {/* Description Section */}
          <p
            className=" text-[12px] leading-6 
             md:text-[14px] 
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
            {cargoList?.keyFeatureOne}
          </p>
          <p
            className="relative mt-[39px] w-[85%] pl-[27px] font-montserrat text-[12px] leading-6 
             md:w-[94%] md:text-[14px] md:leading-7 
             lg:mt-8 lg:w-[94%] lg:text-[16px] lg:leading-[30px]
             xl:w-[83%] xl:text-[18px] xl:leading-[34px]
             2xl:mt-[39px] 2xl:w-[85%] 2xl:text-[20px]
             2xl:leading-[34px] 3xl:w-[85%] 3xl:text-[24px] 3xl:leading-[40px]"
          >
            <span className="absolute inset-y-0 left-0 h-full w-[6px] rounded-[14px] bg-primary" />
            {cargoList?.keyFeatureTwo}
          </p>
          {/* Map Ends here */}
          <h3
            className="mt-6 pb-4 text-[24px] font-semibold capitalize leading-[36px] text-primary 
             lg:mt-4 lg:text-[19px]
             xl:mt-6 xl:text-[22px]
             2xl:mt-9 2xl:text-[24px]
             3xl:mt-10  "
          >
            {router.locale === "fr" ? `Nos Avions Cargo` : `Our private Cargo`}
          </h3>
          {/* Slider 02 */}
          <Slider
            slidesToShow={3}
            slidesToScroll={1}
            speed={500}
            className="planeItems slideGap flex w-full flex-row flex-wrap justify-center md:justify-between"
          >
            {cargoList?.planeImage?.map((e: any, i: any) => (
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
                  {cargoList?.LIT_Name}
                </p>
              </div>
            ))}
          </Slider>
          {/* Slider 02 ends */}
        </div>
        <div
          className="relative mt-28 h-[320px] w-[80%]
           md:h-[356px] md:w-[60%] 
           lg:mt-20 lg:h-[277px] lg:w-[286px] 
           xl:mt-12 xl:h-[347px] xl:w-[358px] 
           2xl:mt-10 2xl:h-[416px] 2xl:w-[430px] 
           3xl:mt-0 3xl:h-[475px] 3xl:w-[490px]"
        >
          <div className="absolute -top-[138px] -left-[131px] z-10">
            <CargoSVG />
          </div>
          <div className="cargoPolygon absolute z-20 h-full w-full overflow-hidden">
            <Slider {...planeImage}>
              {cargoList?.planeImage?.map((p: any, i: any) => (
                <Image key={i} src={p} alt="planes" layout="fill" objectFit="cover" />
              ))}
            </Slider>
          </div>
          <div
            className="absolute -right-6 -bottom-6  z-10 h-[45px] w-[45px] 
             lg:top-[250px] lg:left-[260px] lg:h-[45px] lg:w-[45px]
             xl:top-[317px] xl:left-[327px] xl:h-[56px] xl:w-[56px]
             2xl:top-[380px] 2xl:left-[394px] 2xl:h-[67px] 2xl:w-[67px]
             3xl:top-[436px] 3xl:left-[451px] 3xl:h-[77px] 3xl:w-[77px]"
          >
            <Image
              src="/Ellipse 58.png"
              alt="planes"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Slider 01 ends */}
    </section>
  );
}

export default CargoRental;
