import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Vision = () => {
  const router = useRouter();
  const [visionData, setVisionData] = useState();
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/about/vision`);
      console.log(res.data.ourVision);
      setVisionData(res.data.ourVision);
    })();
  }, []);
  return (
    <div
      className="container mx-auto mt-20 flex flex-row flex-wrap items-center justify-center px-3 md:max-w-[1728px] 
       3xl:mt-[200px] 3xl:flex-nowrap 3xl:px-[130px]"
    >
      <div
        className="left mb-6 w-full
       md:mb-0 md:h-[173px] md:w-[360px]
       lg:h-[230px] lg:w-[478px]
       xl:h-[290px] xl:w-[600px]
       2xl:h-[346px] 2xl:w-[718px]
       3xl:h-[390px] 3xl:w-[808px]"
      >
        <h1
          className="text-[20px] font-bold text-[#172066]
         md:text-[22px] md:leading-7
         lg:text-[26px] lg:leading-9
         xl:text-[32px] xl:leading-[48px]
         2xl:text-[36px] 2xl:leading-[58px]
         3xl:text-[40px] 3xl:leading-[68px] "
        >
          {router.locale === `fr` ? visionData?.titleFr : visionData?.titleEn}
        </h1>
        <p
          className="mt-4 text-justify text-[12px] font-normal leading-[28px] text-[#ABABAB]         
         md:text-[13px] md:leading-7
         lg:text-[14.5px] lg:leading-8
         xl:text-[19px] xl:leading-[50px]
         2xl:text-[20px] 2xl:leading-[60px]
         3xl:text-[24px] "
        >
          {router.locale === `fr`
            ? visionData?.detailsFr
            : visionData?.detailsEn}
        </p>
      </div>
      {/* right side image */}
      <div
        className="relative flex h-[360px] w-[360px] overflow-hidden rounded-[20px] 
       sm:h-[400px] sm:w-[400px]
       md:ml-4 md:h-[314px] md:w-[314px]
       lg:ml-6 lg:h-[420px] lg:w-[420px]
       xl:ml-[30px] xl:h-[523px] xl:w-[523px]
       2xl:ml-9 2xl:h-[628px] 2xl:w-[628px]
       3xl:ml-10 3xl:h-[706px] 3xl:w-[706px]"
      >
        <Image
          src={visionData?.visionImage}
          layout="fill"
          objectFit="cover"
          alt={"asd"}
        />
      </div>
    </div>
  );
};

export default Vision;
