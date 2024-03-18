import BaseInput from "@/components/Base";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MakeReservation from "@/components/MakeReservation";
import ReservationSVG from "@/components/svg/ReservationSVG";
import ReservationSVGL from "@/components/svg/ReservationSVGL";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Send } from "react-iconly";

function Reservation() {
  const submitReservation = () => {};
  const onchange = (e: any) => {};
  const router = useRouter();
  return (
    <>
      <Header headerType="secondary" />
      <section className="relative bg-[#72ADD7]/20">
        <div
          className="container flex w-full flex-col justify-start px-3 pt-24 pb-[248px] 
            md:flex-row md:justify-between md:pt-28 md:pb-[186px]
            lg:px-4 lg:pt-32
            xl:px-5 xl:pt-[126px]
            2xl:px-0"
        >
          <div
            className=" flex w-[87%] flex-col justify-start gap-[21px] 
             md:w-[400px] 
             lg:w-[458px] 
             xl:ml-8 xl:mt-[123px] xl:w-[520px] 
             2xl:ml-[67px] 2xl:w-[593px]"
          >
            <div
              className="z-20 text-[24px] font-bold leading-[36px]
             md:text-[32px] md:leading-[45px]
             lg:text-[40px] lg:leading-[60px]
             2xl:text-[50px] 2xl:leading-12"
            >
              {router.locale === `fr` ? `Faire votre ` : `Make your`}
              <span
                className="font-creattion text-[48px] font-normal  text-primary 
               md:text-[64px] lg:text-[80px] 2xl:text-[100px]"
              >
                {router.locale === `fr` ? `mémorable ` : `memorable`}
              </span>
              {router.locale === `fr`
                ? `Voyagez maintenant avec un processus simple et rapide `
                : `Trip now with easy & fast process`}
            </div>
            <div
              className="z-20 text-[10px] leading-5 text-[#84878B]
             md:text-[12px] md:leading-6
             lg:text-[14px] lg:leading-7
             xl:text-[16px]
             2xl:text-[18px] 3xl:w-[90%] "
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`}</div>
          </div>

          <div
            className="relative mt-4 h-44 w-full
           md:h-[206px] md:w-[394px]
           lg:mt-0 lg:h-[275px] lg:w-[524px]
           xl:mt-[43px] xl:h-[343px] xl:w-[655px]
           2xl:mr-[60px] 2xl:h-[464px] 2xl:w-[885px]"
          >
            <Image
              src="/element-2 1.png"
              alt="planes"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div
          className="absolute left-[50%] w-[96%] -translate-x-1/2 -translate-y-1/2 
           md:w-[750px]
           lg:w-[1000px]
           xl:w-[1062px]
           2xl:w-[1364px]"
        >
          <MakeReservation
            submitReservation={submitReservation}
            planeId={"true"}
            closeModal={""}
          />
        </div>

        <div
          className="absolute top-0 left-0 -z-10
         md:top-0 md:left-0
         lg:top-0 lg:-left-80
         xl:top-[70px] xl:-left-40
         2xl:top-32 2xl:-left-20
         3xl:top-0 3xl:left-0"
        >
          <ReservationSVG />
        </div>
        <div
          className="absolute top-[43px] right-0 -z-10
          lg:top-20 lg:-right-80
          xl:top-36 xl:-right-60
          2xl:top-48 2xl:-right-24
          3xl:bottom-0 3xl:right-0"
        >
          <ReservationSVGL />
        </div>
      </section>
      <section
        className="container mt-80 px-3 
       md:mt-[225px] 
       lg:px-4
       xl:px-14
       2xl:px-12
       3xl:pl-[114px] 3xl:pr-[122px] "
      >
        <form
          className=" w-full rounded-[10px] border border-[#84878B]/20 py-5 px-4
          md:w-[744px] md:py-6 
          lg:w-[992px] lg:py-8 lg:px-6
          xl:w-[1168px] xl:py-8 xl:px-6
          2xl:w-[1440px] 2xl:py-10 2xl:px-12
          3xl:w-[1492px] 3xl:py-12 3xl:px-14"
        >
          <div className="justify-Start flex flex-col ">
            <p
              className="text-[22px] font-bold leading-[30px] text-secondary
             md:text-[26px] md:leading-[40px]
             lg:text-[30px] lg:leading-[48px] "
            >
              {router.locale === `fr` ? `Vos ` : `Your`}
              <span className="text-primary ">
                {router.locale === `fr` ? `Informations` : `Information`}
              </span>
            </p>
            <div
              className="mt-5 flex flex-row flex-wrap justify-between gap-3
             md:mt-5 md:gap-4
             2xl:mt-[30px] 2xl:gap-8
             3xl:mt-[30px] 3xl:gap-[46px] "
            >
              <div className="w-[90%] md:w-[31%]">
                <BaseInput
                  inputType="firstName"
                  identifier="firstName"
                  label={router.locale === `fr` ? `Prénom` : `First Name`}
                  groupClass="pb-[10px]"
                  onchange={(e) => onchange(e)}
                  placeholder={
                    router.locale === "fr"
                      ? `Entrez votre nom`
                      : `Enter your Name`
                  }
                  // value={formData.ambassy}
                  // error={error}
                />
              </div>
              <div className="w-[90%] md:w-[31%]">
                <BaseInput
                  inputType="lastName"
                  identifier="lastName"
                  label={
                    router.locale === `fr` ? `Nom de famille` : `Last Name`
                  }
                  groupClass="pb-[10px]"
                  onchange={(e) => onchange(e)}
                  placeholder={
                    router.locale === "fr"
                      ? `entrez votre nom `
                      : `Enter your Name`
                  }
                  // value={formData.ambassy}
                  // error={error}
                />
              </div>
              <div className="w-[90%] md:w-[31%]">
                <BaseInput
                  inputType="title"
                  identifier="title"
                  label={router.locale === `fr` ? `Titre` : `title`}
                  groupClass="pb-[10px]"
                  onchange={(e) => onchange(e)}
                  placeholder={
                    router.locale === "fr"
                      ? `Entrez votre Titre`
                      : `Enter your title`
                  }
                  // value={formData.ambassy}
                  // error={error}
                />
              </div>
              <div className="w-[90%] md:w-[31%]">
                <BaseInput
                  inputType="organization"
                  identifier="organization"
                  label={router.locale === `fr` ? `organisme` : `organization`}
                  groupClass="pb-[10px]"
                  onchange={(e) => onchange(e)}
                  placeholder={
                    router.locale === "fr"
                      ? `Tapez votre organisation`
                      : `Type your Organization`
                  }
                  // value={formData.ambassy}
                  // error={error}
                />
              </div>
              <div className="w-[90%] md:w-[31%]">
                <BaseInput
                  inputType="email"
                  identifier="email"
                  label={router.locale === `fr` ? `e-mail` : `email`}
                  groupClass="pb-[10px]"
                  onchange={(e) => onchange(e)}
                  placeholder={
                    router.locale === "fr"
                      ? `Entrez votre identifiant de messagerie`
                      : `Enter your mail ID`
                  }
                  // value={formData.ambassy}
                  // error={error}
                />
              </div>
              <div className="w-[90%] md:w-[31%]">
                <BaseInput
                  inputType="phoneNumber"
                  identifier="phoneNumber"
                  label={router.locale === `fr` ? `Téléphone` : `telephone`}
                  groupClass="pb-[10px]"
                  onchange={(e) => onchange(e)}
                  placeholder={`+1`}
                  // value={formData.ambassy}
                  // error={error}
                />
              </div>
            </div>
            <p
              className="pt-6 text-[22px] font-bold leading-[30px] text-secondary 
             md:pt-8 md:text-[26px] md:leading-[40px]
             lg:pt-10 lg:text-[30px] lg:leading-[48px]"
            >
              {router.locale === "fr" ? `Supplémentaire` : `Additional`}
            </p>
            <div
              className="flex flex-col justify-start gap-3
             md:flex-row lg:gap-8 xl:gap-[46px]"
            >
              <div className="w-full md:w-[65%]">
                <label
                  className="mt-5 text-[12px] font-semibold capitalize leading-5 text-black-secondary 
                  md:mt-[30px] md:text-[13px] 
                  lg:text-[16px] lg:leading-[30px] 
                  xl:text-[18px] 2xl:text-[20px]"
                >
                  {router.locale === "fr" ? `Message` : `Message`}
                </label>
                <textarea
                  className="mt-2.5 h-16 w-full rounded-[10px] border border-secondary/20 focus:border-primary focus:!ring-primary 
                  md:mt-1.5 md:h-24
                  lg:mt-2.5 lg:h-[154px]
                  xl:mt-[15px] xl:h-[225px]"
                ></textarea>
              </div>
              <div className="flex w-full flex-col justify-start md:w-[31%]">
                <BaseInput
                  inputType="text"
                  identifier="ambassy"
                  label={
                    router.locale === `fr`
                      ? `Comment avez-vous entendu parler de nous?`
                      : `How did you hear about us?`
                  }
                  groupClass="pb-[10px] "
                  onchange={(e) => onchange(e)}
                  placeholder={
                    router.locale === `fr` ? `Instagram` : `Instagram`
                  }
                  // value={formData.ambassy}
                  // error={error}
                />
                <button
                  className=" mt-5 flex h-9 w-[35%] flex-row items-center justify-center rounded-[10px] bg-primary text-white-primary
                   md:w-full lg:mt-14 lg:h-12 xl:mt-[88px] xl:h-[70px] "
                  type="submit"
                  //   onClick={addReservation}
                >
                  <Send set="light" primaryColor="white" />
                  <p
                    className="text-[11px] font-medium capitalize leading-5 
                     md:text-[14px] lg:text-[16px] lg:leading-[30px] xl:text-[18px] 2xl:text-[20px] "
                  >
                    {router.locale === "fr" ? `envoyer` : ` send`}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Reservation;
