import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <section className="flex min-h-[100vh] min-w-[100vw] flex-col justify-start md:flex-row">
      <div
        className="min-h-full w-full bg-cover bg-no-repeat md:w-7/12"
        style={{ backgroundImage: `url(./auth-bg.webp)` }}
      >
        <div className="flex h-full w-full flex-col items-start justify-between bg-black-primary/40 py-[23px] px-3 lg:px-5 xl:px-10 ">
          <Link href="/">
            <a className="flex items-center justify-start gap-4 text-2xl capitalize text-white-primary">
              <i className="fa-solid fa-circle-chevron-left" />
              <p className="text-[12.5px] leading-normal md:text-[14.5px] lg:text-[17px] xl:text-[20px] 2xl:text-[24px] ">
                {router.locale === `fr` ? `Domicile` : `Home`}
              </p>
            </a>
          </Link>
          <div className="mt-5  flex flex-col items-start justify-start">
            <div
              className="relative h-9 w-[150px] 
             md:h-[46px] md:w-[180px]
             lg:h-[54px] lg:w-[210px]
             xl:h-[66px] xl:w-[260px]
             2xl:h-[80px] 2xl:w-[310px]
             3xl:h-[90px] 3xl:w-[350px]"
            >
              <Image
                src="/logo-secondary.svg"
                objectFit="contain"
                layout="fill"
                alt="Lize Transport Logo"
              />
            </div>
            <div className="my-5 w-full md:mb-9 md:w-3/4 lg:mb-14 xl:mb-[77px] ">
              <p
                className="text-[20px] font-bold text-white-primary
                md:text-[28px] md:leading-[40px]
                lg:text-[36px] lg:leading-[55px]
                xl:text-[40px] xl:leading-[70px]
                2xl:text-[50px] 2xl:leading-[90px] 
                3xl:text-[64px] 3xl:leading-[102px] "
              >
                {router.locale === `fr` ? `Faire votre ` : `Make your `}{" "}
                <span
                  className="font-creattion text-[34px] font-normal
                   md:text-[50px] md:leading-[55px]
                   lg:text-[72px] lg:leading-[80px]
                   xl:text-[80px] xl:leading-[100px]
                   2xl:text-[100px] 2xl:leading-[120px] 
                   3xl:text-[135px] 3xl:leading-[160px] "
                >
                  {" "}
                  {router.locale === `fr` ? `mémorable ` : `memorable `} <br />
                </span>{" "}
                {router.locale === `fr`
                  ? `Voyagez maintenant avec un processus simple et rapide`
                  : `Trip now with easy & fast process`}
              </p>
            </div>
            <div
              className="flex flex-row justify-start gap-3 text-[12px] capitalize text-white-primary 
             md:gap-5 md:text-[13px] 
             lg:gap-6 lg:text-[15px]  xl:text-[16px] 
             2xl:gap-[30px] 2xl:text-[18px] "
            >
              <Link href="/">
                <a className="">
                  {router.locale === `fr`
                    ? `Politique de confidentialité`
                    : `Privacy Policy`}
                </a>
              </Link>
              <Link href="/">
                <a className="">
                  {" "}
                  {router.locale === `fr`
                    ? `termes et conditions`
                    : `terms & conditions`}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col flex-wrap items-start justify-start px-3 py-12 md:w-5/12 xl:px-5 2xl:pl-12 2xl:pr-[69px] ">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
