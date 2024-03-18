import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
let data: any = [
  {
    id: 1,
    image: "/28mouss.webp",
    title: "comfort",
    titleFr: "confort",
    description:
      "We clean up messy coding. Streamlining solutions that align with your objectives.",
    descriptionFr:
      "Nous nettoyons le codage désordonné. Des solutions rationalisées qui correspondent à vos objectifs.",
  },
  {
    id: 1,
    image: "/28mouss.webp",
    title: "LUX  ",
    titleFr: "LUX",
    description:
      "We clean up messy coding. Streamlining solutions that align with your objectives.",
    descriptionFr:
      "Nous nettoyons le codage désordonné. Des solutions rationalisées qui correspondent à vos objectifs.",
  },
  {
    id: 1,
    image: "/28mouss.webp",
    title: "Security",
    titleFr: "Sécurité",
    description:
      "We clean up messy coding. Streamlining solutions that align with your objectives.",
    descriptionFr:
      "Nous nettoyons le codage désordonné. Des solutions rationalisées qui correspondent à vos objectifs.",
  },
];

function Experience() {
  const [experience, setExperience] = useState<any>([]);

  useEffect(() => {
    setExperience(data);
  }, []);
  const router = useRouter();
  return (
    <section className="container mt-12 lg:mt-20 2xl:mt-32 3xl:mt-[144px]">
      <div className="flex flex-col ">
        <p
          className="w-[600px] pl-3 text-[24px] leading-[28px] text-secondary 
         md:pl-6 md:text-[30px] md:leading-[30px]
         lg:pl-8 lg:text-[40px] lg:leading-[35px]
         2xl:pl-16"
        >
          {router.locale === "fr" ? "L'expérience LTI" : "The LTI experience"}
        </p>
        <div className="mt-8 flex w-full flex-row flex-wrap md:mt-12 lg:mt-20 2xl:mt-32 3xl:mt-[130px]">
          {experience.map((e: any, i: any) => (
            <div
              key={i}
              className="flex w-full flex-col flex-wrap items-center justify-center py-10 first:pl-0 third:pr-0 fourth:pl-0
              md:w-1/3 md:py-0 3xl:px-[9px]  "
            >
              <div
                className="group relative h-[220px] w-[220px]  rounded-full transition-all hover:cursor-pointer
              md:h-44 md:w-44
              lg:h-56 lg:w-56 
              xl:h-[261px] xl:w-[261px] 
              2xl:h-[314px] 2xl:w-[314px] 
              3xl:h-[353px] 3xl:w-[353px]"
              >
                {i == 1 ? (
                  <>
                    <div
                      className=" absolute inset-0 z-20 h-full w-full scale-[1.4] rounded-full bg-cover bg-fixed transition-all duration-700 group-hover:rotate-[360deg] "
                      style={{ backgroundImage: `url('./dashed-border.svg')` }}
                    />
                    <div
                      className="absolute -top-[18px] z-30 h-6 w-6 rounded-full
                      bg-primary 
                       md:-top-6 md:h-8 md:w-8
                       lg:-top-7 lg:h-10 lg:w-10
                       xl:-top-8 xl:h-11 xl:w-11
                       3xl:-top-8 3xl:h-[50px] 3xl:w-[50px] "
                    />
                    <div className="absolute inset-0 z-30 h-full w-full scale-[1.12] rounded-full bg-[#E3EFF7]" />
                    <div className="absolute inset-0 z-40 h-full w-full scale-105 rounded-full bg-primary" />
                  </>
                ) : (
                  <>
                    <div className=" absolute inset-0 z-20 h-full w-full scale-[1.3] rounded-full bg-[#E8E9F0]" />
                    <div className=" absolute inset-0 z-30 h-full w-full scale-[1.12] rounded-full bg-[#BEC1D4]" />
                    <div className=" absolute inset-0 z-40 h-full w-full scale-105 rounded-full bg-secondary" />{" "}
                  </>
                )}
                <div className="relative z-50 h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={e?.image}
                    alt="logo"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p
                className="mt-12 text-center text-[14px] font-semibold capitalize
               md:mt-9 md:text-[18px] lg:mt-14 lg:text-[22px] 2xl:mt-[87px] 2xl:text-[26px]"
              >
                {router.locale === "fr" ? e?.titleFr : e?.title}
              </p>
              <p
                className="px-2 text-center text-[12px] 
               md:text-[12px] 
               lg:text-[14px]
               xl:text-[16px]
               2xl:text-[18px] "
              >
                {router.locale === "fr" ? e?.descriptionFr : e?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
