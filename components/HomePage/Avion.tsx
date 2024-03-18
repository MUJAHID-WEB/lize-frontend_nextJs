import react, { useRef, useEffect, useContext } from "react";
import Image from "next/image";
import PlanesSVG from "../svg/PlanesSVG";
import PlaneBottom from "../svg/PlaneBottom";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";

function Avion() {
  const sectionRef = useRef(null);
  const { setAvionRef } = useContext(AppContext);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }
    setAvionRef(sectionRef.current);
  }, [setAvionRef]);
  const router = useRouter();
  return (
    <div
      ref={sectionRef}
      className=" relative mt-5 bg-black-primary md:mt-14 lg:mt-[70px] xl:mt-[110px] 3xl:mt-[190px]"
    >
      <div className="absolute right-0 z-10">
        <PlanesSVG />
      </div>
      <div className="container relative z-20 flex flex-col justify-start px-3">
        <h3
          className=" pt-8 text-[24px] font-semibold capitalize leading-[28px] text-white-primary 
         md:pt-12 md:text-[30px] md:leading-[30px] 
         lg:pt-14 lg:text-[34px] lg:leading-[35px] 2xl:pt-[84px]"
        >
          {router.locale === "fr" ? "avions" : "planes"}
        </h3>
        <div className="mt-[52px] flex w-full flex-col gap-[15px] md:flex-row">
          <div
            className="planeGradient relative flex h-[390px] w-full items-center justify-center overflow-hidden rounded-[40px] 
            md:h-[580px] md:w-[44%]
            lg:h-[525px] 
            xl:h-[665px] 
            2xl:h-[785px] 
            3xl:h-[825px] "
          >
            <div className="relative z-10 h-full w-full">
              <Image
                src="/Falcon 8X for Avions page 1.webp"
                alt="planes"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              className="absolute inset-x-0 bottom-0 z-20 flex w-full flex-col items-start justify-start px-5 pb-8
              md:px-7 md:pb-6
              lg:px-10 lg:pb-8 "
            >
              <h4
                className="text-[14px] font-bold text-white-primary
                    md:text-[16px] md:leading-[28px]
                    lg:text-[20px] lg:leading-[30px]
                    xl:text-[24px] xl:leading-[35px]
                    2xl:text-[28px] 2xl:leading-[41px]
                    3xl:text-[34px] 3xl:leading-11"
              >
                {router.locale === "fr"
                  ? "FALCON 8X/LX-EBO"
                  : "FALCON 8X/LX-EBO"}
              </h4>
              <p
                className="mt-2.5 text-[11px] font-medium  text-white-primary
                    md:mt-4 md:w-[95%] md:text-[12px] md:leading-[20px]
                    lg:mt-[25px] xl:text-[14px] xl:leading-[22px]
                    2xl:text-[18px] 2xl:leading-[27px]"
              >
                {router.locale === "fr"
                  ? "Au-delà de la concurrence, le Falcon 8X est un dérivé du triréacteur à succès Falcon 7X."
                  : "Beyond the competition, the Falcon 8X is a derivative of the successful Falcon 7X trijet."}
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-start gap-[15px]
           md:w-[55%] "
          >
            <div
              className="planeGradient relative h-[250px] w-full overflow-hidden rounded-[40px]
              md:h-[270px]
              lg:h-[260px]
              xl:h-[330px]
              2xl:h-[390px]
              3xl:h-[410px]"
            >
              <div className="relative z-10 h-full w-full">
                <Image
                  src="https://images.pexels.com/photos/11193831/pexels-photo-11193831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="planes"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div
                className="absolute inset-x-0 bottom-0 z-20 flex w-full flex-col items-start justify-start px-5 pb-8
               md:px-7 md:pb-6
               lg:px-10 lg:pb-8 "
              >
                <h4
                  className="text-[14px] font-bold text-white-primary
                    md:text-[16px] md:leading-[28px]
                    lg:text-[20px] lg:leading-[30px]
                    xl:text-[24px] xl:leading-[35px]
                    2xl:text-[28px] 2xl:leading-[41px]
                    3xl:text-[34px] 3xl:leading-11"
                >
                  {router.locale === "fr"
                    ? "FALCON 8X/LX-EBO"
                    : "FALCON 8X/LX-EBO"}
                </h4>
                <p
                  className="mt-2.5 text-[11px] font-medium  text-white-primary
                    md:mt-1.5 md:w-[80%] md:text-[12px] md:leading-[20px] 
                    lg:mt-2.5 xl:text-[14px] xl:leading-[22px]
                    2xl:text-[18px] 2xl:leading-[27px]"
                >
                  {router.locale === "fr"
                    ? "Au-delà de la concurrence, le Falcon 8X est un dérivé du triréacteur à succès Falcon 7X."
                    : "Beyond the competition, the Falcon 8X is a derivative of the successful Falcon 7X trijet."}
                </p>
              </div>
            </div>
            <div className="flex w-full flex-row flex-wrap justify-start gap-[15px] text-white-primary">
              <div
                className="planeGradient relative h-[350px] w-full overflow-hidden rounded-[40px] 
                md:h-[293px] md:w-[48%] 
                lg:h-[250px]
                xl:h-[320px] 
                2xl:h-[380px]
                3xl:h-[400px]"
              >
                <div className="relative z-10 h-full w-full ">
                  <Image
                    src="/plane07.webp"
                    alt="planes"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className="absolute inset-x-0 bottom-0  z-20 flex w-full flex-col items-start justify-start px-5 pb-8
                  md:px-4 md:pb-6
                  xl:px-[26px] xl:pb-[33px] "
                >
                  <h4
                    className="text-[14px] font-bold text-white-primary
                    md:text-[16px] md:leading-[28px]
                    lg:text-[20px] lg:leading-[30px]
                    xl:text-[24px] xl:leading-[35px]
                    2xl:text-[28px] 2xl:leading-[41px]
                    3xl:text-[34px] 3xl:leading-11"
                  >
                    {router.locale === "fr"
                      ? "FALCON 8X/LX-EBO"
                      : "FALCON 8X/LX-EBO"}
                  </h4>
                  <p
                    className="mt-[5px] text-[11px] font-medium  text-white-primary
                    md:w-[97%] md:text-[12px] lg:leading-[20px]
                    xl:text-[14px] xl:leading-[22px]
                    2xl:text-[18px] 2xl:leading-[27px]"
                  >
                    {router.locale === "fr"
                      ? "Au-delà de la concurrence, le Falcon 8X est un dérivé du triréacteur à succès Falcon 7X."
                      : "Beyond the competition, the Falcon 8X is a derivative of the successful Falcon 7X trijet."}
                  </p>
                </div>
              </div>
              <div
                className="planeGradient relative h-[350px] w-full overflow-hidden rounded-[40px] 
                md:h-[293px] md:w-[48%]
                lg:h-[250px]
                xl:h-[320px]
                2xl:h-[380px]
                3xl:h-[400px]"
              >
                <div className="relative z-10 h-full w-full">
                  <Image
                    src="/plane07.webp"
                    alt="planes"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className="absolute inset-x-0 bottom-0  z-20 w-full flex-col items-start justify-start px-[26px] pb-[33px]
                 md:px-4 md:pb-6
                 xl:px-[26px] xl:pb-[33px] "
                >
                  <h4
                    className="text-[14px] font-bold text-white-primary
                    md:text-[16px] md:leading-[28px]
                    lg:text-[20px] lg:leading-[30px]
                    xl:text-[24px] xl:leading-[35px]
                    2xl:text-[28px] 2xl:leading-[41px]
                    3xl:text-[34px] 3xl:leading-11"
                  >
                    {router.locale === "fr"
                      ? "FALCON 8X/LX-EBO"
                      : "FALCON 8X/LX-EBO"}
                  </h4>
                  <p
                    className="mt-[5px] text-[11px] font-medium  text-white-primary
                    md:text-[12px] lg:w-[95%] lg:leading-[20px]
                    xl:text-[14px] xl:leading-[22px]
                    2xl:text-[18px] 2xl:leading-[27px]"
                  >
                    {router.locale === "fr"
                      ? "Au-delà de la concurrence, le Falcon 8X est un dérivé du triréacteur à succès Falcon 7X."
                      : "Beyond the competition, the Falcon 8X is a derivative of the successful Falcon 7X trijet."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="my-10 flex flex-row items-center justify-center
         md:mt-[65px] md:mb-[58px]"
        >
          <button className="btn-white-tertiary py-2.5 px-7 font-montserrat capitalize md:py-4 md:px-9 lg:py-5 lg:px-[49px]">
            {router.locale === "fr" ? "Voir Plus" : "See more"}
          </button>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 z-10">
        <PlaneBottom />
      </div>
    </div>
  );
}

export default Avion;
