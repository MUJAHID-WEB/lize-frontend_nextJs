import React, { useState, FC, createElement, useRef } from "react";
import { Calendar } from "react-iconly";
import moment from "moment";
import DatePicker, { CalendarContainer } from "react-datepicker";
import DateHeader from "./Dates/DateHeader";
import { useRouter } from "next/router";

const cityList = [
  "Las Vegas",
  "California",
  "Miami",
  "New York",
  "Michigan",
  "San andreas",
];

type cityProps = {
  label: string;
  initialValue: string;
  changedValue: (e: any) => void;
};

export const CityCard: FC<cityProps> = ({
  label,
  changedValue,
  initialValue,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const searchClick = useRef<HTMLInputElement>(null);

  const handleOutClick = () => {
    searchClick.current?.focus();
  };
  const router = useRouter();
  return (
    <div
      className={` relative w-[50%] rounded-[10px] border bg-white-primary p-5 lg:py-2.5 xl:w-[210px] 2xl:w-[265px] 2xl:p-5 3xl:w-[320px] ${
        active ? "border-primary" : "border-gray border-opacity-40"
      } `}
    >
      <button
        type="button"
        onClick={() => setActive(!active)}
        className="flex flex-col justify-center border-none p-0 "
      >
        <p className=" mb-3 flex py-[3px] text-[12px] font-bold capitalize md:text-[13px] lg:text-[14px] lg:font-bold xl:text-[16px]">
          {label}
        </p>
        <p
          className={`text-left text-[11px] font-medium capitalize md:text-[12px] lg:text-[14px] lg:font-medium xl:text-[16px] ${
            initialValue ? "text-primary" : "text-gray"
          }  `}
        >
          {initialValue ||
            (router.locale === `fr`
              ? `Entrez le nom de votre ville`
              : "Enter your city name")}
        </p>
      </button>
      {active && (
        <div className="absolute inset-x-0 top-full z-50 flex w-[340px] flex-col items-start justify-start rounded-xl bg-white-primary shadow-lg ">
          <div
            className={`mx-6 mt-4 mb-1 flex w-[291px] cursor-text flex-row items-center justify-start gap-3 rounded-[10px] border border-gray/20 bg-white-primary px-4 py-3`}
            onClick={handleOutClick}
          >
            <i
              className="fa-solid fa-magnifying-glass cursor-text "
              onClick={handleOutClick}
            />
            <input
              ref={searchClick}
              type="text"
              placeholder={"Enter your city name"}
              className="w-full border-0 bg-white-primary p-px capitalize text-primary focus:ring-0 "
            />
          </div>
          {cityList.map((v: any, id: any) => (
            <p
              key={id}
              onClick={() => {
                changedValue(v.toLowerCase());
                setActive(false);
              }}
              className="w-full cursor-pointer border-b border-gray/20 py-4 px-6 last:border-transparent hover:bg-gray/10 "
            >
              {v}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

type dateProps = {
  label: string;
  inputId: string;
  updateCb: (e: any) => any;
  initialValue: Date | null;
  minDate?: Date | null;
};

export const DateCard: FC<dateProps> = ({
  label,
  inputId,
  updateCb,
  initialValue,
  minDate = null,
}) => {
  const dates = new Date("2022-12-30");
  const [active, setActive] = useState<boolean>(false);

  const dateInputField = ({
    value,
    onClick,
    ...rest
  }: {
    value: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }) => (
    <button
      type="button"
      onClick={(event) => {
        onClick(event);
        setActive(true);
      }}
      {...rest}
    >
      <p className="text-base font-medium text-gray ">{value || "-"}</p>
    </button>
  );

  const MyContainer: FC<any> = ({ className, children }) => {
    return (
      <>
        <CalendarContainer
          className={`${className} flex flex-col items-start justify-start border-0 bg-white-primary p-5 shadow-xl `}
        >
          <div className="relative bg-white-primary ">{children}</div>
          <div className="my-5 flex w-full flex-row justify-between ">
            <p className="text-sm capitalize text-primary">
              <i className="fa-solid fa-circle"></i> available
            </p>
            <p className="text-sm capitalize text-red">
              <i className="fa-solid fa-circle"></i> not available
            </p>
          </div>
          <div className="flex w-full flex-row justify-end gap-4 ">
            <button
              className="btn-white-primary py-2 px-5 capitalize "
              type="button"
              onClick={() => {
                updateCb(null);
                setActive(false);
              }}
            >
              cancel
            </button>
            <button
              className="btn-primary rounded py-2 px-5 capitalize "
              type="button"
              onClick={() => setActive(false)}
            >
              apply
            </button>
          </div>
        </CalendarContainer>
      </>
    );
  };

  return (
    <div
      className={`flex w-full flex-col justify-center rounded-[10px] border bg-white-primary p-5 
       md:w-[22%] md:px-2 
       lg:w-[23%] lg:p-2.5
       lg:px-1 xl:w-[21%] 
       2xl:w-[31%] 2xl:p-5 2xl:px-4
       3xl:px-5 ${
         active ? "border-primary" : "border-gray border-opacity-40"
       } `}
    >
      <label
        className=" mb-3 flex items-center justify-start py-[3px] text-[12px] font-bold capitalize text-black-secondary md:text-[13px] lg:text-[14px] xl:text-[16px]"
        htmlFor={inputId}
      >
        <Calendar set="broken" primaryColor="#3B3E44" />
        {label}
      </label>
      <DatePicker
        selected={initialValue}
        onChange={(date: any) => {
          updateCb(date);
        }}
        open={active}
        onClickOutside={() => setActive(false)}
        shouldCloseOnSelect={false}
        customInput={createElement(dateInputField)}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) =>
          DateHeader({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          })
        }
        // dateFormat='d MMMM / hh:mm aa'
        dateFormat="d MMMM"
        className="flex w-full justify-start"
        dayClassName={(date) => "flex-row"}
        excludeDates={[dates]} // the lis of unavailable Dates
        minDate={minDate}
        calendarContainer={MyContainer}
      />
    </div>
  );
};
