import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Show, Hide, Calendar, Upload } from "react-iconly";
import FormValidator from "./validation/FormValidator";

interface textProps {
  label?: string;
  inputType: string;
  identifier: string;
  groupClass?: string;
  labelClass?: string;
  inputClass?: string;
  placeholder?: string;
  onchange: (e: any) => void;
  error?: any;
  value?: string;
}

/**
 * # Base Inputs
 * Input Field For Text and Email Fields
 * @interface textProps
 *
 * Required props:
 * InputType
 * identifier
 *
 * Optional Props:
 *
 * Label, className
 *
 */

const BaseInput: FC<textProps> = ({
  inputType = "text",
  label = "",
  identifier,
  groupClass,
  inputClass,
  labelClass,
  placeholder,
  value,
  onchange,
  error,
}) => {
  const router = useRouter();
  if (!placeholder) {
    placeholder = router.locale === "en" ? "Type Your Text Here" : "";
  }

  return (
    <div
      className={` flex w-full flex-col items-start justify-start gap-1.5 
       md:gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-[14px] ${groupClass} `}
    >
      {label && (
        <label
          htmlFor={identifier}
          className={` text-[12px] font-semibold capitalize leading-[21px] text-black-secondary 
          md:text-[13px] md:leading-5 
          lg:text-[16px] lg:leading-7 
          xl:text-[18px] 
          2xl:text-[20px] 2xl:leading-[30px] ${labelClass} `}
        >
          {label}
        </label>
      )}
      <input
        onChange={(e) => onchange(e)}
        type={inputType}
        id={identifier}
        name={identifier}
        placeholder={placeholder}
        value={value}
        className={` w-full rounded-[10px] border border-secondary/20 px-2 py-2 text-[11px] font-normal text-secondary placeholder:font-normal placeholder:capitalize focus:border-primary focus:!ring-primary
         md:px-2 md:py-2 md:text-[12px]
         lg:px-2.5 lg:py-3 lg:text-[15px]
         xl:px-3 xl:py-3.5 xl:text-[17px]
         2xl:px-[14px] 2xl:py-4 2xl:text-lg  ${inputClass}`}
      />
      <FormValidator message={error?.[identifier]} />
    </div>
  );
};

export default BaseInput;

interface passwordProps {
  label?: string;
  showPassword: boolean;
  identifier: string;
  groupClass?: string;
  labelClass?: string;
  inputClass?: string;
  placeholder?: string;
  onchange: (e: any) => void;
}

export const PasswordInput: FC<passwordProps> = ({
  showPassword = false,
  label = "",
  identifier,
  groupClass,
  labelClass,
  inputClass,
  placeholder = "********",
  onchange,
}) => {
  const [visible, setVisible] = useState<boolean>(showPassword);
  return (
    <div
      className={` flex w-full flex-col items-start justify-start gap-[14px] ${groupClass} `}
    >
      <label
        htmlFor={identifier}
        className={` text-[12px] font-semibold capitalize leading-[30px] text-black-secondary md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ${labelClass} `}
      >
        {label}
      </label>
      <div className=" relative flex w-full">
        <input
          onChange={(e) => onchange(e)}
          type={visible ? "password" : "text"}
          id={identifier}
          name={identifier}
          placeholder={placeholder}
          className={` w-full rounded-[10px] border border-secondary/20 py-4  px-2 text-lg text-[11px] font-normal  text-secondary placeholder:text-sm placeholder:font-normal placeholder:capitalize focus:border-primary  focus:!ring-primary 
         md:px-2 md:py-2 md:text-[12px]
         lg:px-2.5 lg:py-3 lg:text-[15px]
         xl:px-3 xl:py-3.5 xl:text-[17px]
         2xl:px-[14px] 2xl:py-4 2xl:text-lg ${inputClass}`}
        />
        <button
          type="button"
          className=" absolute inset-y-0 right-[18px] "
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <Hide set="light" primaryColor="#172066" />
          ) : (
            <Show set="light" primaryColor="#172066 " />
          )}
        </button>
      </div>
    </div>
  );
};

interface searchProps {
  label?: string;
  identifier: string;
  groupClass?: string;
  labelClass?: string;
  inputClass?: string;
  placeholder?: string;
}

export const SearchBar: FC<searchProps> = ({
  label = "",
  identifier = "searchBox",
  groupClass = "",
  labelClass = "",
  inputClass = "",
  placeholder = "search here",
}) => {
  const searchClick = useRef<HTMLInputElement>(null);

  const handleOutClick = () => {
    searchClick.current?.focus();
  };

  return (
    <div className={`pl-[85px] ${groupClass}`}>
      {label && (
        <label htmlFor={identifier} className={` ${labelClass}`}>
          {label}
        </label>
      )}
      <div
        className={`flex min-w-[370px] cursor-text flex-row items-center justify-start rounded-[40px] bg-tertiary px-7 py-3 ${inputClass}`}
        onClick={handleOutClick}
      >
        <input
          ref={searchClick}
          type="text"
          id={identifier}
          name={identifier}
          placeholder={placeholder}
          className="w-full border-0 bg-tertiary p-px capitalize focus:ring-0"
        />
        <i
          className="fa-solid fa-magnifying-glass cursor-text "
          onClick={handleOutClick}
        />
      </div>
    </div>
  );
};

interface dateProps {
  label: string;
  groupClass?: string;
  labelClass?: string;
  date: any;
  selectedDate: (e: Date) => void;
  identifier: string;
  error: any;
}

export const DateInput: FC<dateProps> = ({
  labelClass = "",
  groupClass = "",
  label,
  date,
  selectedDate,
  error,
  identifier,
}) => {
  const dateInput = ({
    value,
    onClick,
    ...rest
  }: {
    value: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }) => (
    <button type="button" onClick={onClick} {...rest}>
      <p className="text-base font-medium text-gray ">
        {value || "YY/MM/DD" || "-"}
      </p>
      <Calendar set="broken" primaryColor="#3B3E44" />
    </button>
  );
  return (
    <div
      className={` flex w-full flex-col items-start justify-start gap-[14px] ${groupClass} `}
    >
      <label
        className={` text-[12px] font-semibold capitalize leading-[30px] text-black-secondary md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ${labelClass} `}
      >
        {label}
      </label>
      <DatePicker
        selected={date}
        onChange={(date: any) => selectedDate(date)}
        customInput={React.createElement(dateInput)}
        dateFormat="yyyy-MM-d "
        className="flex w-full items-center justify-between rounded-[10px] border border-[#dcdcdc] p-5 "
      />
      <FormValidator message={error?.[identifier]} />
    </div>
  );
};

type selectProps = {
  label: string;
  groupClass?: string;
  labelClass?: string;
  initialValue: any;
  updatedValue: (e: any) => void;
  options: string[];
  identifier: string;
  error: any;
};

export const SelectInput: FC<selectProps> = ({
  label,
  groupClass = "",
  labelClass = "",
  initialValue,
  updatedValue,
  options,
  identifier,
  error,
}) => {
  return (
    <div
      className={` flex w-full flex-col items-start justify-start gap-[14px] ${groupClass} `}
    >
      <label
        className={` text-[12px] font-semibold capitalize leading-[30px] text-black-secondary md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ${labelClass} `}
      >
        {label}
      </label>
      <select
        name={identifier}
        value={initialValue}
        onChange={(e) => updatedValue(e)}
        className="flex w-full items-center justify-between rounded-[10px] border border-[#dcdcdc] px-5 py-4 focus:border-[#dcdcdc] focus:ring-0  "
      >
        {options.map((v: string, id: any) => (
          <option key={id} value={v} className="capitalize">
            {v}
          </option>
        ))}
      </select>
      <FormValidator message={error?.[identifier]} />
    </div>
  );
};

type fileProps = {
  label: string;
  groupClass?: string;
  labelClass?: string;
  initialValue: any;
  updatedValue: (e: any) => void;
  error?: string;
};

export const FileInput: FC<fileProps> = ({
  label,
  labelClass,
  groupClass,
  updatedValue,
  initialValue,
  error,
}) => {
  const router = useRouter();
  const maxFileSizeInBytes = 500000;
  const [files, setFiles] = useState<any>({});

  //   '🚀 ~ file: Base.tsx ~ line 285 ~ files',
  //   Object.keys(files).length
  // );

  const addNewFiles = (newFiles: any) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const convertNestedObjectToArray = (nestedObj: any) =>
    Object.keys(nestedObj).map((key) => nestedObj[key]);

  const callUpdateFilesCb = (files: any) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updatedValue(filesAsArray);
  };

  const handleNewFileUpload = (e: any) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName: any) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };
  return (
    <div
      className={` flex w-full flex-col items-start justify-start gap-[14px] ${groupClass} `}
    >
      <label
        className={` text-[12px] font-semibold capitalize leading-[30px] text-black-secondary md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ${labelClass} `}
      >
        {label}
      </label>
      {Object.keys(files).length > 0 ? (
        <div className="flex w-full flex-row flex-wrap justify-start gap-3 ">
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <div
                className="group relative flex h-24 w-24 rounded-xl bg-gray/30 transition duration-100 "
                key={index}
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 h-5 w-5 items-center justify-center rounded-md bg-white-primary text-base text-red opacity-0 transition duration-100 group-hover:opacity-100 hover:scale-110 "
                  onClick={() => removeFile(fileName)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            );
          })}
          <div className=" relative flex h-24 w-24 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-primary">
            <input
              type="file"
              className=" absolute inset-0 cursor-pointer opacity-0 "
              onChange={handleNewFileUpload}
              multiple
            />

            <Upload set="two-tone" primaryColor="#72ADD7" />
          </div>
        </div>
      ) : (
        <>
          <div className="relative mb-1 flex justify-start gap-4 border border-dashed border-primary py-10 px-[66px]">
            <input
              type="file"
              className=" absolute inset-0 cursor-pointer opacity-0 "
              onChange={handleNewFileUpload}
              multiple
            />
            <Upload set="two-tone" primaryColor="#72ADD7" />
            <p className="text-sm font-medium capitalize text-primary ">
              {router.locale === "fr"
                ? "télécharger un document"
                : "upload document"}
            </p>
          </div>
          <FormValidator message={error} />
        </>
      )}
    </div>
  );
};

interface dropdownProps {
  textOnly?: boolean;
  icondropDown?: string;
  icon?: string;
  badgeNumber?: string;
  badgeBG?: string;
  flagged?: string;
  flagTitle?: string;
  avatar?: string;
  userName?: string;
  userEmail?: string;
  position?: string;
  isUser?: boolean;
  dropdownContent?: {
    title?: string;
    bordered?: string;
    fetchValue?: () => void;
    linkedComponent?: boolean;
    items: {
      grouped: {
        groupTitle?: string;
        groupData: {
          title: string;
          icon?: string;
          flag?: string;
          avatar?: string;
          description?: string;
          linkedTo?: string;
          time?: string;
        }[];
      }[];
    }[];
  };
  content?: {
    text?: string;
    url?: string;
    action?: () => void;
  }[];
}

/**
 * # Dropdowns
 * Core Component
 * Be Cautious before changing the conditions and funtionalities
 * Nested Components:
 * LanguageDropdown
 * BadgeDropdown
 * ProfileDropdown
 * FlightDropdown
 * PassengerDropdown
 */

export const Dropdowns: FC<dropdownProps> = ({
  textOnly = false,
  avatar = "/avatar.png",
  userName,
  userEmail,
  icondropDown,
  badgeNumber,
  flagged,
  badgeBG = "#72ADD7",
  flagTitle,
  isUser = false,
  position = "left",
  content = [
    {
      text: "title",
      url: "text",
    },
  ],
}) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const dropDown = useRef<HTMLDivElement>(null);
  const flagClass = `fi-${flagged}`;

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (dropDown.current && !dropDown.current.contains(event.target)) {
        setShowPopUp(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDown]);

  return (
    <div className="relative flex items-center justify-center" ref={dropDown}>
      <button
        type="button"
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        className="relative z-10 flex flex-row items-center justify-end gap-4 "
      >
        {textOnly && (
          <p className="text-lg font-bold capitalize text-black-secondary ">
            {textOnly}
          </p>
        )}
        {flagged && (
          <>
            <span className={`fib h-5 w-9 ${flagClass} `} />
            <p className="text-sm capitalize text-black-secondary ">
              {flagTitle}
            </p>
          </>
        )}

        {isUser && (
          <>
            <div className="flex flex-col justify-end text-right ">
              <h6 className=" text-base font-medium capitalize text-[#273240]">
                {userName}
              </h6>
              <p className="text-sm text-gray">{userEmail}</p>
            </div>
            <div className="relative h-[52px] w-[52px] overflow-hidden rounded-full ">
              <Image
                src={avatar}
                alt="avatar"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </>
        )}
        {icondropDown && (
          <div className="relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-tertiary text-gray ">
            <i className={`fa-solid ${icondropDown} text-xl `} />
            {badgeNumber && (
              <div
                className="absolute -top-1 -right-1 flex h-[26px] w-[26px] items-center justify-center rounded-full border-4 border-tertiary text-[12px] font-bold leading-[18px] text-white-primary"
                style={{
                  backgroundColor: badgeBG,
                }}
              >
                {badgeNumber}
              </div>
            )}
          </div>
        )}
        {!icondropDown && (
          <i
            className={`fa-solid fa-chevron-down mx-px text-lg text-black-secondary `}
          />
        )}
      </button>
      <div
        className={`dropdown absolute top-[100%] z-30 flex-col rounded bg-white-primary p-5 ${
          showPopUp ? "flex" : "hidden"
        } ${
          position === "left"
            ? "left-0"
            : position === "middle"
            ? "left-1/2"
            : position === "right"
            ? "right-0"
            : ""
        } `}
      >
        {content.map(
          (value: any, id: any) =>
            value.url && (
              <Link key={id} href={value.url}>
                <a className="px-5 py-2">{value.text}</a>
              </Link>
            )
        )}
      </div>
    </div>
  );
};
