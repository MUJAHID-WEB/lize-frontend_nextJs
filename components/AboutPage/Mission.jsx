import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Mission = () => {
  const [missionData, setMissionData] = useState();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/about/mission`);
      console.log(res.data.OurMission);
      setMissionData(res.data.OurMission);
    })();
  }, []);
  return (
    <div
      className="container mx-auto mt-20 flex flex-row flex-wrap items-center justify-center px-3 md:max-w-[1728px] lg:flex-nowrap
     2xl:mt-[196px] 3xl:px-[130px]"
    >
      <div
        className="relative flex h-[360px] w-[360px] overflow-hidden rounded-[20px]
       sm:h-[450px] sm:w-[450px]
       md:h-[314px] md:w-[314px]
       lg:h-[420px] lg:w-[420px]
       xl:h-[523px] xl:w-[523px]
       2xl:h-[628px] 2xl:w-[628px]
       3xl:h-[706px] 3xl:w-[706px] "
      >
        <Image
          src={missionData?.missionImage}
          layout="fill"
          objectFit="cover"
          className=" "
          alt={"asd"}
        />
      </div>
      {/* right */}
      <div
        className="right mt-5 flex w-full flex-col justify-start
       md:ml-4 md:w-[376px]
       lg:mt-0 lg:ml-6 lg:w-[500px]
       xl:ml-8 xl:w-[628px]
       2xl:ml-9 2xl:w-[680px]
       3xl:ml-10 3xl:w-[848px]"
      >
        <div
          className="flex w-full flex-col justify-start gap-3
         md:w-[350px] md:gap-2.5 
         lg:w-[420px] lg:gap-4 
         xl:w-[522px] xl:gap-5
         2xl:w-[568px] 3xl:w-[714px]"
        >
          <h1
            className="text-[20px] font-bold text-[#172066] 
         md:text-[22px] md:leading-7
         lg:text-[26px] lg:leading-8
         xl:text-[32px] xl:leading-[40px]
         2xl:text-[36px] 2xl:leading-[50px]
         3xl:text-[40px] 3xl:leading-[68px]"
          >
            {router.locale === `fr` ? missionData?.infoFr : missionData?.infoEn}
          </h1>
          <h1
            className="text-[20px] font-semibold text-[#72ADD7]
           md:text-[20px] md:leading-7
           lg:text-[24px] lg:leading-8
           xl:text-[28px] xl:leading-[40px]
           2xl:text-[32px] 2xl:leading-[50px]
           3xl:text-[40px] 3xl:leading-[68px]"
          >
            {router.locale === `fr`
              ? missionData?.titleFr
              : missionData?.titleEn}
          </h1>
          <p
            className="text-justify text-[13px] font-normal leading-6 text-[#ABABAB]
           md:text-[13px] md:leading-7
           lg:text-[16px] lg:leading-[30px]
           xl:text-[20px] xl:leading-[36px]
           2xl:text-[21px] 2xl:leading-[42px]
           3xl:text-[26px] 3xl:leading-[52px]"
          >
            {router.locale === `fr`
              ? missionData?.detailsFr
              : missionData?.detailsEn}
          </p>
        </div>
        <div
          className="mt-5 flex w-full flex-row flex-wrap justify-start
         lg:mt-7 lg:gap-6
         xl:mt-9 xl:gap-7
         2xl:mt-11 2xl:gap-8
         3xl:mt-[50px] 3xl:w-[848px] 3xl:gap-10 "
        >
          {/* 1 */}
          <div
            className="w-1/3 
           lg:w-[150px]
           xl:w-[233px]
           2xl:w-[255px]
           3xl:w-[308px]"
          >
            <div
              className="relative h-9 w-9 rounded-full bg-[#A1D5FB] 
             lg:h-14 lg:w-14
             2xl:h-20 2xl:w-20
             3xl:h-[101px] 3xl:w-[101px]"
            >
              <span
                className="absolute left-3 top-[10px] text-lg font-bold
               lg:top-5 lg:left-5 lg:text-3xl
               2xl:top-8 2xl:left-7 2xl:text-[40px] 2xl:font-bold
               3xl:top-[35px] 3xl:left-8 3xl:text-5xl"
              >
                5M+
              </span>
            </div>
            <p
              className="ml-3 text-[10px] font-medium leading-[24px]
              md:text-[12px] lg:text-[14px] 
              xl:text-[16px] xl:leading-[28px]
              2xl:ml-5 2xl:mt-2 2xl:text-[17px] 2xl:leading-[34px]
              3xl:ml-8 3xl:text-[20px] "
            >
              {router.locale === `fr`
                ? ` Nombre total de passagers`
                : ` Total number of passengers`}
            </p>
          </div>
          {/* 2 */}
          <div
            className="w-1/3 
           lg:w-[129px]
           xl:w-[145px]
           2xl:w-[153px]
           3xl:w-[198px]"
          >
            <div
              className="relative h-9 w-9 rounded-full bg-[#D2D7FF] 
             lg:h-14 lg:w-14
             2xl:h-20 2xl:w-20
             3xl:h-[101px] 3xl:w-[101px]"
            >
              <span
                className="absolute left-3 top-[10px] text-lg font-bold
               lg:top-5 lg:left-5 lg:text-3xl
               2xl:top-8 2xl:left-7 2xl:text-[40px] 2xl:font-bold
               3xl:top-[35px] 3xl:left-8 3xl:text-5xl"
              >
                98%
              </span>
            </div>
            <p
              className="ml-3 text-[10px] font-medium
              md:text-[12px] lg:text-[14px] 
              xl:text-[16px] xl:leading-[28px] 
              2xl:mt-2 2xl:text-[17px] 2xl:leading-[34px]
              3xl:ml-8 3xl:text-[20px] "
            >
              {router.locale === `fr`
                ? ` Clients satisfaits`
                : ` Satisfied customers`}
            </p>
          </div>
          {/* 3 */}
          <div
            className="w-1/3 
           lg:w-[172px]
           xl:w-[194px]
           2xl:w-[207px]
           3xl:w-[260px]"
          >
            <div
              className="relative h-9 w-9 rounded-full bg-[#C7F2FC] 
             lg:h-14 lg:w-14
             2xl:h-20 2xl:w-20
             3xl:h-[101px] 3xl:w-[101px]"
            >
              <span
                className="absolute left-3 top-[10px] text-lg font-bold
               lg:top-5 lg:left-5 lg:text-3xl
               2xl:top-8 2xl:left-7 2xl:text-[40px] 2xl:font-bold
               3xl:top-[35px] 3xl:left-[32px] 3xl:text-5xl"
              >
                15M
              </span>
            </div>
            <p
              className="ml-3 text-[10px] font-medium 
             md:text-[12px] lg:text-[14px] 
             xl:text-[16px] xl:leading-[28px]
             2xl:mt-2 2xl:text-[17px] 2xl:leading-[34px] 
             3xl:ml-8 3xl:text-[20px]"
            >
              {router.locale === `fr`
                ? `Abonnés aux médias sociaux`
                : `Social Media Followers`}
            </p>
          </div>
        </div>
        {/* rounded part end */}
      </div>
    </div>
  );
};

export default Mission;
