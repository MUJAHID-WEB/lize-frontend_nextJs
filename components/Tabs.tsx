import { useRouter } from "next/router";
import React, { FC, Fragment, memo, useEffect, useState } from "react";

export type contentProps = {
  tabTitle: string;
  tabTitleFr?: string;
  tabComponent: any;
  buttonText?: string;
  buttonAction?: () => void;
  queryUrl?: string;
}[];
export type tabsProps = {
  heading?: string;
  tabContent: contentProps;
};

const Tabs: FC<tabsProps> = ({ heading, tabContent }) => {
  const router = useRouter();
  const { tabTitle } = tabContent[0];
  const [activeTab, setActiveTab] = useState<string>(tabTitle);
  const [hasButton, setHasButton] = useState<boolean>(
    Boolean(tabContent[0].buttonAction && tabContent[0].buttonText)
  );

  useEffect(() => {
    if (tabContent[0].queryUrl) {
      router.push(tabContent[0].queryUrl, undefined, {
        shallow: true,
      });
    }
    tabContent.map((v) => {
      if (v.tabTitle === activeTab && v.buttonAction && v.buttonText) {
        setHasButton(true);
      } else {
        setHasButton(false);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className=" flex w-full flex-col rounded-xl bg-white-primary py-5 px-[30px]">
      <div
        className={`flex w-full flex-row  ${
          heading || hasButton ? "justify-between" : "justify-end"
        }  items-center pl-[10px]`}
      >
        {heading && (
          <h3 className="text-2xl capitalize text-secondary ">{heading}</h3>
        )}
        {tabContent.map((v, i) => {
          if (v.tabTitle === activeTab && v.buttonAction) {
            return (
              <button
                key={i}
                onClick={() => v.buttonAction && v.buttonAction()}
                className="btn-primary p-[17px]"
              >
                {v.buttonText}
              </button>
            );
          }
        })}
      </div>
      <div className="flex w-full flex-col">
        <div className=" flex w-full items-center justify-start gap-6 border-b border-tertiary ">
          {tabContent?.map((value: any, id: any) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(value.tabTitle);
                if (value.queryUrl) {
                  router.push(value.queryUrl);
                }
              }}
              className={`text-base leading-5 xl:text-lg ${
                value.tabTitle === activeTab
                  ? "border-b-secondary font-medium text-secondary"
                  : "border-b-transparent font-normal text-gray"
              }  border-b py-3 capitalize `}
            >
              {router.locale === "fr" ? value.tabTitleFr : value.tabTitle}
            </button>
          ))}
        </div>
        <div className="flex w-full items-start justify-start">
          {tabContent.map((v: any, id: any) => (
            <Fragment key={id}>
              {v.tabTitle === activeTab && v.tabComponent}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Tabs);
