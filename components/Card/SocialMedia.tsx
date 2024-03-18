import { useRouter } from "next/router";
import React from "react";

function SocialMedia() {
  const router = useRouter();
  return (
    <>
      <div
        style={{ backgroundImage: `url(../insta.png)` }}
        className="w-[380px] rounded-[10px] bg-cover bg-center bg-no-repeat 
         xl:w-[474px] 2xl:w-[568px] 3xl:w-[640px] "
      >
        <div className="flex h-full w-full flex-col justify-between rounded-[10px] bg-[#00000078] px-4 py-7 2xl:px-[26px] 3xl:px-[30px]">
          <div className="flex w-full flex-row justify-between pb-[14px]">
            <h3 className="py-1 text-2xl capitalize text-[#FFFFFF] ">
              {router.locale === `fr` ? `Des médias sociaux` : `Social Media`}
            </h3>
            <div className="flex w-[73px] flex-row justify-between">
              <a
                href=""
                className="h-[30px] w-[30px] rounded-full bg-[#ffffff30] text-center"
              >
                <i className="fa-solid fa-chevron-left pt-2 text-sm text-[#FFFFFF]"></i>
              </a>
              <a
                href=""
                className="h-[30px] w-[30px] rounded-full bg-[#ffffff30] text-center"
              >
                <i className="fa-solid fa-chevron-right pt-2 text-sm text-[#FFFFFF]"></i>
              </a>
            </div>
            {/* icon ends */}
          </div>
          {/* title area ends */}
          <div
            className="mt-5 flex w-[322px] flex-col justify-start 
           xl:w-[402px] 2xl:w-[483px] 3xl:w-[543px]"
          >
            <h3
              className="pb-[10px] font-poppins text-[24px] font-semibold capitalize leading-9 text-[#FFFFFF] xl:text-[26px] 
             2xl:text-[28px] 2xl:leading-[45px] 3xl:text-[30px]"
            >
              {router.locale === `fr`
                ? `Lorem Ipsum est simplement un texte factice`
                : `Lorem Ipsum is simply dummy text`}
            </h3>
            <p className="pb-[10px] font-poppins text-sm text-[#FFFFFF] xl:text-base">
              {router.locale === `fr`
                ? `Lorem Ipsum est simplement un faux texte de l'industrie de l'impression et de la composition. Le Lorem Ipsum est le texte factice standard de l'industrie depuis les années 1500, lorsqu'un imprimeur inconnu a pris une galère de caractères et l'a brouillé pour en faire un livre de spécimens de caractères.`
                : `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
            </p>
            <p className="pb-[10px] font-poppins text-sm text-[#FFFFFF] xl:text-base">
              {router.locale === `fr` ? `12 août 2022` : `12 August 2022`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
