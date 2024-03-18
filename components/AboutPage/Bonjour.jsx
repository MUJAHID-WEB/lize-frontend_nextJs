/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Bonjour = () => {
  const router = useRouter();
  const [whoWe, setWhoWe] = useState();
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/whoWeAre`);
      console.log(res.data.whoWeAre);
      setWhoWe(res.data.whoWeAre);
    })();
  }, []);
  return (
    <div className="container mx-auto mt-40 flex flex-row flex-wrap items-center justify-center px-3 md:max-w-[1728px] 2xl:flex-nowrap 3xl:px-[130px]">
      <Image src="/Vector-1.png" width={98} height={419} alt="" />
      <div
        className="flex w-full flex-col justify-center 
       md:w-[364px]
       lg:h-[271px] lg:w-[455px]
       xl:h-[340px] xl:w-[568px]
       2xl:ml-4 2xl:h-[406px] 2xl:w-[682px]
       3xl:ml-5 3xl:h-[458px] 3xl:w-[768px]"
      >
        <h6
          className="font-Poppins text-[17px] font-bold text-[#72ADD7] 
         lg:text-[22px]
         2xl:text-[24px]"
        >
          {router.locale === "fr" ? whoWe?.infoFr : whoWe?.infoEn}
        </h6>
        <h1
          className="mt-3 mb-4 w-full font-poppins text-[18px] font-bold leading-[30px] text-[#172066] 
          md:text-[20px] 
         lg:w-[456px] lg:text-[24px] lg:font-bold lg:leading-[40px] 
         xl:w-[568px] xl:text-[30px]
         2xl:w-[680px] 2xl:text-4xl 2xl:leading-[60.6px]
         3xl:w-[768px] 3xl:text-[40px] 3xl:leading-[68.6px]"
        >
          {router.locale === "fr" ? whoWe?.titleFr : whoWe?.titleEn}{" "}
        </h1>
        <p
          className="font-Poppins mb-5 text-[12px] font-normal leading-6 text-[#ABABAB]
         md:mb-7 md:text-[12.5px]
         md:leading-7 lg:mb-10
         lg:text-[13.5px] lg:leading-[30px] 
         xl:text-[17px] 
         2xl:text-[20px] 2xl:leading-[35.73px] 
         3xl:pr-9 3xl:leading-[37.73px]"
        >
          {router.locale === "fr" ? whoWe?.detailsFr : whoWe?.detailsEn}
        </p>
        <div>
          <div className="flex">
            <div
              className="text-white flex h-9 w-[86px] items-center justify-center rounded bg-[#72ADD7] text-[11px] font-semibold text-white-primary 
             md:h-10 md:w-24 md:text-[13px]
             lg:h-[54px] lg:w-[136px] lg:text-[14px]"
            >
              {router.locale === "fr" ? `Parlons` : `Let's talk`}
              <span className="ml-2 w-4">
                <i className="fa-solid fa-message" />
              </span>
            </div>
            <div
              className="ml-4 flex items-center justify-center text-[12px] font-medium text-[#172066] md:text-[13px] 
             lg:ml-7 lg:text-[16px] 2xl:text-[22px]"
            >
              {router.locale === "fr"
                ? `Consultez nos services`
                : `Consult our services`}
              <span className="ml-3 w-4 text-[#72ADD7] lg:mt-1 2xl:mt-2 ">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div
        className="mt-5 h-[360px] w-[360px] drop-shadow-[0_-25px_2px_rgba(114,173,215,0.2)]
       sm:w-[50%] md:mt-10 md:ml-3 md:h-[233px] md:w-[233px]
       lg:ml-[63px] lg:h-[311px] lg:w-[311px]
       xl:ml-[79px] xl:h-[389px] xl:w-[389px]
       2xl:mt-0 2xl:ml-[94px] 2xl:h-[465px] 2xl:w-[465px]
       3xl:mt-0 3xl:ml-[106px] 3xl:h-[525px] 3xl:w-[525px]"
      >
        <div className="roundCorner relative flex h-full w-full flex-row items-start justify-start">
          <div className="polygonImage absolute inset-0 z-30 flex h-full w-full ">
            <Image
              src={whoWe?.image}
              alt="asd"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonjour;
