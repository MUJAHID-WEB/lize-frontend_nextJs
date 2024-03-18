import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Notre = () => {
  const router = useRouter();
  const [historyData, setHistoryData] = useState();
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/history`);
      console.log(res.data.history);
      setHistoryData(res.data.history);
    })();
  }, []);
  return (
    <div
      className="container mx-auto mt-14 flex flex-row flex-wrap items-center justify-center px-3 md:max-w-[1728px] md:gap-3
      lg:mt-28 lg:flex-nowrap lg:gap-0 
      3xl:mt-[200px] 3xl:px-[130px]"
    >
      <div
        className="left mb-5 w-full 
       md:mb-0  md:w-[49%] 
       lg:h-[198px] lg:w-[396px]
       xl:h-[248px] xl:w-[496px]
       2xl:h-[296px] 2xl:w-[590px]
       3xl:h-[333px] 3xl:w-[664px]"
      >
        <h1
          className="text-[20px] font-bold 
         text-[#172066] 
         md:text-[22px]
         lg:text-[26px] xl:text-[32px]
         2xl:text-[36px] 3xl:text-[44px] "
        >
          {router.locale === "fr" ? historyData?.titleFr : historyData?.titleEn}
        </h1>
        <p
          className="mt-4 text-justify text-[12px] font-normal leading-6 text-[#0E0E2C99]
         md:text-[13px] md:leading-7
         lg:text-[14px] lg:leading-[30px]
         xl:text-[18px] xl:leading-[34px]
         2xl:text-[21px] 2xl:leading-[40px]
         3xl:text-[24px] 3xl:leading-[48px]"
        >
          {router.locale === "fr"
            ? historyData?.detailsFr
            : historyData?.detailsEn}
        </p>
      </div>
      {/* right side  */}
      <div
        className="right history relative h-[260px] w-full overflow-hidden 
         rounded-br-[100px] sm:h-[300px]
         sm:w-[75%] md:h-64
         md:w-[42%] lg:ml-6 lg:h-[272px] lg:w-[418px] 
         lg:rounded-br-[118px] xl:ml-[30px] xl:h-[340px] xl:w-[524px] 
         xl:rounded-br-[148px] 2xl:ml-9 2xl:h-[410px] 2xl:w-[628px]
         2xl:rounded-br-[178px] 3xl:ml-10 3xl:h-[460px] 3xl:w-[706px] 3xl:rounded-br-[200px]"
      >
        <Image
          src={historyData?.image}
          layout="fill"
          objectFit="cover"
          className=" "
          alt={"asd"}
        />
      </div>
    </div>
  );
};

export default Notre;
