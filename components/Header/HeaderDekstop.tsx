import auth from "config/auth";
import AppContext from "context/AppContext";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect, useState } from "react";
import { successMessage } from "utils/tostMsg";

type headerProps = {
  scrollable?: boolean;
  headerType?: "primary" | "secondary";
};

const HeaderDesktop: FC<headerProps> = ({
  scrollable = false,
  headerType = "primary",
}) => {
  const [logo, setLogo] = useState<any>();
  const router = useRouter();
  const [headPosition, setHeadPosition] = useState<boolean>(false);
  const { state, setIsLoggedIn, setToken, setUser } = useContext(AppContext);
  const { isLoggedIn, user, avionRef, serviceRef } = state;

  const logout = async () => {
    auth.logout();
    setIsLoggedIn(false);
    setToken("");
    setUser({});
    successMessage("User Logged out successfully");
  };
  useEffect(() => {
    /* Update the Header each time there's a scroll */
    if (scrollable) {
      const handleScroll = (event: any) => {
        const yScroll = window.scrollY;
        if (yScroll > 1000) {
          setHeadPosition(true);
        } else {
          setHeadPosition(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollable]);
  const menuItems = [
    {
      url: "/",
      title: router.locale === "fr" ? "Accueil" : "Welcome",
    },
    {
      btnAction: () => {
        avionRef && avionRef.scrollIntoView();
      },
      title: router.locale === "fr" ? "Avions" : "Planes",
    },
    {
      btnAction: () => {
        serviceRef && serviceRef.scrollIntoView();
      },
      title: "Services",
    },
    {
      url: "/about-us",
      title: router.locale === "fr" ? "Qui Somme Nous" : "Who are we",
    },
    {
      url: "/contact-us",
      title: router.locale === "fr" ? "Contactez-Nous" : "Contact Us",
    },
  ];
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/brand`);
      console.log(
        "🚀 ~ file: HeaderMobile.tsx:86 ~ res.data.brand:",
        res.data.brand
      );
      setLogo(res.data.brand);
    })();
  }, []);

  return (
    <header
      className={` inset-x-0 top-0 z-[150] hidden transition lg:block ${
        headPosition || headerType === "secondary"
          ? "mainHeader fixed bg-white-primary"
          : "absolute bg-secondary bg-opacity-40 backdrop-blur-sm"
      } `}
    >
      <div className="container flex flex-row items-center justify-between md:max-w-[99vw] lg:max-w-[98vw] xl:py-5 2xl:py-7 ">
        <Link href="/">
          <a className="relative h-[70px] md:w-24 lg:w-40 xl:w-56 3xl:w-[271px] ">
            <Image
              src={
                headPosition || headerType === "secondary"
                  ? logo?.primaryLogo
                  : logo?.secondaryLogo
              }
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
        <ul className="flex flex-row items-center justify-start font-montserrat">
          {menuItems.map((value: any, id: any) => (
            <li className="" key={id}>
              {value.url ? (
                <Link href={value.url}>
                  <a
                    className={` flex text-center font-medium transition-all duration-300 focus:pointer-events-auto hover:font-bold 
                    md:mx-1 md:px-px md:text-[13px]
                    lg:mx-1.5 lg:px-px lg:text-sm xl:mx-2.5 xl:px-0 xl:text-base 2xl:mx-[21px] 2xl:px-1 3xl:text-[20px] 3xl:leading-[30px] ${
                      headPosition || headerType === "secondary"
                        ? "text-gray hover:text-black-primary"
                        : "text-white-primary/50 hover:text-white-primary "
                    } ${
                      router.pathname === value.url &&
                      (headPosition || headerType === "secondary")
                        ? "font-semibold text-black-primary"
                        : router.pathname === value.url &&
                          (headPosition || headerType === "primary")
                        ? "font-semibold text-white-primary"
                        : ""
                    } `}
                  >
                    {value.title}
                  </a>
                </Link>
              ) : (
                <button
                  onClick={() => value.btnAction()}
                  className={` flex text-center font-medium transition-all duration-300 focus:pointer-events-auto hover:font-bold md:mx-1 md:px-px md:text-[13px] lg:mx-2 lg:px-px lg:text-sm xl:mx-3 xl:px-0 xl:text-base 2xl:mx-[21px] 2xl:px-1 3xl:text-[20px] 3xl:leading-[30px] ${
                    headPosition || headerType === "secondary"
                      ? "text-gray hover:text-black-primary"
                      : "text-white-primary/50 hover:text-white-primary "
                  } ${
                    router.pathname === value.url &&
                    (headPosition || headerType === "secondary")
                      ? "font-semibold text-black-primary"
                      : router.pathname === value.url &&
                        (headPosition || headerType === "primary")
                      ? "font-semibold text-white-primary"
                      : ""
                  } `}
                >
                  {value.title}
                </button>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex flex-row items-center justify-start font-montserrat">
          <li className="">
            {isLoggedIn ? (
              <Link href={`/${user._id}/dashboard`}>
                <a
                  className={`lg:mx-2 lg:p-2 xl:mx-4 xl:px-3 3xl:mx-[21px] 3xl:px-[29px] 3xl:py-5 ${
                    headPosition || headerType === "secondary"
                      ? "btn-secondary"
                      : "btn-white-secondary"
                  } `}
                >
                  {router.locale === "fr" ? "Tableau de bord" : "Dashboard"}
                </a>
              </Link>
            ) : (
              <Link href="/sign-in">
                <a
                  className={`${
                    headPosition || headerType === "secondary"
                      ? "btn-secondary"
                      : "btn-white-secondary"
                  } md:mx-1 md:p-1 md:text-[12px] lg:mx-2 lg:p-2 lg:text-sm xl:mx-4 xl:px-3 xl:text-base 3xl:mx-[21px] 3xl:px-[29px] 3xl:py-5  `}
                >
                  {router.locale === "fr"
                    ? `S'inscrire / s'identifier`
                    : `Sign-up / sign-in`}
                </a>
              </Link>
            )}
          </li>

          <li className="">
            <Link href="/reservation">
              <a
                className={`g:text-sm md:mx-1 md:p-1 md:text-[12px] lg:mx-2 lg:p-2 xl:mx-4 xl:px-3 xl:text-base 3xl:mx-[21px] 3xl:px-[29px] 3xl:py-5 ${
                  headPosition || headerType === "secondary"
                    ? "btn-primary"
                    : "btn-white-primary"
                } `}
              >
                {router.locale === "fr"
                  ? "Faire une réservation"
                  : "Make a Booking"}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderDesktop;
