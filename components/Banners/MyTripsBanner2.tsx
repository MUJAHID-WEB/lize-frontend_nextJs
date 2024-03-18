import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function MyTripsBanner2() {
  const router = useRouter();
  return (
    <>
      <div className="relative mt-5 flex w-full flex-row justify-between rounded-[10px] bg-[#ffffff] ">
        <div className="my-[54px] ml-10 flex w-[634px] flex-col justify-start ">
          <h3 className="mb-5 font-poppins text-[40px] font-semibold leading-[70px] text-[#000000]">
            {router.locale === `fr`
              ? `Nous sommes là pour vous aider à rendre votre voyage agréable.`
              : `We are here to help make your trip enjoyable.`}
          </h3>
          <p className="mb-[71px] font-poppins text-2xl font-normal text-[#84878B]">
            {router.locale === `fr`
              ? `Vous pouvez toujours ajouter à vos réservations des équipements.`
              : `You can always add to your reservations Amenities.`}
          </p>
          <a
            href=""
            className="w-64 rounded-[10px] bg-[#72ADD7] px-[60px] py-[22px] text-lg font-medium text-[#ffffff] "
          >
            {router.locale === `fr`
              ? `Ajouter des commodités`
              : " Add Amenities "}
          </a>
        </div>
        <div className="flex w-[765px] flex-row justify-between pb-[17px] pl-[9px]">
          <div className="h-[308px] w-[233px] rounded-bl-[200px] rounded-br-[200px] bg-[#EDF2F6] ">
            <div className="absolute mx-2 h-[295px] w-[215px]">
              <Image
                src="/tips.webp"
                alt="asd"
                layout="fill"
                objectFit="contain"
                className="rounded-bl-[100px] rounded-br-[100px]"
              />
            </div>
          </div>
          <div className="h-[308px] w-[233px] rounded-bl-[200px] rounded-br-[200px] bg-[#EDF2F6] ">
            <div className="absolute mx-2 h-[295px] w-[215px]">
              <Image
                src="/tips2.webp"
                alt="asd"
                layout="fill"
                objectFit="contain"
                className="rounded-bl-[100px] rounded-br-[100px]"
              />
            </div>
          </div>
          <div className="h-[308px] w-[265px] rounded-bl-[110px] rounded-tl-[90px] bg-[#EDF2F6]">
            <div className="absolute ml-[13px] h-[295px]  w-[252px]">
              <Image
                src="/tips3.webp"
                alt="asd"
                layout="fill"
                objectFit="contain"
                className="rounded-bl-[100px] rounded-tl-[100px] rounded-tr-[10px]"
              />
            </div>
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

export default MyTripsBanner2;
