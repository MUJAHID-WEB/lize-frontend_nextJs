import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import MakeReservation from './MakeReservation';
import Modal from './Modal';
import AppContext from 'context/AppContext';
import ThankYouModal from './Modal/ThankYouModal';
import { useRouter } from 'next/router';

const PlaneItem = ({ plane }: any) => {
  const [reservationModal, setReservationModal] = useState<any>(false);
  const [thankYouModal, setThankYouModal] = useState<any>(false);
  const [planeId, setPlaneId] = useState<any>();
  const { state, setRerender } = useContext(AppContext);
  const router = useRouter();
  const submitReservation = async (data: any) => {
    // console.log('data',data);
    try {
      let res: any = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/reservation`,
        data,
        {
          headers: {
            Authorization: state.token,
          },
        }
      );
      setReservationModal(false);
      setThankYouModal(true);
      // setRerender(!state.render)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='mt-8 flex w-full flex-col justify-start gap-8 '>
        {plane?.map((plane: any, i: any) => (
          <>
            <div
              key={i}
              className='flex w-full flex-row items-center justify-between '
            >
              <div className='relative h-[200px] w-[300px]  overflow-hidden '>
                <Image
                  src={plane?.planeImage[0]}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  className='rounded-[30px]'
                />
                <div className=' overlay absolute bottom-0 w-[300px] rounded-b-[30px] pt-[42px] pl-5'>
                  <h6 className='font-poppins text-[20px] font-semibold leading-[30px] text-[#FFFFFF]'>
                    Model
                  </h6>
                  <p className='pb-4 font-poppins text-base font-medium text-[#FFFFFF]'>
                    {plane?.model}
                  </p>
                </div>
              </div>
              {/* img area ends */}
              <div className='w-[290px] border-r border-[#EDF2F6]'>
                <div className='pb-5'>
                  <h6 className='pb-[5px] font-poppins text-2xl font-semibold text-[#3B3E44]'>
                     {plane?.LIT_Name}
                  </h6>
                  <p className='font-poppins text-lg font-medium text-[#84878B]'>
                    by {plane?.manufacture}
                  </p>
                </div>
                <div className=''>
                  <h6 className='pb-[5px] font-poppins text-2xl font-semibold text-[#3B3E44]'>
                    Passengers
                  </h6>
                  <p className='font-poppins text-lg font-medium text-[#84878B]'>
                    {plane?.passengers}
                  </p>
                </div>
              </div>
              {/* Passengers ends */}
              <div className='w-[230px] border-r border-[#EDF2F6] px-10'>
                <div className='pb-5'>
                  <h6 className='pb-[5px] font-poppins text-2xl font-semibold text-[#3B3E44]'>
                    {router.locale === `fr` ? `Vitesse` : `Speed`}
                  </h6>
                  <p className='font-poppins text-lg font-medium text-[#84878B]'>
                    TAS {plane?.speed} Kts
                  </p>
                </div>
                <div className=''>
                  <h6 className='pb-[5px] font-poppins text-2xl font-semibold text-[#3B3E44]'>
                    {router.locale === `fr` ? `Gamme` : `Range`}
                  </h6>
                  <p className='font-poppins text-lg font-medium text-[#84878B]'>
                    {plane?.range}
                  </p>
                </div>
              </div>
              {/* speed range ends */}
              <div className='w-[207px] border-r border-[#EDF2F6] px-10'>
                <div className='pb-5'>
                  <h6 className='pb-[5px] font-poppins text-2xl font-semibold text-[#3B3E44]'>
                    {router.locale === `fr` ? `Envergure` : `Wingspan`}
                  </h6>
                  <p className='font-poppins text-lg font-medium text-[#84878B]'>
                    {plane?.wingspan}M
                  </p>
                </div>
                <div className=''>
                  <h6 className='pb-[5px] font-poppins text-2xl font-semibold text-[#3B3E44]'>
                    {router.locale === `fr` ? `Hauteur` : `Height`}
                  </h6>
                  <p className='font-poppins text-lg font-medium text-[#84878B]'>
                    {plane?.height}M
                  </p>
                </div>
              </div>
              {/* height area ends */}

              <button
                onClick={() => {
                  setReservationModal(true);
                  setPlaneId(plane);
                }}
                type='button'
                className='inline-block rounded-[6px] bg-[#72ADD7] py-[21px] pl-[39px] pr-[38px] font-poppins text-[20px] font-medium capitalize leading-[30px] text-[#FFFFFF] '
              >
                {router.locale === `fr`
                  ? `Réservez cet avion`
                  : `Book this plane`}
              </button>

              {/* btn ends */}
            </div>
          </>
        ))}
      </div>
      <Modal
        toggleState={reservationModal}
        actionOnBlur={() => setReservationModal(false)}
        bodyClass='!p-0 !min-h-0 !w-[66%]'
      >
        <MakeReservation
          submitReservation={submitReservation}
          planeId={planeId}
          closeModal={setReservationModal}
        />
      </Modal>
      <Modal
        toggleState={thankYouModal}
        actionOnBlur={() => setThankYouModal(false)}
        bodyClass='!p-0 !min-h-0 '
      >
        {/* <ThankYouModal closeModal={setThankYouModal} data={data}/> */}
        <div
          className={`bg-[#ffffff} relative flex w-[555px] flex-col items-center justify-start rounded-xl py-14 `}
        >
          <div className='pb-[30px]  '>
            {/* <img src="../mail.png" alt="" /> */}
            <img src='../telephone.png' alt='' />
          </div>
          <div className='flex w-[441px] flex-col items-center justify-start gap-7 text-center'>
            <p className='font-poppins text-[20px] font-medium leading-[42px] text-[#3B3E44] '>
              {router.locale === `fr`
                ? `Je vous remercie de votre réservation. Un membre de nos services à la clientèle assurera le suivi dans les plus brefs délais.`
                : `Thank you for your reservation. A member of our client services will followup as soon as possible.`}
            </p>
          </div>
          <button
            className='absolute top-9 right-9  cursor-pointer'
            onClick={() => setThankYouModal(false)}
          >
            <i className='fa-solid fa-xmark text-[30px] text-[#84878B] '></i>
          </button>
        </div>
      </Modal>
    </>
  );
};

const data = {
  icon: '/telephone.png',
  upDesc:
    'Thank you for your reservation. A member of our client services will followup as soon as possible.',
  u_w: '!w-[441px]',
  title: '',
  title2: '',
  downDesc: '',
  d_w: '',
  msg: '',
  w: '!w-[555px] h-[381px]',
};

export default PlaneItem;
