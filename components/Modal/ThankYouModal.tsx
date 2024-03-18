import { useRouter } from "next/router";
import React from "react";

function ThankYouModal({ closeModal, data }: any) {
  const router = useRouter();
  return (
    <>
      <div
        className={`bg-[#ffffff} relative flex w-[785px] flex-col items-center justify-start rounded-xl py-14 `}
      >
        <div className="mb-7 h-[205px] w-[185px]">
          <img src="../mail.png" alt="" />
        </div>
        <div className="flex w-[603px] flex-col items-center justify-start gap-7 text-center">
          <p className="font-poppins text-[20px] font-medium leading-[30px] text-[#84878B] ">
            {router.locale === `fr`
              ? `Merci pour la réservation. Un membre du service à la clientèle communiquera avec vous dans les plus brefs délais.`
              : `Thank you for the reservation. A member of client service will be in-touch with you as soon as possible.`}
          </p>
          <h3
            className={`w-[427px] font-poppins text-[30px] font-bold leading-[45px] text-[#3B3E44] `}
          >
            {router.locale === `fr`
              ? `Votre numéro de réservation est`
              : "Your reservation number is "}
            <span className="text-primary">LTI-{data}</span>
          </h3>
          <p className="font-poppins text-[20px] font-medium leading-[30px] text-[#84878B]">
            {router.locale === `fr`
              ? `Un message de confirmation a été envoyé à votre adresse e-mail.`
              : `A confirmation message was sent to your email.`}
          </p>
          <h3 className="font-poppins text-[30px] font-bold leading-[45px] text-primary">
            {router.locale === `fr` ? `Merci!` : `Thank you!`}
          </h3>
        </div>
        <button
          className="absolute top-9 right-9  cursor-pointer"
          onClick={() => closeModal(false)}
        >
          <i className="fa-solid fa-xmark text-[30px] text-[#84878B] "></i>
        </button>
      </div>
    </>
  );
}

export default ThankYouModal;
