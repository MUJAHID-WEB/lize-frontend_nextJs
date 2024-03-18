import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function MyTripsBanner3() {
  const router = useRouter();
  return (
    <>
      <div className="relative mt-5 flex w-full flex-row justify-between rounded-[10px] bg-[#ffffff] ">
        <div className="ml-10 mt-[52px] mb-[42px] flex w-[634px] flex-col justify-start ">
          <h3 className="mb-[17px] font-poppins text-[40px] font-semibold leading-[52px] text-[#000000]">
            {router.locale === `fr`
              ? `Réservez un voyage aujourd'hui`
              : `Book a Trip today`}
          </h3>
          <p className="mb-[49px] font-poppins text-2xl font-normal text-[#84878B]">
            {router.locale === `fr`
              ? `Faites une réservation maintenant et profitez de votre voyage avec nous`
              : `Make a Booking now and enjoy your trip with us.`}
          </p>
          <a
            href=""
            className="w-64 rounded-[10px] bg-[#72ADD7] px-20 py-[22px] text-lg font-medium text-[#ffffff] "
          >
            {router.locale === `fr` ? `Reserve maintenant` : " Book Now "}
          </a>
        </div>
        <div className="h-[236px] w-[558px]  rounded-bl-[500px] bg-[#EDF2F6]">
          <div className="absolute ml-[22px] h-[212px] w-[536px]">
            <Image
              src="/plane07.webp"
              alt="asd"
              layout="fill"
              objectFit="cover"
              className="rounded-bl-[500px]"
            />
          </div>
        </div>
        <div className="absolute bottom-5 right-5 w-[446px] py-[7px] ">
          <a
            href=""
            className="border-r border-black-primary pr-5 text-base text-[#000000]"
          >
            +1 (228) 48 23 90 00
          </a>
          <a href="" className="ml-5 text-base text-[#000000]">
            reservation@lizetransport.com
          </a>
        </div>
      </div>
    </>
  );
}

export default MyTripsBanner3;
