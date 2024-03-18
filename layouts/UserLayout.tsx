import AppContext from "context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import {
  LanguageDropDown,
  MessageDropdown,
  NotificationDropdown,
  UserDropDown,
} from "@/components/DropDowns";
import { messages } from "@/utils/dummyData";
import getProfile from "@/utils/getProfile";
import { pages } from "@/utils/statics";

export type msgsType = {
  username: string;
  url: string;
  avatar: string;
  time: Date;
  opened: boolean;
  message: string;
};

type titleObj = {
  titleEn: string;
  titleFr: string;
};

const UserLayout = ({
  children,
  title,
  breadcumb,
}: {
  children: ReactNode;
  title: titleObj;
  breadcumb: { link: string; text: string; textFr?: string };
}) => {
  const router = useRouter();
  const { query, locales, locale: activeLocale } = router;
  const [profile, setProfile]: any = useState();

  const [msgList, setMsgList] = useState<msgsType[]>([
    {
      username: "",
      avatar: "",
      url: "",
      time: new Date(),
      opened: false,
      message: "",
    },
  ]);

  const { userId } = query;
  const value = useContext(AppContext);
  const { state } = value;

  useEffect(() => {
    // getProfile();
    (async () => {
      try {
        const profile = await getProfile(state.token);
        setProfile(profile);
      } catch (error) {}
    })();
    document.body.classList.add("bg-tertiary");
    return () => {
      document.body.classList.remove("bg-tertiary");
    };
  }, [state]);

  useEffect(() => {
    const msgdata = messages.sort((a, b) => {
      if (a.time < b.time) {
        return 1;
      }
      return -1;
    });
    setMsgList(msgdata);
  }, []);

  return (
    <>
      <header className="dashboardHeader flex w-screen justify-between bg-white-primary py-[13px] px-6 ">
        <div className="flex justify-start pl-5">
          <Link href={"/"}>
            <a className="relative mr-1 h-14 w-52">
              <Image
                src="/logo-primary.svg"
                alt=""
                objectFit="contain"
                layout="fill"
              />
            </a>
          </Link>
          {/* <SearchBar
            identifier='search'
            placeholder={router.locale === `fr` ? `cherche ici` : 'search here'}
          /> */}
        </div>
        <div className=" flex justify-end gap-[30px] ">
          <LanguageDropDown initialValue={activeLocale} content={locales} />
          <NotificationDropdown badgeNumber="5" />
          <MessageDropdown content={msgList} />
          <UserDropDown
            userName={`${profile?.firstName} ${
              profile?.middleName ? profile?.middleName : ""
            } ${profile?.lastName}`}
            userEmail={profile?.email}
            avatar={profile?.avatar || `/defaultProfile.png`}
            url={userId}
          />
        </div>
      </header>
      <div className="flex flex-row justify-start bg-white-primary">
        <div className="flex w-1/6 flex-col gap-[50px] py-[50px] pl-1.5 xl:pl-[10px]">
          {pages.map((value: any, id: any) => (
            <Link key={id} href={`/${userId}/${value.url}`}>
              <a
                className={` group relative flex items-center justify-between p-2.5 text-sm font-medium capitalize hover:w-[100.5%] hover:rounded-l-full hover:bg-tertiary hover:text-secondary xl:pr-4 xl:text-base 2xl:pr-5 ${
                  router.pathname === `/[userId]/${value.url}`
                    ? "w-[100.6%] rounded-l-full bg-tertiary text-secondary"
                    : "w-full text-gray "
                }  `}
              >
                <span
                  className={`layoutShadow bg-white absolute -top-5 right-0 h-5 w-5 rounded-br-xl bg-transparent group-hover:block ${
                    router.pathname === `/[userId]/${value.url}`
                      ? "block"
                      : "hidden"
                  } `}
                />
                <span
                  className={`layoutInvertedShadow absolute -bottom-5 right-0 h-5 w-5 rounded-tr-xl bg-transparent  group-hover:block ${
                    router.pathname === `/[userId]/${value.url}`
                      ? "block"
                      : "hidden"
                  } `}
                />
                <span className="flex items-center justify-start">
                  <div
                    className={`flex h-[30px] w-[30px] items-center justify-center group-hover:rounded-full group-hover:bg-secondary
                     lg:h-10 lg:w-10 lg:p-2.5 
                     xl:h-[50px] xl:w-[50px] xl:p-3 ${
                       router.pathname === `/[userId]/${value.url}`
                         ? "rounded-full bg-secondary"
                         : ""
                     } `}
                  >
                    {value.icon(
                      router.pathname === `/[userId]/${value.url}`
                        ? "fill-white-primary"
                        : "group-hover:fill-white-primary"
                    )}
                  </div>
                  <p className="lg:pl-1 xl:pl-4 2xl:pl-5">
                    {router.locale === `fr` ? value.textFr : value.text}
                  </p>
                </span>
                <i className="fa-solid fa-angle-right " />
              </a>
            </Link>
          ))}
        </div>
        <div className="ml-px flex min-h-screen w-5/6 flex-col items-start justify-start rounded-tl-xl bg-tertiary py-14 px-5 ">
          <h4 className="mb-1 text-3xl capitalize text-secondary">
            {activeLocale === "fr" ? title.titleFr : title.titleEn}
          </h4>
          <div className="mb-7 flex flex-row items-center justify-start gap-1 text-base capitalize text-gray ">
            <Link href={`/${userId}/dashboard`}>
              <a>{router.locale === `fr` ? `domicile` : `home`}</a>
            </Link>
            /
            <Link href={`/${userId}/${breadcumb.link}`}>
              <a>
                {router.locale === `fr` ? breadcumb.textFr : breadcumb.text}
              </a>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default UserLayout;
