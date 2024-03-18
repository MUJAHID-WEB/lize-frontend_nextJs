import react, { useRef, useEffect, useContext, useState } from "react";
import Image from "next/image";
import axios from "axios";
import ServiceStart from "../svg/ServicesStart";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";

function Service() {
  const [serviceData, setServiceData] = useState<any>();
  const sectionRef = useRef(null);
  const { setServiceRef } = useContext(AppContext);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }
    setServiceRef(sectionRef.current);
  }, [setServiceRef]);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/services`);
      console.log(res.data.service);
      setServiceData(res.data.service);
    })();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="container mt-5 md:mt-12 lg:mt-[70px] xl:mt-[110px] 2xl:mt-[126px] 3xl:mt-[190px]"
    >
      <div
        className="flex w-full flex-row flex-wrap justify-between 
        lg:gap-8 lg:px-3
        xl:gap-10 2xl:gap-12 
        3xl:gap-[52px]"
      >
        <div
          className="relative ml-10 flex w-full flex-col pr-1
          md:ml-14 md:w-[380px] md:pr-2
          lg:ml-[76px] lg:mt-6 lg:w-[450px] lg:pr-0
          xl:mt-14 xl:w-[580px]
          2xl:ml-[70px] 2xl:mt-24 2xl:w-[700px]
          3xl:ml-[87px] 3xl:mt-[135px] 3xl:w-[763px]"
        >
          <div className="absolute  -left-12 w-[174px] lg:left-[-87px] 3xl:left-[-87px]">
            <ServiceStart classes="fill-primary/20 hover:stroke-primary hover:stroke-2 hover:rotate-180 " />
          </div>
          <h3
            className=" z-10 mt-[57px] text-[24px] font-bold capitalize leading-[60px] text-primary
            md:text-[30px] md:leading-[60px]
            lg:text-[50px] lg:leading-[80px]
            xl:text-[55px] xl:leading-[85px]
            3xl:text-[60px] 3xl:leading-[90px]"
          >
            {router.locale === "fr"
              ? serviceData?.titleFr
              : serviceData?.titleEn}
          </h3>
          <p
            className="mt-12 w-full pr-4 text-[12px] leading-6 line-clamp-2
           md:mt-[38px] md:pr-0 md:text-[13px] md:leading-[28px]
           lg:text-[15px] lg:leading-[32px]
           xl:text-[20px] xl:leading-[36px]
           2xl:text-[22px] 2xl:leading-[40px]
           3xl:text-[24px] 3xl:leading-[44px]"
          >
            {router.locale === "fr"
              ? "Des services complets pour satisfaire les besoins de notre clientèle et adaptés aux réalités du continent Africain."
              : "Complete services to meet the needs of our customers and adapted to the realities of the African continent."}
            {/* {router.locale === "fr"
              ? serviceData?.detailsFr
              : serviceData?.detailsEn} */}
          </p>
          <p
            className="mt-5 w-[91%] text-[12px] leading-6 line-clamp-4
            md:w-full md:text-[13px] md:leading-[28px]
            lg:w-[96%] lg:text-[15px] lg:leading-[32px]
            xl:w-[97%] xl:text-[20px] xl:leading-[36px]
            2xl:w-[91%] 2xl:text-[22px] 2xl:leading-[40px]
            3xl:text-[24px] 3xl:leading-[44px]"
          >
            {router.locale === "fr"
              ? `Les services de Lize Transport International sont destinés aux
            Etats, aux gouvernements, aux hommes d'affaires, aux organismes
            internationaux et tout autres personnes désireuses d'effectuer un
            vol privé.`
              : `English The services of Lize Transport International are intended for States, governments, businessmen, international organizations and all other persons wishing to carry out a private flight.`}
          </p>
        </div>
        <div
          className="relative h-[420px] w-full items-baseline justify-start 
         md:h-[345px] md:w-[332px]
         lg:h-[438px] lg:w-[442px] 
         xl:h-[554px] xl:w-[560px]
         2xl:h-[662px] 2xl:w-[674px]
         3xl:h-[767px] 3xl:w-[773px]"
        >
          <div
            className="absolute top-28 left-1 z-30 h-[220px] w-[165px] overflow-hidden rounded-[50px] border-[3px] 
           border-white-primary 
           md:top-28 md:h-[215px] md:w-[162px] md:border-4 
           lg:top-[138px] lg:h-[286px] lg:w-[215px] lg:border-8
           xl:top-[176px] xl:h-[357px] xl:w-[269px] 
           2xl:top-[216px] 2xl:h-[428px] 2xl:w-[322px]
           3xl:h-[484px] 3xl:w-[364px] "
          >
            <Image
              src={serviceData?.imageOne}
              alt="planes"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="experience-shadow absolute left-16 z-20 h-[265px] w-[200px] overflow-hidden rounded-[50px]
           border-[3px] border-white-primary 
           md:left-16 md:h-[248px] md:w-[187px] md:border-4
           lg:left-[93px] lg:h-[326px] lg:w-[246px] lg:border-8
           xl:left-[117px] xl:h-[407px] xl:w-[307px] 
           2xl:left-[140px] 2xl:h-[488px] 2xl:w-[368px]
           3xl:left-[156px] 3xl:h-[560px] 3xl:w-[422px]"
          >
            <Image
              src={serviceData?.imageTwo}
              alt="planes"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="absolute left-[190px] top-36 z-10  h-[220px] w-[165px] overflow-hidden rounded-[50px] border-[3px] border-white-primary 
           md:left-[180px] md:top-36 md:h-[200px] md:w-[151px] md:border-4
           lg:left-[243px] lg:top-[180px] lg:h-[264px] lg:w-[200px] lg:border-8
           xl:left-[310px] xl:top-[227px] xl:h-[330px] xl:w-[250px]
           2xl:left-[377px] 2xl:top-[267px] 2xl:h-[397px] 2xl:w-[300px] 
           3xl:left-[443px] 3xl:top-[317px] 3xl:h-[450px] 3xl:w-[340px]"
          >
            <Image
              src={serviceData?.imageThree}
              alt="planes"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
