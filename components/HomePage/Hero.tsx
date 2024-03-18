import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const [banner, setBanner] = useState<any>();
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/banner/`);
      console.log(res.data.banner);
      setBanner(res.data.banner);
    })();
  }, []);
  return (
    <section
      className="heroGradient py-10 px-3
     md:px-0 md:pt-24 md:pb-16
     lg:pt-[130px] 
     xl:pt-[164px] 
     2xl:pt-[195px] 
     3xl:pt-[220px] 3xl:pb-[214px] "
    >
      <div className="flex flex-col flex-wrap items-start justify-start py-7 md:flex-row">
        <div
          className=" relative z-10 flex h-[300px] w-full
          md:mt-16 md:h-[210px] md:w-[430px]
          lg:mt-20 lg:h-[350px] lg:w-[520px]
          xl:h-[400px] xl:w-[680px]
          2xl:mt-24 2xl:h-[420px] 2xl:w-[876px]
          3xl:mt-[108px] 3xl:h-[472px] 3xl:w-[986px] "
        >
          <Image
            src={banner?.coverImage[0]}
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="relative flex w-full flex-col pl-14 
         md:w-[338px] md:pl-0 lg:w-[500px] xl:w-[600px] 2xl:w-[610px] 3xl:w-[687px]"
        >
          <div
            className="absolute left-1 top-4 h-12 w-12 
           md:top-6 md:-left-[70px] md:h-16 md:w-16 
           lg:-left-28 lg:h-[100px] lg:w-[100px]
           xl:top-10 xl:-left-32 xl:h-[116px] xl:w-[120px]
           2xl:top-[50px] 2xl:-left-[147px]"
          >
            <Image src="/frame.svg" alt="" layout="fill" objectFit="contain" />
          </div>
          <p
            className="pr-16 text-[22px] font-extrabold text-white-primary
           md:pr-0 md:text-[34px] md:leading-[50px] 
           lg:text-[50px] lg:leading-[70px] 
           xl:text-[60px] xl:leading-[90px] 
           2xl:text-[65px] 2xl:leading-[90px] 
           3xl:text-[70px] 3xl:leading-[108px] "
          >
            {router.locale === "fr" ? banner?.titleFr : banner?.titleEn}
          </p>
          <p
            className="mt-6 text-[12px] leading-6 text-white-primary 
           md:mt-6 md:text-[14px] md:leading-7
           lg:mt-7 lg:text-[19px] lg:leading-9 
           xl:mt-[35px] xl:text-[23px] 
           3xl:text-[26px]   "
          >
            {router.locale === "fr" ? banner?.detailsFr : banner?.detailsEn}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
