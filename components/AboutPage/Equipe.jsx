import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Equipe = () => {
  const router = useRouter();
  return (
    <div
      className="container mx-auto mt-20 flex flex-row flex-wrap items-center px-3
     lg:justify-between 2xl:mt-[200px] 2xl:flex-nowrap "
    >
      <div
        className="flex w-full flex-col font-bold
        lg:w-[297px]
        xl:w-[371px]
        2xl:w-[446px]
        3xl:w-[502px]"
      >
        <h6
          className="text-[18px] text-[#172066] 
          md:text-[22px] md:leading-7
         lg:mb-3 lg:text-[24px] lg:leading-[30px]
         xl:mb-3 xl:text-[26px] xl:leading-[36px]
         2xl:mb-4 2xl:text-[28px] 2xl:leading-[45px]
         3xl:mb-5 3xl:text-[30px] 3xl:leading-[51px] "
        >
          {router.locale === "fr" ? `Notre Equipe` : `Our team`}
        </h6>
        <h1
          className="text-[22px] text-[#0B0B0B] 
         md:text-[26px] md:leading-9
         lg:text-[32px] lg:leading-[45px]
         xl:text-[40px] xl:leading-[62px]
         2xl:text-[48px] 2xl:leading-[72px]
         3xl:text-[55px] 3xl:leading-[82px]"
        >
          {router.locale === "fr" ? `rencontrez le` : `meet the`}
          <span className="text-[#72ADD7]">
            {router.locale === "fr" ? ` membre génial` : ` awesome member`}
          </span>{" "}
          {router.locale === "fr" ? `de notre équipe.` : `of our team.`}
        </h1>
      </div>
      <div
        className="mt-5 flex flex-row flex-wrap justify-center 
       md:space-x-[16px] lg:space-x-[20px] 2xl:mt-0 2xl:space-x-[26px]"
      >
        <div className="mb-5 md:mb-0">
          <div
            className="relative h-[295px] w-[290px] overflow-hidden rounded-md
           md:h-[235px] md:w-[230px]
           lg:h-[199px] lg:w-[196px]
           xl:h-[247px] xl:w-[244px]
           2xl:h-[297px] 2xl:w-[293px]
           3xl:h-[335px] 3xl:w-[330px]"
          >
            <Image src="/abel.webp" layout="fill" objectFit="cover" alt="" />
          </div>
          <h3
            className="mt-1 text-[17px] 
           font-bold leading-[25px] text-[#3B3E44]
           md:text-[18px] md:leading-7
           lg:mt-2 lg:text-[20px] lg:leading-[30px]
           xl:text-[22px] xl:leading-[34px]
           2xl:mt-3 2xl:text-[26px] 2xl:leading-[38px]
           3xl:mt-4 3xl:text-[28px] 3xl:leading-[42px]"
          >
            Abel SAWADOGO
          </h3>
          <p
            className="text-[16px] font-normal text-[#3B3E44] 
           md:text-[17px] md:leading-7
           lg:text-[18px] lg:leading-[28px]
           xl:mt-1 xl:text-[20px] xl:leading-[30px]
           2xl:mt-2 2xl:text-[22px] 2xl:leading-[34px]
           3xl:mt-2.5 3xl:text-2xl 3xl:font-normal"
          >
            {router.locale === `fr` ? `CO-fondateur` : ` CO-Founder`}
          </p>
        </div>
        {/* 1 */}
        <div className="mb-5 md:mb-0">
          <div
            className="relative h-[295px] w-[290px] overflow-hidden rounded-md
           md:h-[235px] md:w-[230px]
           lg:h-[199px] lg:w-[196px]
           xl:h-[247px] xl:w-[244px]
           2xl:h-[297px] 2xl:w-[293px]
           3xl:h-[335px] 3xl:w-[330px]"
          >
            <Image src="/abel.webp" layout="fill" objectFit="cover" alt="" />
          </div>
          <h3
            className="mt-1 text-[17px] 
           font-bold leading-6 text-[#3B3E44]
           md:text-[18px] md:leading-7
           lg:mt-2 lg:text-[20px] lg:leading-[30px]
           xl:text-[22px] xl:leading-[34px]
           2xl:mt-3 2xl:text-[26px] 2xl:leading-[38px]
           3xl:mt-4 3xl:text-[28px] 3xl:leading-[42px]"
          >
            Salif OUEDRAOGO
          </h3>
          <p
            className="text-[16px] font-normal text-[#3B3E44] 
           md:text-[17px] md:leading-7
           lg:text-[18px] lg:leading-[28px]
           xl:mt-1 xl:text-[20px] xl:leading-[30px]
           2xl:mt-2 2xl:text-[22px] 2xl:leading-[34px]
           3xl:mt-2.5 3xl:text-2xl 3xl:font-normal"
          >
            {router.locale === `fr` ? `Fondateur` : `Founder`}
          </p>
        </div>
        {/* 2 */}
        <div className="mb-5 md:mb-0">
          <div
            className="relative h-[295px] w-[290px] overflow-hidden rounded-md
           md:h-[235px] md:w-[230px]
           lg:h-[199px] lg:w-[196px]
           xl:h-[247px] xl:w-[244px]
           2xl:h-[297px] 2xl:w-[293px]
           3xl:h-[335px] 3xl:w-[330px]"
          >
            <Image src="/abel.webp" layout="fill" objectFit="cover" alt="" />
          </div>
          <h3
            className="mt-1 text-[17px] 
           font-bold leading-[25px] text-[#3B3E44]
           md:text-[18px] md:leading-7
           lg:mt-2 lg:text-[20px] lg:leading-[30px]
           xl:text-[22px] xl:leading-[34px]
           2xl:mt-3 2xl:text-[26px] 2xl:leading-[38px]
           3xl:mt-4 3xl:text-[28px] 3xl:leading-[42px]"
          >
            Moussa DIARRA
          </h3>
          <p
            className="text-[16px] font-normal text-[#3B3E44] 
           md:text-[17px] md:leading-7
           lg:text-[18px] lg:leading-[28px]
           xl:mt-1 xl:text-[20px] xl:leading-[30px]
           2xl:mt-2 2xl:text-[22px] 2xl:leading-[34px]
           3xl:mt-2.5 3xl:text-2xl 3xl:font-normal"
          >
            CEO
          </p>
        </div>
        {/* 3 */}
      </div>
    </div>
  );
};

export default Equipe;
