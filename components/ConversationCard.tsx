import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

type propsType = {
  status: 'seen' | 'sent' | 'unread';
  unreadCount?: string;
  isTyping?: boolean;
  userName: string;
  userImage: string;
  messagePreview: string;
  time: string;
};
const ConversationCard: FC<propsType> = ({
  status,
  userName,
  userImage,
  messagePreview,
  time,
  isTyping,
  unreadCount = '1',
}) => {
  const router = useRouter();
  console.log('🚀 ~ file: ConversationCard.tsx:25 ~ router:', router);
  return (
    <Link
      href={{
        pathname: router.pathname,
        query: router.query,
      }}
    >
      <a
        className={`flex w-full flex-row items-center justify-start gap-4 px-[30px] py-[22px] `}
      >
        <div className='relative h-[70px] w-[70px] overflow-hidden rounded-full bg-white-tertiary '>
          <Image
            src={userImage}
            alt='user image'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='flex w-[calc(100%-86px)] flex-row items-center justify-between '>
          <div className='flex flex-col'>
            <h3 className='text-2xl capitalize text-black-primary '>
              {userName}
            </h3>
            <p
              className={`mt-2 ${
                isTyping ? 'text-green' : 'text-black-secondary'
              } text-sm capitalize`}
            >
              {' '}
              {isTyping
                ? ` ${userName.split(' ')[0]}'s Typing...`
                : messagePreview}
            </p>
          </div>
          <div className='flex flex-col items-end text-right'>
            <p className='text-sm font-medium text-black-primary'>{time}</p>
            {/* Sent Status */}
            {status === 'seen' ? (
              <i className='fa-solid fa-check mt-3 text-gray '></i>
            ) : status === 'sent' ? (
              <i className='fa-solid fa-check-double mt-3 text-green '></i>
            ) : (
              <div className='mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary '>
                <p className='text-sm text-white-primary '>{unreadCount}</p>
              </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ConversationCard;
