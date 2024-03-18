import BaseInput from '@/components/Base';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function ContactUs() {
  const onchange = (e: any) => {};
  const handleForm = () => {};
  const router = useRouter();
  return (
    <>
      <Header headerType='secondary' />
      <section className='container mt-[215px] rounded-[10px] border border-secondary/20 px-3 md:px-0 '>
        <div className='mt-6 flex justify-center  lg:mt-10 '>
          <p
            className='text-[24px]  font-semibold leading-9 text-primary
           md:text-[26px] md:leading-9
           lg:text-[30px] lg:leading-[48px] 
           xl:text-[40px] xl:leading-[60px]
           2xl:text-[45px] 2xl:leading-[70px]
           3xl:text-[50px] 3xl:leading-[80px] '
          >
            {router.locale === `fr` ? `Contactez` : `Contact`}
            <span className=' text-[#172066]'>
              {router.locale === `fr` ? `-Nous` : ` Us`}
            </span>
          </p>
        </div>
        <div
          className='mt-6 flex w-full flex-col justify-start 
           md:mt-8 md:flex-row md:gap-14
           lg:mt-10 lg:gap-20
           xl:mt-[50px] xl:gap-24
           2xl:mt-[60px] 2xl:gap-[115px]
           3xl:mt-[68px] 3xl:gap-[130px] '
        >
          <form
            className='my-5 flex w-full flex-col items-start justify-start gap-4 px-3
            md:ml-11 md:w-[404px] md:px-9
            lg:ml-[60px] lg:w-[540px]
            xl:ml-[76px] xl:w-[673px]
            2xl:ml-[92px] 2xl:w-[808px]
            3xl:ml-[103px] 3xl:w-[909px]'
            onSubmit={handleForm}
          >
            <BaseInput
              inputType='firstName'
              identifier='firstName'
              label={router.locale === `fr` ? `Prénom` : `First Name`}
              groupClass='pb-[10px]'
              onchange={(e) => onchange(e)}
              placeholder={
                router.locale === 'fr' ? `Entrez votre nom` : `Enter your Name`
              }
            />
            <BaseInput
              inputType='organization'
              identifier='organization'
              label={router.locale === `fr` ? `organisme` : `organization`}
              groupClass='pb-[10px]'
              onchange={(e) => onchange(e)}
              placeholder={
                router.locale === 'fr'
                  ? `Tapez votre organisation`
                  : `Type your Organization`
              }
            />
            <BaseInput
              inputType='title'
              identifier='title'
              label={router.locale === `fr` ? `Titre` : `title`}
              groupClass='pb-[10px]'
              onchange={(e) => onchange(e)}
              placeholder={
                router.locale === 'fr'
                  ? `Entrez votre Titre`
                  : `Enter your title`
              }
            />
            <div className='flex w-full flex-row justify-between gap-[31px]'>
              <BaseInput
                inputType='country'
                identifier='country'
                label={router.locale === `fr` ? `PAYS` : `Country`}
                groupClass='pb-[10px]  '
                onchange={(e) => onchange(e)}
                placeholder={
                  router.locale === 'fr'
                    ? `Entrez votre pays`
                    : `Enter your Country`
                }
              />

              <BaseInput
                inputType='city'
                identifier='city'
                label={router.locale === `fr` ? `VILLE` : `City`}
                groupClass='pb-[10px] '
                onchange={(e) => onchange(e)}
                placeholder={
                  router.locale === 'fr'
                    ? `Entrez votre Ville`
                    : `Enter your City`
                }
              />
            </div>

            <div className='flex w-full flex-row justify-between gap-[31px]'>
              <BaseInput
                inputType='phone'
                identifier='phone'
                label={router.locale === `fr` ? `Téléphone` : `telephone`}
                groupClass='pb-[10px]  '
                onchange={(e) => onchange(e)}
                placeholder={
                  router.locale === 'fr'
                    ? `Entrez votre numéro de téléphone`
                    : `Enter your Phone Number`
                }
              />
              <BaseInput
                inputType='email'
                identifier='email'
                label={router.locale === `fr` ? `e-mail` : `MAIL`}
                groupClass='pb-[10px]  '
                onchange={(e) => onchange(e)}
                placeholder={
                  router.locale === 'fr'
                    ? `Entrez votre adresse email`
                    : `Enter your Email Address`
                }
              />
            </div>

            {/* <BaseInput
                inputType='firstName'
                identifier='firstName'
                label='Prenom'
                groupClass='pb-[10px]'
                onchange={(e) => onchange(e)}
              /> */}
            <label
              className='text-[14px] font-semibold capitalize leading-5 text-black-secondary
               md:mt-[30px] md:text-[13px] 
               lg:text-[16px] lg:leading-[30px] 
               xl:text-[18px] 2xl:text-[20px]'
            >
              Message
            </label>
            <textarea
              className='h-28  w-full rounded-[10px] border border-secondary/20 focus:border-primary  focus:!ring-primary 
            lg:h-36 xl:h-48 2xl:h-[225px]'
            ></textarea>

            <button
              className='btn-primary w-[40%] py-2 text-[12px] font-medium uppercase leading-6 
              md:mb-[78px] md:w-full md:text-[14px] md:leading-8
              lg:py-4 lg:text-[16px] 
              xl:text-[18px] 2xl:py-5 2xl:text-[20px]'
            >
              {router.locale === `fr` ? `nous faire parvenir` : `Submit`}
            </button>
          </form>
          <div
            className='flex flex-col items-start justify-start 
           pb-5 md:pr-11 lg:pr-[101px] '
          >
            <p
              className='mt-[14px] text-[20px] font-bold leading-8 text-[#3B3E44]
              md:text-[17px] md:leading-8
              lg:text-[18px] lg:leading-8
              xl:text-[22px] xl:leading-9
              2xl:text-[26px] 2xl:leading-10
              3xl:text-[30px] 3xl:leading-[48px]'
            >
              {router.locale === `fr` ? `Contactez-Nous` : `Contact Us`}
            </p>
            <div
              className='mt-5 w-full  text-[13px] leading-7
              md:mt-6 md:w-[200px] md:text-[14px] md:leading-8
              lg:mt-6 lg:w-[264px] lg:text-[16px] lg:leading-8
              xl:mt-7 xl:w-[330px] xl:text-[18px] 
              2xl:mt-8 2xl:w-[396px] 2xl:text-[22px] 2xl:leading-9
              3xl:mt-10 3xl:w-[446px] 3xl:text-[26px] 3xl:leading-[41px]'
            >
              {router.locale === `fr`
                ? `VOUS POUVEZ NOUS JOINDRE AUSSI PAR TÉLÉPHONE OU MAIL POUR VOS`
                : `YOU CAN ALSO REACH US BY PHONE OR EMAIL FOR YOUR`}
              <br />
              {router.locale === `fr` ? `RÉSERVATIONS.` : `RESERVATIONS.`}
            </div>
            <div className='mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-10'>
              <div className='flex flex-row justify-start gap-2 '>
                <div className='relative w-7 md:h-[19px]'>
                  <Image
                    src='/fr.png'
                    alt=''
                    layout='fill'
                    objectFit='contain'
                  />
                </div>{' '}
                <p>+1 3333333330</p>
              </div>
            </div>
            <div className='mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-10'>
              <div className='flex flex-row justify-start gap-2 '>
                <div className='relative w-7 md:h-[19px]'>
                  <Image
                    src='/us.png'
                    alt=''
                    layout='fill'
                    objectFit='contain'
                  />
                </div>{' '}
                <p>+1 3333333330</p>
              </div>
            </div>
            <div className='mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-10'>
              <div className='flex flex-row justify-start gap-2 '>
                <div className='relative w-7 md:h-[19px]'>
                  <i className='fa-regular fa-envelope text-[24px]'></i>
                </div>{' '}
                <p>lti@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
