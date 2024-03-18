import { useRouter } from "next/router";
import React from "react";

function Amenities() {
  let data: any = [
    {
      id: 1,
      image: "amenities01.webp",
      title: "Wifi Onboard",
      titleFr: "Wi-Fi à bord",
      description:
        "It is a matter of pride for Falcon 900DX that we have one of the best air charter safety records in the region  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
      descriptionFr:
        "C'est une question de fierté pour le Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
    },
    {
      id: 1,
      image: "amenities02.webp",
      title: "Wifi Onboard",
      titleFr: "Wi-Fi à bord",
      description:
        "It is a matter of pride for Falcon 900DX that we have one of the best air charter safety records in the region  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
      descriptionFr:
        "C'est une question de fierté pour le Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
    },
    {
      id: 1,
      image: "plane01.webp",
      title: "Wifi Onboard",
      titleFr: "Wi-Fi à bord",
      description:
        "It is a matter of pride for Falcon 900DX that we have one of the best air charter safety records in the region  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
      descriptionFr:
        "C'est une question de fierté pour le Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
    },
    {
      id: 1,
      image: "plane02.webp",
      title: "Wifi Onboard",
      titleFr: "Wi-Fi à bord",
      description:
        "It is a matter of pride for Falcon 900DX that we have one of the best air charter safety records in the region  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
      descriptionFr:
        "C'est une question de fierté pour le Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
    },
    {
      id: 1,
      image: "plane03.webp",
      title: "Wifi Onboard",
      titleFr: "Wi-Fi à bord",
      description:
        "It is a matter of pride for Falcon 900DX that we have one of the best air charter safety records in the region  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
      descriptionFr:
        "C'est une question de fierté pour le Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
    },
    {
      id: 1,
      image: "unsplash_cAsDwW9nDUg6.webp",
      title: "Wifi Onboard",
      titleFr: "Wi-Fi à bord",
      description:
        "It is a matter of pride for Falcon 900DX that we have one of the best air charter safety records in the region  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
      descriptionFr:
        "C'est une question de fierté pour le Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab quo eos similique quibusdam laboriosam aspernatur est ut illo quia earum beatae dolorum, natus voluptate, reprehenderit, sunt numquam id iusto amet. Ab facere itaque voluptatibus ea alias repellat dicta voluptates accusamus exercitationem asperiores, quos porro similique ipsam explicabo nemo doloribus.",
    },
  ];
  const router = useRouter();
  return (
    <section className="container mt-[100px] 2xl:mt-[200px]">
      <div className="flex w-full flex-col justify-start px-4 3xl:px-[70px]">
        <div
          className="flex w-full flex-col justify-start gap-4 
           md:relative md:flex-row md:justify-between md:gap-0 "
        >
          <div
            className=" w-full md:w-[540px] lg:w-[728px] 
           xl:w-[910px]  
           2xl:w-[1092px] 
           3xl:w-[1229px]"
          >
            <h3
              className="text-[24px] font-semibold capitalize leading-[25px] text-secondary
                lg:text-[26px] lg:leading-[35px]
                2xl:text-[30px] 3xl:text-[34px] "
            >
              {router.locale === "fr" ? `Agréments` : ` amenities`}
            </h3>
            <p
              className="mt-4 text-[18px] leading-[30px] line-clamp-1
                md:mt-5 xl:text-[20px] xl:leading-[35px]
                2xl:text-[22px] 2xl:leading-[45px]
                3xl:text-[24px]"
            >
              {router.locale === "fr"
                ? `C'est une question de fierté pour Falcon 900DX que nous ayons l'un des meilleurs dossiers de sécurité d'affrètement aérien de la région`
                : `It is a matter of pride for Falcon 900DX that we have one of the best air charter safety records in the region`}
            </p>
          </div>
          {/** 
          * Arrow Button
          * Will add with slider
          <div
            className="right-0 bottom-0 flex w-full flex-row justify-between 
            md:absolute md:w-[90px]
            lg:w-[100px]
            2xl:w-[140px]"
          >
            <div
              className="h-9 w-9 cursor-pointer rounded-full bg-white-primary pt-1.5 pl-3 drop-shadow-md
             md:h-10 md:w-10 md:p-3 md:pt-2.5
             lg:h-[45px] lg:w-[45px] lg:p-3.5 
             2xl:h-[60px] 2xl:w-[60px] 2xl:p-5"
            >
              <i className="fa-solid fa-chevron-left md:text-[20px] lg:text-[22px] 2xl:text-[24px]"></i>
            </div>
            <div
              className="h-9 w-9 cursor-pointer rounded-full bg-primary pt-1.5 pl-3 drop-shadow-md 
             md:h-10 md:w-10 md:p-3 md:pt-2.5
             lg:h-[45px] lg:w-[45px] lg:p-3.5 
             2xl:h-[60px] 2xl:w-[60px] 2xl:p-5 "
            >
              <i className="fa-solid fa-chevron-right text-white-primary md:text-[20px] lg:text-[22px] 2xl:text-[24px] "></i>
            </div>
          </div> */}
        </div>
        <div
          className="mt-4 flex w-full flex-row flex-wrap justify-center gap-[22px] 
           md:mt-8 md:gap-3
           lg:mt-8 lg:justify-start lg:gap-[22px]
           xl:mt-10 2xl:mt-12 3xl:mt-[50px] "
        >
          {data.map((e: any, i: any) => (
            <div
              key={i}
              className="relative  h-[420px] w-[360px] bg-primary bg-cover bg-center
               md:h-[298px] md:w-[236px]
               lg:h-[398px] lg:w-[315px]
               xl:h-[505px] xl:w-[400px]
               2xl:h-[614px] 2xl:w-[486px]
               3xl:h-[650px] 3xl:w-[514px]"
              style={{ backgroundImage: `url(${e?.image})` }}
            >
              <div
                className="absolute inset-x-0 bottom-5 mx-auto flex w-[90%] flex-col justify-center rounded-[10px] bg-black-primary/10 px-4 backdrop-blur-[17px] md:px-2
                lg:px-4 xl:px-6
                3xl:w-[475px] 3xl:px-[35px]"
              >
                <h3
                  className="mt-4 font-bold text-white-primary 
                  md:mt-3.5 md:text-[16px]
                  lg:mt-5 lg:text-[22px]
                  xl:mt-7 xl:text-[24px]
                  2xl:mt-9 2xl:text-[26px]
                  3xl:mt-[45px]"
                >
                  {router.locale === "fr" ? e?.titleFr : e?.title}
                </h3>
                <p
                  className="mt-[15px] mb-4 text-[11px] font-medium leading-5 text-white-primary line-clamp-3 
                  md:mt-2 md:mb-3.5 md:text-[12px] md:leading-6
                  lg:mt-[15px] lg:mb-5 lg:text-[15px] lg:leading-7
                  xl:mb-7 xl:text-[16px]
                  2xl:mb-10 2xl:text-[18px] "
                >
                  {router.locale === "fr" ? e?.descriptionFr : e?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
