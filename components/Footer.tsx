import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const [state, setState] = useState<any>();
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/social`);
      setState(res.data.socialLinks);
    })();
  }, []);
  return (
    <footer
      className="mt-14 bg-black-secondary
      lg:mt-[70px]
     xl:mt-[110px]
     2xl:mt-[126px]
     3xl:mt-[200px]"
    >
      <div className="container flex w-full flex-col items-center">
        <div className="relative mt-[67px] h-[70px] w-[271px] ">
          <Image
            src="/logo-secondary.svg"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="mt-[38px] w-full px-3 font-montserrat text-[16px] leading-[20px] text-[#84878B] lg:w-[936px] lg:px-0">
          {}
          {router.locale === "fr" ? state?.description : state?.description}
        </p>

        <div className="mt-[29px] flex flex-row justify-center gap-[20px]">
          <a
            href={state?.facebookLink}
            className="flex h-[50px] w-[50px]   items-center justify-center rounded-full  bg-[#84878B] text-white-primary"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href={state?.twitterLink}
            className="flex h-[50px] w-[50px]   items-center justify-center rounded-full  bg-[#84878B] text-white-primary"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href={state?.youtubeLink}
            className="flex h-[50px] w-[50px]   items-center justify-center rounded-full  bg-[#84878B] text-white-primary"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href={state?.instagramLink}
            className="flex h-[50px] w-[50px]   items-center justify-center rounded-full  bg-[#84878B] text-white-primary"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div
          className="mt-10 flex flex-row flex-wrap justify-start gap-6 pl-3 font-montserrat
         lg:pl-0 2xl:mt-[91px] 2xl:justify-between 2xl:gap-[120px] "
        >
          <div className="flex flex-row gap-[14px]">
            <div className="flex h-[50px] w-[50px]   items-center justify-center rounded-full  bg-[#84878B] text-white-primary">
              <i className="fa-solid fa-phone-volume -rotate-45"></i>
            </div>
            <div className="flex flex-col justify-start gap-[2px]">
              <p className="text-[#84878B]">Tel</p>
              <p className="font-montserrat text-white-primary ">
                {state?.phoneNumber}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-[14px]">
            <div className="flex h-[50px] w-[50px]   items-center justify-center rounded-full  bg-[#84878B] text-white-primary">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="flex flex-col justify-start gap-[2px]">
              <p className="capitalize text-[#84878B]">mail</p>
              <p className="font-montserrat text-white-primary ">
                {state?.email}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-[14px]">
            <div className="flex h-[50px] w-[50px]   items-center justify-center rounded-full  bg-[#84878B] text-white-primary">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="flex flex-col justify-start gap-[2px]">
              <p className="capitalize text-[#84878B]">Address</p>
              <p className="font-montserrat text-white-primary ">
                {state?.officeLocation}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-[14px]">
            <div className="flex h-[50px] w-[50px]   items-center justify-center rounded-full  bg-[#84878B] text-white-primary">
              <i className="fa-solid fa-print"></i>
            </div>
            <div className="flex flex-col justify-start gap-[2px]">
              <p className="capitalize text-[#84878B]">fax</p>
              <p className="font-montserrat text-white-primary ">
                {state?.faxNumber}
              </p>
            </div>
          </div>
        </div>
        <div
          className="mt-10 mb-5 flex w-full flex-row flex-wrap justify-start px-3 
         text-white-primary md:justify-between lg:mt-[76px] lg:mb-0 "
        >
          <div
            className="mb-5 flex w-1/3 flex-row flex-wrap justify-start gap-4 
            md:w-[54%] lg:mb-[38px] lg:w-[40%] lg:justify-evenly xl:w-1/3 xl:gap-0"
          >
            <Link
              href="/"
              className="font-montserrat text-[16px] font-normal capitalize leading-[20px] text-[#84878B]"
            >
              {router.locale === "fr" ? "domicile" : "home"}
            </Link>
            <Link
              href=""
              className="font-montserrat text-[16px] font-normal capitalize leading-[20px] text-[#84878B]"
            >
              {router.locale === "fr" ? "Avions" : "planes"}
            </Link>
            <Link
              href=""
              className="font-montserrat text-[16px] font-normal capitalize leading-[20px] text-[#84878B]"
            >
              {router.locale === "fr" ? "Prestations de service" : "Services"}
            </Link>
            <Link
              href=""
              className="font-montserrat text-[16px] font-normal capitalize leading-[20px] text-[#84878B]"
            >
              {router.locale === "fr" ? "Agréments" : "Amenites"}
            </Link>
            <Link
              href=""
              className="font-montserrat text-[16px] font-normal capitalize leading-[20px] text-[#84878B]"
            >
              {router.locale === "fr" ? "Contactez-nous" : "Contact Us"}
            </Link>
          </div>
          <div className="font-montserrat text-[16px] font-normal capitalize leading-[20px] text-[#84878B]">
            © 2000-2021,{" "}
            {router.locale === "fr"
              ? " domicileTous les droits sont réservés"
              : " All Rights Reserved"}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
