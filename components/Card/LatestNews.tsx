import { useRouter } from "next/router";
import React from "react";

function LatestNews() {
  const router = useRouter();
  return (
    <div
      className="flex w-[417px] flex-col justify-between rounded-[10px] bg-[#ffffff] px-4 py-7 
       xl:w-[521px] 2xl:w-[626px] 2xl:px-[26px] 3xl:w-[704px] 3xl:px-[30px]"
    >
      <div className="flex w-full flex-row justify-between pb-[14px]">
        <h3 className="py-1 text-2xl capitalize text-[#172066] ">
          {router.locale === `fr` ? `Dernières nouvelles` : `Latest News`}
        </h3>
        <div className="flex w-[73px] flex-row justify-between">
          <a
            href=""
            className="h-[30px] w-[30px] rounded-full bg-[#84878b38] text-center"
          >
            <i className="fa-solid fa-chevron-left pt-2 text-sm text-[#84878B]"></i>
          </a>
          <a
            href=""
            className="h-[30px] w-[30px] rounded-full bg-[#84878b38] text-center"
          >
            <i className="fa-solid fa-chevron-right pt-2 text-sm text-[#84878B]"></i>
          </a>
        </div>
        {/* icon ends */}
      </div>
      {/* title ends */}
      <div
        style={{ backgroundImage: `url(../news.webp)` }}
        className="h-[184px] w-[381px] rounded-[10px]
         xl:h-[230px] xl:w-[477px]
         2xl:h-[276px] 2xl:w-[572px]
         3xl:h-[311px] 3xl:w-[644px]  "
      >
        <div className="h-full w-full rounded-[10px] bg-[#00000078]"></div>
      </div>
      {/* image area ends */}
      <div
        className="mt-5 flex w-[322px] flex-col justify-start 
       xl:w-[402px] 2xl:w-[483px] 3xl:w-[543px]"
      >
        <h3
          className="pb-[10px] font-poppins text-[24px] font-semibold capitalize leading-9 text-[#3B3E44] xl:text-[26px] 
         2xl:text-[28px] 2xl:leading-[45px] 3xl:text-[30px]"
        >
          {router.locale === `fr` ? `Communiqué de presse` : `Press Release`}
        </h3>
        <p className="pb-[10px] font-poppins text-sm text-[#84878B] xl:text-base">
          {router.locale === `fr`
            ? `Lorem Ipsum est simplement un faux texte de l'industrie de l'impression et de la composition. Le Lorem Ipsum est le texte factice standard de l'industrie depuis les années 1500, lorsqu'un imprimeur inconnu a pris une galère de caractères et l'a brouillé pour en faire un livre de spécimens de caractères.`
            : `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        </p>
        <p className="pb-[10px] font-poppins text-sm text-[#84878B] xl:text-base">
          {router.locale === `fr` ? `12 août 2022` : `12 August 2022`}
        </p>
      </div>
    </div>
  );
}

export default LatestNews;
