import { useRouter } from "next/router";
import React from "react";

function MyTripsBanner() {
  const router = useRouter();
  return (
    <>
      <div
        style={{ backgroundImage: `url(../bar1.webp)` }}
        className="mt-5 w-full rounded-[10px] bg-cover bg-center"
      >
        <div className="relative w-full rounded-[10px] bg-[#00000049] py-5">
          <div className="my-[35px] ml-10 flex w-[634px] flex-col justify-start ">
            <h3
              className="mb-6 font-poppins text-[32px] font-semibold leading-[45px] text-[#ffffff] 
             xl:text-[38px] xl:leading-11
             2xl:text-[40px] 2xl:leading-[70px]"
            >
              {router.locale === `fr`
                ? `Vous pouvez toujours ajouter des commodités à votre voyage.`
                : `You can always add amenities to your trip.`}
            </h3>
            <p className="mb-6 font-poppins font-normal text-[#ffffff] lg:text-[16px] xl:text-[20px] 2xl:text-2xl">
              {router.locale === `fr`
                ? `Nous ne sommes jamais loin de vous. Nous sommes là pour vous aider à rendre votre voyage agréable.`
                : `We are never far from you. We are here to help makes your trip   pleasant.`}
            </p>
            <a
              href=""
              className="w-[148px] rounded-[10px] bg-[#ffffff] px-5 py-4 text-sm font-medium text-[#72ADD7] 
               xl:w-[185px] xl:py-5 xl:px-8 xl:text-[16px]
               2xl:w-[222px] 2xl:py-[22px] 2xl:text-lg 2xl:font-medium 
               3xl:w-[250px] 3xl:pl-[60px] 3xl:pr-[57px] "
            >
              {router.locale === `fr`
                ? `Ajouter des commodités`
                : " Add Amenities "}
            </a>
          </div>
          <div className="absolute bottom-5 right-5 w-[446px] py-[7px]">
            <a
              href=""
              className="border-r border-white-primary pr-5 text-base text-[#FFFFFF]"
            >
              {" "}
              +1 (228) 48 23 90 00
            </a>
            <a href="" className="ml-5 text-base text-[#FFFFFF]">
              reservation@lizetransport.com{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyTripsBanner;
