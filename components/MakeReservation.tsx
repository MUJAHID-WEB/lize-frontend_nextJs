import React, { useContext, useEffect, useState } from 'react';
import { Send } from 'react-iconly';
import { FlightDropDown, PassengerDropDown } from './DropDowns';
import { CityCard, DateCard } from './ReservationCard';
import Toggle from './svg/Toggle';
import axios from 'axios';
import { toast } from 'react-toastify';
import AppContext from 'context/AppContext';
import { useRouter } from 'next/router';
import getProfile from '@/utils/getProfile';

export type planeData = { LIT_Name: string };
export type passengerLimit = number;

const MakeReservation = ({ submitReservation, planeId, closeModal }: any) => {
  const router = useRouter();
  const [plane, setPlane] = useState<any>([]);
  const [LIT_Name, setLIT_Name] = useState<any>(planeId);
  console.log("🚀 ~ file: MakeReservation.tsx:19 ~ MakeReservation ~ LIT_Name:", planeId)
  const [passenger, setPassenger] = useState<number>(1);

  const { state } = useContext(AppContext);

  const [toggleCard, setToggleCard] = useState<boolean>(false);
  const [departing, setDeparting] = useState<string>('');
  const [returning, setReturning] = useState<string>('');

  const [departingDate, setDepartingDate] = useState<Date | null>(null);
  const [returningDate, setReturningDate] = useState<Date | null>(null);

  const [profile, setProfile] = useState<any>();

  const clear = () => {
    setLIT_Name(plane[0]);
    setPassenger(1);
    setReturning('');
    setDeparting('');
    setDepartingDate(null);
    setReturningDate(null);

    closeModal && closeModal(false);
  };
  useEffect(() => {
    (async () => {
      let plane = await axios.get(`${process.env.NEXT_PUBLIC_URL}/plane`);
      setPlane(plane.data.planes);
      setLIT_Name(plane.data.planes[0]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (state.token) {
        const profile = await getProfile(state.token);
        setProfile(profile);
      }
    })();
  }, [state]);

  const addPlane = (e: any) => {
    setLIT_Name(e);
  };
  const addReservation = async (e: any) => {
    e.preventDefault();

    let name =
      profile.firstName +
      ' ' +
      (profile.middleName || ' ') +
      ' ' +
      profile.lastName;

    let data = {
      madeBy: name,
      aircraftId:planeId._id ||  LIT_Name._id,
      departingCity: departing,
      returningCity: returning,
      startDate: departingDate,
      endDate: returningDate,
      numberOfPassengers: passenger,
      passenger: [],
    };
    console.log("🚀 ~ file: MakeReservation.tsx:82 ~ addReservation ~ data:", data)
    
    submitReservation(data);
    clear();
  };
  const deptCity =
    router.locale === 'fr' ? 'ville de départ' : 'departing city';
  const rettCity =
    router.locale === 'fr' ? 'ville de retour' : 'returning city';
  return (
    <form
      onSubmit={addReservation}
      className='reservationShadow flex w-full flex-col rounded-xl bg-white-primary 
    py-4 md:py-6 lg:py-10 '
      encType='multipart/formdata'
    >
      <div
        className='flex w-full flex-row flex-wrap items-center justify-between border-b border-white-tertiary px-3 pb-5 
       md:px-5 lg:pb-8 xl:pl-[51px] xl:pr-[60px] '
      >
        <h4 className='text-xl text-secondary md:text-[21px] lg:text-2xl '>
          {router.locale === 'fr' ? ` Faire votre ` : ` Make your `}
          <span className='capitalize text-primary'>
            {router.locale === 'fr'
              ? ` Réservation maintenant. `
              : ` Reservation Now. `}
          </span>
        </h4>
        <div className='flex flex-col flex-wrap justify-start gap-2 md:flex-row md:gap-0 '>
          <div className='border-white-tertiary md:border-r md:px-3 xl:px-5 '>
            {planeId?.LIT_Name ? (
              <p className='text-sm font-bold capitalize text-black-secondary'>
                {planeId?.LIT_Name}
              </p>
            ) : (
              <FlightDropDown
                initialValue={LIT_Name}
                content={plane}
                onSelect={(e: any) => addPlane(e)}
              />
            )}
          </div>
          <div className='flex md:px-3 xl:px-5 '>
            <PassengerDropDown
              initialValue={passenger}
              content={LIT_Name?.passengers}
              onSelect={(e: any) => setPassenger(e)}
            />
          </div>
        </div>
      </div>
      <div
        className='flex w-full flex-row flex-wrap items-center justify-start gap-2.5 px-4 pt-5 
        md:flex-nowrap lg:pt-[30px] xl:px-[27px] '
      >
        <div className='relative flex flex-row justify-start gap-2.5'>
          <CityCard
            label={toggleCard ? deptCity : rettCity}
            changedValue={(e: any) => setDeparting(e)}
            initialValue={departing}
          />
          <CityCard
            label={toggleCard ? rettCity : deptCity}
            changedValue={(e: any) => setReturning(e)}
            initialValue={returning}
          />
          <button
            type='button'
            className='reservationShadow absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white-primary text-primary lg:h-10 lg:w-10 xl:h-11 xl:w-11 2xl:h-12 2xl:w-12 '
            onClick={() => setToggleCard(!toggleCard)}
          >
            <Toggle />
          </button>
        </div>
        <DateCard
          label={
            router.locale === `fr`
              ? `date et heure de départ`
              : 'departing date & time'
          }
          inputId='depart'
          updateCb={setDepartingDate}
          initialValue={departingDate}
        />
        <DateCard
          label={
            router.locale === `fr`
              ? `date et heure de retour`
              : 'returning date & time'
          }
          inputId='return'
          updateCb={setReturningDate}
          initialValue={returningDate}
        />
        {planeId ? (
          ''
        ) : (
          <button
            className='flex h-[108px] w-[12%] flex-col items-center justify-center rounded-[10px] bg-primary text-white-primary 2xl:w-[14%] '
            type='submit'
            // onClick={addReservation}
          >
            <Send set='light' primaryColor='white' />
            <p
              className='text-[12px] font-medium capitalize leading-[30px] 
            md:text-[13px] lg:text-[14px] xl:text-[16px] 3xl:text-[20px] '
            >
              {router.locale === `fr` ? `envoyer` : 'send'}
            </p>
          </button>
        )}
      </div>
      {planeId?.LIT_Name && (
        <div className='mb-[35px] mt-[3px] flex flex-row justify-start gap-5'>
          <button
            type='button'
            className='btn-tertiary  flex h-[70px] w-[240px] flex-row items-center justify-center'
            onClick={clear}
          >
            {router.locale === `fr` ? `Annuler` : `Cancel`}
          </button>
          <button
            // onClick={addReservation}
            type='submit'
            className='btn-primary  flex h-[70px] w-[240px] flex-row items-center justify-center'
          >
            {router.locale === `fr` ? `Ajouter un document` : `Add Document`}
          </button>
        </div>
      )}
    </form>
  );
};

export default MakeReservation;
