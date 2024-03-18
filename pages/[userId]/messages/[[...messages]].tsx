import { SearchBar } from '@/components/Base';
import ConversationCard from '@/components/ConversationCard';
import UserLayout from '@/layouts/UserLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Send } from 'react-iconly';

const Messages: FC = () => {
  const router = useRouter();
  return (
    <UserLayout
      title={{ titleEn: 'messages', titleFr: 'messages' }}
      breadcumb={{ link: 'messages/t/', text: 'messages', textFr: 'messages' }}
    >
      <section className='flex h-[1065px] w-full flex-row items-start justify-start gap-[10px] '>
        <div className='flex h-full w-[33%] flex-col items-center justify-center rounded-[10px] bg-white-primary px-0 pt-[38px] '>
          <SearchBar
            identifier='searchUser'
            groupClass=' w-full !px-[38px] pb-[20px]'
          />
          <div className='mb-8 flex h-full w-full flex-col items-start justify-start overflow-y-scroll pb-[38px]'>
            <div className='mb-8 flex w-full flex-col items-start justify-start '>
              <div className='mb-3 flex w-full flex-row items-center justify-start gap-3 px-[22px] text-gray'>
                <i className='fa-solid fa-thumbtack'></i>
                <p className='text-base font-medium capitalize '>
                  pinned messages
                </p>
              </div>
              {/* User List */}
              <ConversationCard
                status={'seen'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
              />
              <ConversationCard
                status={'sent'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                isTyping
              />
              <ConversationCard
                status='unread'
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                unreadCount='10'
              />
            </div>
            <div className='mb-8 flex w-full flex-col items-start justify-start '>
              <div className='mb-3 flex w-full flex-row items-center justify-start gap-3 px-[22px] text-gray'>
                <i className='fa-solid fa-comment'></i>
                <p className='text-base font-medium capitalize '>
                  all messages
                </p>
              </div>
              {/* User List */}
              <ConversationCard
                status={'seen'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
              />
              <ConversationCard
                status={'sent'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                isTyping
              />
              <ConversationCard
                status='unread'
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                unreadCount='10'
              />
              <ConversationCard
                status={'seen'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
              />
              <ConversationCard
                status={'sent'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                isTyping
              />
              <ConversationCard
                status='unread'
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                unreadCount='10'
              />
              <ConversationCard
                status={'seen'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
              />
              <ConversationCard
                status={'sent'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                isTyping
              />
              <ConversationCard
                status='unread'
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                unreadCount='10'
              />
              <ConversationCard
                status={'seen'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
              />
              <ConversationCard
                status={'sent'}
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                isTyping
              />
              <ConversationCard
                status='unread'
                userName='john doe'
                userImage='/avatar.png'
                messagePreview='Thanks'
                time='10:54 PM'
                unreadCount='10'
              />
            </div>
          </div>
        </div>
        <div className='relative flex h-full w-2/3 flex-col rounded-[10px] bg-white-primary'>
          <div
            className={`flex w-full flex-row items-center justify-start gap-4 border-b border-gray/40 p-10 `}
          >
            <div className='relative h-[70px] w-[70px] overflow-hidden rounded-full bg-white-tertiary '>
              <Image
                src={'/avatar.png'}
                alt='user image'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div className='flex w-[calc(100%-86px)] flex-row items-center justify-between '>
              <div className='flex flex-col'>
                <h3 className='text-2xl capitalize text-black-primary '>
                  john doe
                </h3>
                <p className={`mt-2 text-sm capitalize text-green`}>
                  {' '}
                  john's Typing...
                </p>
              </div>
              <div className='flex flex-row items-center justify-end gap-11 '>
                <i className='fa-solid fa-video cursor-pointer text-4xl text-gray/40 hover:text-gray  '></i>
                <i className='fa-solid fa-phone cursor-pointer text-4xl text-gray/40 hover:text-gray  '></i>
                <i className='fa-solid fa-ellipsis-vertical cursor-pointer text-4xl text-gray/40 hover:text-gray  '></i>
              </div>
            </div>
          </div>
          <div className='mt-auto mb-20 flex w-full flex-col items-end justify-start overflow-y-scroll px-10 '>
            {/* The Date */}
            <div className='relative flex w-full flex-row items-center justify-center '>
              <span className='absolute inset-y-0 z-10 my-auto h-px w-full bg-gray/40 ' />
              <span className='relative z-20 bg-white-primary px-3 text-sm font-medium capitalize text-gray/40 '>
                today
              </span>
            </div>
            {/* The Date End */}
            {/* Message */}
            <div className='my-10 flex w-full flex-row items-start justify-start gap-4 '>
              <div className='relative h-[70px] w-[70px] overflow-hidden rounded-full '>
                <Image
                  src='/avatar.png'
                  layout='fill'
                  objectFit='contain'
                  alt='avatar'
                />
              </div>
              <div className='flex w-[366px] flex-col flex-wrap gap-[10px]'>
                <div className='flex flex-row items-center justify-start gap-5'>
                  <h4 className='text-[20px] font-semibold leading-[30px] text-black-secondary'>
                    Jacob Jones
                  </h4>
                  <p className='text-sm font-medium text-gray '>10:54 PM</p>
                </div>
                <div className='rounded-2xl rounded-tl-none border border-gray/20 p-4'>
                  <p className=' text-base font-medium text-black-primary '>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* Reply */}
            <div className='my-10 flex w-full flex-row-reverse items-start justify-start gap-4 '>
              <div className='relative h-[70px] w-[70px] overflow-hidden rounded-full '>
                <Image
                  src='/avatar.png'
                  layout='fill'
                  objectFit='contain'
                  alt='avatar'
                />
              </div>
              <div className='flex w-[366px] flex-col flex-wrap gap-[10px]'>
                <div className='flex flex-row-reverse items-center justify-start gap-5'>
                  <h4 className='text-[20px] font-semibold leading-[30px] text-black-secondary'>
                    Jacob Jones
                  </h4>
                  <p className='text-sm font-medium text-gray '>10:54 PM</p>
                </div>
                <div className='rounded-2xl rounded-tr-none border border-gray/20 bg-primary p-4'>
                  <p className=' text-base font-medium text-white-primary '>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full p-5 '>
            <div className='flex w-full items-center justify-between rounded-[50px] bg-gray/5 p-[10px] pl-8 '>
              <input
                type={'text'}
                className='w-5/6 border-none bg-transparent focus:ring-0'
                placeholder='send a message'
              />
              <div className=' flex flex-row items-center justify-start gap-5 '>
                <button type='button' className=''>
                  <i className='fa-regular fa-face-grin-beam text-[30px] text-gray '></i>
                </button>
                <button type='button' className=''>
                  <i className='fa-regular fa-image text-[30px] text-gray '></i>
                </button>
                <button
                  type='button'
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-primary '
                >
                  <Send set='light' primaryColor='#ffffff' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default Messages;
