import auth from "@/config/auth";
import { successMessage } from "@/utils/tostMsg";
import { Menu, Transition } from "@headlessui/react";
import AppContext from "context/AppContext";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect, useState, Fragment } from "react";

type headerProps = {
  scrollable?: boolean;
  headerType?: "primary" | "secondary";
};

const HeaderMobile: FC<headerProps> = ({
  scrollable = false,
  headerType = "primary",
}) => {
  const [logo, setLogo] = useState<any>();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
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
      className={`z-[90] block w-full px-4 lg:hidden ${
        headPosition || headerType === "secondary"
          ? "fixed top-0 bg-white-primary shadow-md"
          : "absolute bg-secondary bg-opacity-40 backdrop-blur-sm"
      }`}
    >
      <div className="container flex flex-row items-center justify-between py-3">
        <Link href="/">
          <a className="relative h-[30px] w-32 ">
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

        <Menu as="div" className="relative inline-block bg-transparent">
          <Menu.Button
            className={`focus-visible:ring-white relative flex w-full flex-col items-center justify-center gap-1 rounded-xl
            ${
              headPosition || headerType === "secondary"
                ? "bg-gray"
                : "bg-white-secondary bg-opacity-20 "
            }
            px-2 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 hover:bg-opacity-30`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span
              className={`h-0.5 w-5 rounded-md bg-white-primary md:h-1 md:w-7 ${
                showMenu
                  ? "translate-y-1.5 rotate-45 md:translate-y-[8px]  "
                  : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-md bg-white-primary md:h-1 md:w-7 ${
                showMenu ? "scale-0" : "scale-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-md bg-white-primary md:h-1 md:w-7 ${
                showMenu
                  ? "-translate-y-1.5 -rotate-45 md:-translate-y-[8px]"
                  : "translate-y-0 rotate-0"
              }`}
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform translate-x-[224px] opacity-0 scale-95"
            enterTo="transform opacity-100 -translate-x-0 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 -translate-x-0 scale-100"
            leaveTo="transform opacity-0 translate-x-[224px] scale-95"
          >
            <Menu.Items className="divide-gray-100 bg-white ring-black absolute -right-4 z-[99] mt-2 w-56 origin-top-right divide-y rounded-md bg-white-primary shadow-lg ring-1 ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {menuItems.map((value: any, id: any) => (
                  <Menu.Item key={id}>
                    {value.url ? (
                      <Link href={value.url}>
                        <a
                          className={` mx-2 my-5 flex px-2 text-center text-[12px] font-medium leading-5 text-gray transition-all duration-300 focus:pointer-events-auto hover:font-bold hover:text-black-primary md:text-sm  ${
                            router.pathname === value.url
                              ? "font-semibold text-black-primary"
                              : "font-semibold text-white-primary"
                          } `}
                        >
                          {value.title}
                        </a>
                      </Link>
                    ) : (
                      <button
                        onClick={() => value.btnAction()}
                        className={` mx-2 my-5 flex px-2 text-center text-sm font-medium text-gray transition-all duration-300 focus:pointer-events-auto hover:font-bold hover:text-black-primary ${
                          router.pathname === value.url
                            ? "font-semibold text-black-primary"
                            : "font-semibold text-white-primary"
                        } `}
                      >
                        {value.title}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
              <div className="flex w-full flex-row flex-wrap justify-center gap-5 py-3 px-1">
                <Menu.Item>
                  {isLoggedIn ? (
                    <Link href={`/${user._id}/dashboard`}>
                      <a
                        className={`${
                          headPosition || headerType === "secondary"
                            ? "btn-secondary"
                            : "btn-white-secondary"
                        } px-2 py-1`}
                      >
                        {router.locale === "fr"
                          ? "Tableau de bord"
                          : "Dashboard"}
                      </a>
                    </Link>
                  ) : (
                    <Link href="/sign-in">
                      <a
                        className={`${
                          headPosition || headerType === "secondary"
                            ? "btn-secondary"
                            : "btn-white-secondary"
                        } px-2 py-1`}
                      >
                        {router.locale === "fr"
                          ? `S'inscrire / s'identifier`
                          : `Sign-up / sign-in`}
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  <Link href="/reservation">
                    <a
                      className={`text-sm ${
                        headPosition || headerType === "secondary"
                          ? "btn-primary"
                          : "btn-white-primary"
                      } px-2 py-1 `}
                    >
                      {router.locale === "fr"
                        ? "Faire une réservation"
                        : "Make a Booking"}
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default HeaderMobile;
