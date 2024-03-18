import AppContext from "context/AppContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Modal from "./Modal";
import AmenitiesOrderModal from "./Modal/AmenitiesOrderModal";
import AmenityAddModal from "./Modal/AmenityAddModal";

const AmenitiesItem = ({ amenities }: any) => {
  const [addAmenitiesModal, setAddAmenitiesModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState<any>(false);
  const { setAmenities } = useContext(AppContext);
  const [thankYouModal, setThankYouModal] = useState<any>(false);
  const { setReservation, setTrips } = useContext(AppContext);
  const router = useRouter();

  const clear = () => {
    setTrips([]);
    setReservation([]);
    setThankYouModal(false);
  };

  return (
    <>
      <div className="mt-5 flex w-full flex-col justify-start gap-5 ">
        {amenities?.map((amenities: any, i: any) => (
          <>
            <div className="flex w-full flex-row items-center justify-between">
              <div className="flex w-[780px] flex-row flex-wrap items-center justify-start ">
                <div className="relative h-[200px] w-[300px]">
                  {/* <img src='/' alt='' className='rounded-[30px] h-full' /> */}
                  <Image
                    src={amenities?.amenitiesImage}
                    alt="amenities"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[30px]"
                  />
                  <div className=" overlay absolute bottom-0 w-[300px] rounded-b-[30px] pt-[42px] pl-5">
                    <h6 className="font-poppins text-[20px] font-semibold capitalize leading-[30px] text-[#FFFFFF]">
                      {router.locale === `fr` ? `taper` : `type`}
                    </h6>
                    <p className="pb-4 font-poppins text-base font-medium text-[#FFFFFF]">
                      {amenities?.type}
                    </p>
                  </div>
                </div>
                {/* img area ends */}
                <div className=" pl-[25px] pt-6 ">
                  <div className="pb-5">
                    <h6 className="pb-[5px] font-poppins text-2xl text-[#3B3E44]">
                      {amenities?.nameEn}
                    </h6>
                    <p className="font-poppins text-base font-medium leading-[35px] text-[#84878B]">
                      {amenities?.overViewEn}
                    </p>
                  </div>
                </div>{" "}
              </div>
              {/* details ends */}
              <div className="border-l border-[#EDF2F6] pl-8 ">
                <h6 className="pb-5 text-[30px] font-bold leading-[45px] text-[#172066]">
                  {amenities?.price}
                </h6>
                <button
                  type="button"
                  className="inline-block rounded-[6px] bg-[#72ADD7] py-5 pl-[38px] pr-[37px] font-poppins text-[20px] font-medium leading-[30px] text-[#FFFFFF]"
                  onClick={() => {
                    setAddAmenitiesModal(true);
                    setAmenities(amenities);
                  }}
                >
                  {router.locale === `fr`
                    ? `Ajouter à la réservation`
                    : `Add to reservation`}
                </button>
              </div>
              {/* btn ends */}
            </div>
          </>
        ))}
      </div>
      <Modal
        toggleState={addAmenitiesModal}
        actionOnBlur={() => setAddAmenitiesModal(false)}
        bodyClass="!p-0 !max-h-[700px] !min-h-[442px] !w-[78%]"
      >
        <AmenityAddModal
          closeModal={setAddAmenitiesModal}
          setConfirmModal={setConfirmModal}
        />
      </Modal>
      <Modal
        toggleState={confirmModal}
        actionOnBlur={() => setConfirmModal(false)}
        bodyClass="!p-0 !min-h-0"
      >
        <AmenitiesOrderModal
          closeModal={setConfirmModal}
          setThankYouModal={setThankYouModal}
        />
      </Modal>
      <Modal
        toggleState={thankYouModal}
        actionOnBlur={() => setThankYouModal(false)}
        bodyClass="!p-0 !min-h-0 "
      >
        {/* <ThankYouModal closeModal={setThankYouModal} data={data}/> */}
        <div
          className={`relative flex w-[555px] flex-col items-center justify-start rounded-xl bg-[#ffffff] py-14 `}
        >
          <div className="pb-[30px]  ">
            {/* <img src="../mail.png" alt="" /> */}
            <img src="/confirm.png" alt="" />
          </div>
          <div className="flex w-[441px] flex-col items-center justify-start gap-7 text-center">
            <p
              className={`w-[427px] font-poppins text-[24px] font-bold leading-[36px] text-[#3B3E44] `}
            >
              {router.locale === `fr`
                ? `Votre commande a été confirmée !`
                : `Your Order has been Confirmed!`}
            </p>
            <p className="w-[322px] font-poppins text-[16px] font-medium leading-[33px] text-[#3B3E44] ">
              {router.locale === `fr`
                ? `Merci d'avoir ajouté des équipements à votre voyage/réservation`
                : `Thank you for your adding Amenities to your Trip/Reservation.`}
            </p>
          </div>
          <button
            className="absolute top-9 right-9  cursor-pointer"
            onClick={() => clear()}
          >
            <i className="fa-solid fa-xmark text-[30px] text-[#84878B] "></i>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AmenitiesItem;
