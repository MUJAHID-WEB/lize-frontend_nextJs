import AppContext from 'context/AppContext';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import CardOrderIconSVG from '../svg/CardOrderIconSVG';
import axios from 'axios';
import moment from 'moment';
import { errorMessage } from 'utils/tostMsg';
import { useRouter } from 'next/router';
import BaseInput from '../Base';

function AmenitiesOrderModal({ closeModal, setThankYouModal }: any) {
  const { state, setReservation, setTrips } = useContext(AppContext);
  const { reservation, trips, amenities } = state;

  const [allReservations, setAllReservations] = useState<any>();
  const [allTrips, setAllTrips] = useState<any>();
  const [quantity,setQuantity] = useState<number>(1);
  console.log("🚀 ~ file: AmenitiesOrderModal.tsx:18 ~ AmenitiesOrderModal ~ quantity:", quantity,trips);
  const router = useRouter();
  const clear = () => {
    setTrips([]);
    setReservation([]);
    closeModal(false);
  };

  useEffect(() => {
    (async () => {
      const tripsData: any = await axios.get(process.env.NEXT_PUBLIC_URL+'/trips/single-trips/'+trips,
      );
      console.log("🚀 ~ file: AmenitiesOrderModal.tsx:30 ~ tripsData:", tripsData.data.trips)
      
      setAllTrips(tripsData.data.trips);
      setAllReservations(
        tripsData.data.trips.reservation
      );
    })();
  }, [state]);

  // const add = (e: any, data: any) => {
  //   if (e.target.name == 'reservation') {
  //     if (e.target.checked) {
  //       setReservation([...reservation, data]);
  //     } else {
  //       setReservation(
  //         reservation.filter((i: any) => !reservation.includes(i))
  //       );
  //     }
  //   } else {
  //     if (e.target.checked) {
  //       setTrips([...trips, data]);
  //     } else {
  //       setTrips(trips.filter((i: any) => !trips.includes(i)));
  //     }
  //   }
  // };

  const addToReservation = async () => {
    let data = {
      tripsId:trips,
      products:[
          {
              amenity:amenities._id,
              quantity,
          }
      ]
  }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/amenities/add-amenities-to-reservation`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: state.token,
          },
        }
      );
      console.log(res.data);
      
      if (res.data.status === 200) {
        setThankYouModal(true);
        clear();
      }
    } catch (error) {
      errorMessage('Something was wrong !');
    }
  };

  return (
    <>
      <div className='flex w-[781px] flex-col items-center justify-start rounded-[10px] py-[33px] px-[35px]'>
        <h3 className='flex flex-row justify-center gap-[10px] text-center text-[20px] font-semibold leading-[30px] text-secondary'>
          <CardOrderIconSVG />
          {router.locale === `fr`
            ? `Confirmer la commande`
            : `Confirm the Order`}
        </h3>
        <p className='mt-4 text-center text-[16px] leading-[35px] text-[#84878B]'>
          {router.locale === `fr`
            ? `ajouter des commodités à la `
            : `Adding Amenities to `}
          <span className='text-[#3B3E44]'>
            {router.locale === `fr` ? ` Réservation` : ` Reservation`}
            {`( ${allReservations?.reservationId} )`}
          </span>
          {router.locale === `fr` ? ` et ` : ` and `}
          <span className='text-[#3B3E44]'>
            {router.locale === `fr` ? ` au voyage ` : ` Trip `}
            {`( ${allTrips?.tripsId} )`}
          </span>
        </p>
        <div className='my-10 flex flex-row justify-start'>
          <div className='border-r border-[#EDF2F6] pt-[18px] pb-[17px] pr-7 '>
            <h3 className='pb-[15px] text-[20px] font-medium leading-[30px] text-[#3B3E44]'>
              {router.locale === `fr` ? ` Agréments` : ` Amenities `}
            </h3>
            <div className='flex w-[274px] flex-row justify-start'>
              <div className='relative mr-[15px] h-[100px] w-[100px] overflow-hidden rounded-[10px]'>
                {/* <img src="../order.webp" alt="" /> */}
                <Image
                  src={amenities?.amenitiesImage}
                  alt='amenities'
                  layout='fill'
                  objectFit='contain'
                  className='rounded-[30px]'
                />
              </div>
              <div className='py-[15px]'>
                <p className='pb-[10px] text-[20px] font-semibold leading-[30px] text-[#3B3E44]'>
                  {amenities?.nameEn}
                </p>
                <p className='text-[20px] font-medium leading-[30px] text-secondary '>
                  {amenities?.price}
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-start pl-[29px]'>
            <div className='mb-10 w-[380px]'>
              <h3 className='pb-[10px] text-[20px] font-medium leading-[30px] text-[#3B3E44]'>
                {router.locale === `fr` ? `Réservation` : `Reservation`}
              </h3>
              <div className='flex w-full flex-row items-center justify-between'>
                    <div className='text-[14px] font-medium leading-[21px] text-[#84878B] '>
                      {allReservations?.reservationId}
                    </div>
                    <div className='text-[14px] font-medium leading-[21px] text-[#84878B] '>
                      {allReservations?.aircraftId?.model}
                    </div>
                    <div className='text-[14px] font-medium leading-[21px] text-[#84878B] '>
                      {moment(allReservations?.startDate).format('D/M/YYYY')}
                    </div>
                    <div className='text-[14px] font-medium leading-[21px] text-[#84878B] '>
                      {moment(allReservations?.endDate).format('D/M/YYYY')}
                    </div>
              </div>
            </div>
            <div className='w-[380px]'>
              <h3
                className='pb-[10px] text-[20px] font-medium leading-[30px] text-[#3B3E44]
            '
              >
                {router.locale === `fr` ? `voyage` : `Trip`}
              </h3>
              <div className='flex w-full flex-row items-center justify-between'>
                    <div className='text-[14px] font-medium leading-[21px] text-[#84878B] '>
                      {allTrips?.tripsId}
                    </div>
                    <div className='text-[14px] font-medium leading-[21px] text-[#84878B] '>
                      {allTrips?.reservation?.aircraftId?.model}
                    </div>
                    <div className='text-[14px] font-medium leading-[21px] text-[#84878B] '>
                      {moment(allTrips?.startDate).format('D/M/YYYY')}
                    </div>
                    <div className='text-[14px] font-medium leading-[21px] text-[#84878B] '>
                      {moment(allTrips?.endDate).format('D/M/YYYY')}
                    </div>

              </div>
            </div>
            <div className='mt-5 w-[50%]'>
              <BaseInput
                inputType='number'
                identifier='quantity'
                label={router.locale === `fr`? `la quantité de produit` : ` product quantity`
                }
                groupClass='pb-[10px]'
                onchange={(e) => setQuantity(e.target.value)}
                placeholder={router.locale === `fr` ? `quantité` : `quantity`}
                value={quantity.toString()}
                // error={error}
              />
            </div>
          </div>
        </div>
        
        <div className='mb-[35px] mt-[3px] flex flex-row justify-center gap-5 '>
          <button
            type='button'
            className='btn-tertiary  flex h-[70px] w-[240px] flex-row items-center justify-center'
            onClick={clear}
          >
            {router.locale === `fr` ? `Annuler` : `Cancel`}
          </button>
          <button
            onClick={() => addToReservation()}
            type='submit'
            className='btn-primary  flex h-[70px] w-[240px] flex-row items-center justify-center'
            disabled={!(reservation.length || trips.length)}
          >
            {router.locale === `fr` ? `Confirmer` : `Confirm`}
          </button>
        </div>
      </div>
    </>
  );
}

export default AmenitiesOrderModal;
