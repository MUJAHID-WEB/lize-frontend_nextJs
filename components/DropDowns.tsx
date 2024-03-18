import { msgsType } from '@/layouts/UserLayout';
import auth from 'config/auth';
import AppContext from 'context/AppContext';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Edit, Logout, Setting } from 'react-iconly';
import { successMessage } from 'utils/tostMsg';
import { passengerLimit, planeData } from './MakeReservation';

interface badgeProps {
  badgeNumber?: string;
}
interface msgProps extends badgeProps {
  content: msgsType[];
}

export const MessageDropdown: FC<msgProps> = ({ badgeNumber, content }) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const dropDown = useRef<HTMLDivElement>(null);

  const today = new Date();

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropDown]);

  return (
    <div className='relative flex items-center justify-center' ref={dropDown}>
      <button
        type='button'
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        className='relative z-10 flex flex-row items-center justify-end gap-4 '
      >
        <div className='relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-tertiary text-gray '>
          <i className='fa-solid fa-comment-dots text-xl'></i>
          {badgeNumber && (
            <div className='absolute -top-1 -right-1 flex h-[26px] w-[26px] items-center justify-center rounded-full border-4 border-tertiary bg-secondary text-[12px] font-bold leading-[18px] text-white-primary '>
              {badgeNumber}
            </div>
          )}
        </div>
      </button>
      <div
        className={`dropdown absolute top-[100%] z-30 w-[394px] flex-col rounded bg-white-primary py-5 ${
          showPopUp ? 'flex' : 'hidden'
        } `}
      >
        <h4 className='mb-4 px-5 text-lg text-[20px] capitalize text-secondary '>
          messages
        </h4>
        <div className='flex max-h-[340px] w-full flex-col overflow-y-scroll '>
          {/* Map here */}
          {content.map((v: msgsType, id: any) => (
            // <Link href={`/messages/${v.url}`} key={id}>
            <Link href={`/`} key={id}>
              <a className='flex w-full flex-row items-start justify-start border-b border-white-tertiary p-5 hover:bg-white-tertiary '>
                <div className='relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-secondary/10 '>
                  <Image
                    src={v.avatar || '/avatar.png'}
                    layout='fill'
                    objectFit='contain'
                    alt='avatar'
                  />
                </div>
                <div className='flex w-[298px] flex-1 flex-col pl-[10px] '>
                  <div className='flex flex-row justify-between'>
                    <h5 className='text-base font-semibold text-secondary '>
                      {v.username}
                    </h5>
                    <h6 className='text-sm font-medium text-secondary '>
                      {today.toDateString() === v.time.toDateString()
                        ? moment(v.time).format('LT')
                        : moment(v.time).format('MM-D-YY LT')}
                    </h6>
                  </div>
                  <p className='text-ellipsis text-sm text-gray line-clamp-1 '>
                    {v.message}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

interface userdropDownType {
  userName: string;
  userEmail: string;
  url: any;
  avatar: string;
}
export const UserDropDown: FC<userdropDownType> = ({
  userEmail,
  userName,
  avatar,
  url,
}) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const dropDown = useRef<HTMLDivElement>(null);
  const { state, setIsLoggedIn, setToken, setUser } = useContext(AppContext);

  const router = useRouter();
  const logout = async () => {
    auth.logout();
    setIsLoggedIn(false);
    setToken('');
    setUser({});
    router.push('/');
    successMessage('User Logged out successfully');
  };

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropDown]);

  return (
    <div className='relative flex items-center justify-center' ref={dropDown}>
      <button
        type='button'
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        className='relative z-10 flex flex-row items-center justify-end gap-4 '
      >
        <div className='flex flex-col justify-end text-right '>
          <h6 className=' text-base font-medium capitalize text-[#273240]'>
            {userName}
          </h6>
          <p className='text-sm text-gray'>{userEmail}</p>
        </div>
        <div className='relative h-[52px] w-[52px] overflow-hidden rounded-full '>
          <Image src={avatar} alt='avatar' layout='fill' objectFit='contain' />
        </div>
        <i
          className={`fa-solid fa-chevron-down mx-px text-lg text-black-secondary `}
        />
      </button>
      <div
        className={`dropdown absolute top-[100%] right-3 z-30 w-[247px] flex-col rounded bg-white-primary ${
          showPopUp ? 'flex' : 'hidden'
        } `}
      >
        <Link href={`/${url}/edit-profile`}>
          <a className='flex w-full flex-row items-center justify-start gap-3 border-b border-white-tertiary py-5 px-6 hover:bg-white-tertiary '>
            <Edit set='two-tone' primaryColor='#84878B' />
            <p className='text-sm capitalize text-gray '>edit profile</p>
          </a>
        </Link>
        <Link href={`/${url}/edit-profile`}>
          <a className='flex w-full flex-row items-center justify-start gap-3 border-b border-white-tertiary py-5 px-6 hover:bg-white-tertiary '>
            <Setting set='light' primaryColor='#84878B' />
            <p className='text-sm capitalize text-gray '>settings</p>
          </a>
        </Link>
        <button
          className='flex w-full flex-row items-center justify-start gap-3 py-5 px-6 hover:bg-white-tertiary '
          onClick={logout}
        >
          <Logout set='light' primaryColor='#F36A6A' />
          <p className='text-sm capitalize text-red '>logout</p>
        </button>
      </div>
    </div>
  );
};

interface notificationProps extends badgeProps {}

export const NotificationDropdown: FC<notificationProps> = ({
  badgeNumber,
}) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const dropDown = useRef<HTMLDivElement>(null);

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropDown]);

  return (
    <div className='relative flex items-center justify-center' ref={dropDown}>
      <button
        type='button'
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        className='relative z-10 flex flex-row items-center justify-end gap-4 '
      >
        <div className='relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-tertiary text-gray '>
          <i className='fa-solid fa-bell text-xl'></i>
          {badgeNumber && (
            <div className='absolute -top-1 -right-1 flex h-[26px] w-[26px] items-center justify-center rounded-full border-4 border-tertiary bg-secondary text-[12px] font-bold leading-[18px] text-white-primary '>
              {badgeNumber}
            </div>
          )}
        </div>
      </button>
      <div
        className={`dropdown absolute top-[100%] z-30 w-[394px] flex-col rounded bg-white-primary py-5 ${
          showPopUp ? 'flex' : 'hidden'
        } `}
      >
        <h4 className='mb-4 px-5 text-lg text-[20px] capitalize text-secondary '>
          Notifications
        </h4>
        <div className='flex max-h-[340px] w-full flex-col overflow-y-scroll '>
          <p className='px-5 text-[12px] font-normal leading-[18px] text-[#6A6E83] '>
            Today - 10 June, 2020
          </p>
          {/* Map here */}
          <div className='flex w-full flex-row items-start justify-start border-b border-white-tertiary p-5 '>
            <div className='flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary/10 '>
              <i className='fa-solid fa-bell text-xl text-secondary'></i>
            </div>
            <div className='flex w-[298px] flex-1 flex-col pl-[10px] '>
              <h5 className='text-base font-semibold text-secondary '>
                Loreum Ipsum
              </h5>
              <p className='text-ellipsis text-sm text-gray line-clamp-3 '>
                Your prescription End date 25 Oct. add to the doctor's new
                prescription appointment.Your prescription End date 25 Oct. add
                to the doctor's new prescription appointment.
              </p>
            </div>
          </div>
          {/* Duplicate Component */}
          <div className='flex w-full flex-row items-start justify-start border-b border-white-tertiary p-5 '>
            <div className='flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary/10 '>
              <i className='fa-solid fa-bell text-xl text-secondary'></i>
            </div>
            <div className='flex w-[298px] flex-1 flex-col pl-[10px] '>
              <h5 className='text-base font-semibold text-secondary '>
                Loreum Ipsum
              </h5>
              <p className='text-ellipsis text-sm text-gray line-clamp-3 '>
                Your prescription End date 25 Oct. add to the doctor's new
                prescription appointment.Your prescription End date 25 Oct. add
                to the doctor's new prescription appointment.
              </p>
            </div>
          </div>
          {/* Duplicate Component */}
          <div className='flex w-full flex-row items-start justify-start border-b border-white-tertiary p-5 '>
            <div className='flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary/10 '>
              <i className='fa-solid fa-bell text-xl text-secondary'></i>
            </div>
            <div className='flex w-[298px] flex-1 flex-col pl-[10px] '>
              <h5 className='text-base font-semibold text-secondary '>
                Loreum Ipsum
              </h5>
              <p className='text-ellipsis text-sm text-gray line-clamp-3 '>
                Your prescription End date 25 Oct. add to the doctor's new
                prescription appointment.Your prescription End date 25 Oct. add
                to the doctor's new prescription appointment.
              </p>
            </div>
          </div>
          {/* Duplicate Component */}
          <div className='flex w-full flex-row items-start justify-start border-b border-white-tertiary p-5 '>
            <div className='flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary/10 '>
              <i className='fa-solid fa-bell text-xl text-secondary'></i>
            </div>
            <div className='flex w-[298px] flex-1 flex-col pl-[10px] '>
              <h5 className='text-base font-semibold text-secondary '>
                Loreum Ipsum
              </h5>
              <p className='text-ellipsis text-sm text-gray line-clamp-3 '>
                Your prescription End date 25 Oct. add to the doctor's new
                prescription appointment.Your prescription End date 25 Oct. add
                to the doctor's new prescription appointment.
              </p>
            </div>
          </div>
          {/* Duplicate Component */}
          <div className='flex w-full flex-row items-start justify-start border-b border-white-tertiary p-5 '>
            <div className='flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary/10 '>
              <i className='fa-solid fa-bell text-xl text-secondary'></i>
            </div>
            <div className='flex w-[298px] flex-1 flex-col pl-[10px] '>
              <h5 className='text-base font-semibold text-secondary '>
                Loreum Ipsum
              </h5>
              <p className='text-ellipsis text-sm text-gray line-clamp-3 '>
                Your prescription End date 25 Oct. add to the doctor's new
                prescription appointment.Your prescription End date 25 Oct. add
                to the doctor's new prescription appointment.
              </p>
            </div>
          </div>
          {/* Duplicate Component */}
          <div className='flex w-full flex-row items-start justify-start border-b border-white-tertiary p-5 '>
            <div className='flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary/10 '>
              <i className='fa-solid fa-bell text-xl text-secondary'></i>
            </div>
            <div className='flex w-[298px] flex-1 flex-col pl-[10px] '>
              <h5 className='text-base font-semibold text-secondary '>
                Loreum Ipsum
              </h5>
              <p className='text-ellipsis text-sm text-gray line-clamp-3 '>
                Your prescription End date 25 Oct. add to the doctor's new
                prescription appointment.Your prescription End date 25 Oct. add
                to the doctor's new prescription appointment.
              </p>
            </div>
          </div>
          {/* Duplicate Component */}
          <div className='flex w-full flex-row items-start justify-start border-b border-white-tertiary p-5 '>
            <div className='flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary/10 '>
              <i className='fa-solid fa-bell text-xl text-secondary'></i>
            </div>
            <div className='flex w-[298px] flex-1 flex-col pl-[10px] '>
              <h5 className='text-base font-semibold text-secondary '>
                Loreum Ipsum
              </h5>
              <p className='text-ellipsis text-sm text-gray line-clamp-3 '>
                Your prescription End date 25 Oct. add to the doctor's new
                prescription appointment.Your prescription End date 25 Oct. add
                to the doctor's new prescription appointment.
              </p>
            </div>
          </div>
          {/* Duplicate Component */}
          <div className='flex w-full flex-row items-start justify-start border-b border-white-tertiary p-5 '>
            <div className='flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary/10 '>
              <i className='fa-solid fa-bell text-xl text-secondary'></i>
            </div>
            <div className='flex w-[298px] flex-1 flex-col pl-[10px] '>
              <h5 className='text-base font-semibold text-secondary '>
                Loreum Ipsum
              </h5>
              <p className='text-ellipsis text-sm text-gray line-clamp-3 '>
                Your prescription End date 25 Oct. add to the doctor's new
                prescription appointment.Your prescription End date 25 Oct. add
                to the doctor's new prescription appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
interface languageProps {
  initialValue: string | undefined;
  content: string[] | undefined;
}
export const LanguageDropDown: FC<languageProps> = ({
  initialValue,
  content,
}) => {
  const router = useRouter();
  const { pathname, query, asPath } = router;
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const dropDown = useRef<HTMLDivElement>(null);

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropDown]);
  return (
    <div className='relative flex items-center justify-center' ref={dropDown}>
      <button
        type='button'
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        className='relative z-10 flex flex-row items-center justify-end gap-4 '
      >
        <span
          className={`fib h-5 w-9 ${
            initialValue === 'en'
              ? 'fi-us'
              : initialValue === 'fr'
              ? 'fi-fr'
              : ''
          }  `}
        />
        <p className='text-sm capitalize text-black-secondary '>
          {initialValue === 'en'
            ? 'English'
            : initialValue === 'fr'
            ? 'france'
            : ''}
        </p>
        <i
          className={`fa-solid fa-chevron-down mx-px text-lg text-black-secondary `}
        />
      </button>
      <div
        className={`dropdown absolute top-[100%] z-30 flex-col rounded bg-white-primary py-5 ${
          showPopUp ? 'flex' : 'hidden'
        } `}
      >
        {content &&
          content.map((value: any, id: any) => {
            return (
              <Link
                key={id}
                href={{ pathname, query }}
                as={asPath}
                locale={value}
              >
                <a
                  className={`flex flex-row justify-start gap-3 py-4 px-5 text-sm hover:bg-white-secondary hover:text-black-secondary  `}
                  onClick={() => {
                    setShowPopUp(false);
                  }}
                >
                  <span
                    className={`fib h-5 w-9 ${
                      value === 'en' ? 'fi-us' : value === 'fr' ? 'fi-fr' : ''
                    }  `}
                  />
                  <p
                    className={` text-sm capitalize ${
                      initialValue === value
                        ? 'text-secondary'
                        : 'text-black-secondary'
                    }`}
                  >
                    {value === 'en'
                      ? 'english'
                      : value === 'fr'
                      ? 'french'
                      : ''}
                  </p>
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

interface dropdownProps {
  initialValue: any;
  onSelect: (e: any) => void;
  content: planeData[];
}

export const FlightDropDown: FC<dropdownProps> = ({
  initialValue,
  content,
  onSelect,
}) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const dropDown = useRef<HTMLDivElement>(null);

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropDown]);

  return (
    <div className='relative flex items-center justify-center' ref={dropDown}>
      <button
        type='button'
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        className='relative z-10 flex flex-row items-center justify-end gap-4 '
      >
        <p
          className='text-[12px] font-bold capitalize text-black-secondary 
         md:text-[13px] lg:text-sm lg:font-bold '
        >
          {initialValue?.LIT_Name}
        </p>
        <i
          className={`fa-solid fa-chevron-down mx-px text-[12px] text-black-secondary md:text-sm lg:text-lg `}
        />
      </button>
      <div
        className={`dropdown absolute top-[100%] z-30 w-52 flex-col rounded bg-white-primary py-1 ${
          showPopUp ? 'flex' : 'hidden'
        } `}
      >
        {content &&
          content?.map((value: any, id: any) => (
            <button
              type='button'
              key={id}
              className={`py-4 px-5 text-start text-sm hover:bg-white-secondary hover:text-black-secondary ${
                initialValue.LIT_Name === value.LIT_Name
                  ? ' font-bold text-secondary'
                  : ' font-medium text-gray'
              } `}
              onClick={() => {
                setShowPopUp(false);
                onSelect(value);
              }}
            >
              {value.LIT_Name}
            </button>
          ))}
      </div>
    </div>
  );
};

type passengerDropDownProps = {
  initialValue: passengerLimit;
  onSelect: (e: any) => void;
  content: Number;
};
export const PassengerDropDown: FC<passengerDropDownProps> = ({
  initialValue,
  content,
  onSelect,
}) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const dropDown = useRef<HTMLDivElement>(null);

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropDown]);

  return (
    <div className='relative flex items-center justify-center' ref={dropDown}>
      <button
        type='button'
        onClick={() => {
          setShowPopUp(!showPopUp);
        }}
        className='relative z-10 flex flex-row items-center justify-end gap-4 '
      >
        <p
          className='text-[12px] font-bold capitalize text-black-secondary 
          md:text-[13px] lg:text-sm lg:font-bold '
        >
          {initialValue} passenger{initialValue > 1 && 's'}
        </p>
        <i
          className={`fa-solid fa-chevron-down mx-px text-[12px] text-black-secondary md:text-sm lg:text-lg `}
        />
      </button>
      <div
        className={`dropdown absolute top-[100%] z-30 max-h-80 w-52 flex-col overflow-y-auto rounded bg-white-primary py-1 ${
          showPopUp ? 'flex' : 'hidden'
        } `}
      >
        {[...Array(content)].map((value: any, id: any) => (
          <button
            type='button'
            key={id}
            className={`py-4 px-5 text-start text-sm hover:bg-white-secondary hover:text-black-secondary ${
              initialValue === value
                ? ' font-bold text-secondary'
                : ' font-medium text-gray'
            } `}
            onClick={() => {
              setShowPopUp(false);
              onSelect(id + 1);
            }}
          >
            {id + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
