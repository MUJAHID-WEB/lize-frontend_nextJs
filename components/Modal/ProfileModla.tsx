import AppContext from 'context/AppContext';
import React, { useContext, useEffect, useState } from 'react';
import BaseInput, { DateInput, FileInput, SelectInput } from '../Base';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
let allVisaTypes: any = ['Select Your Visa Type', 'Diplomatique', 'normal'];
const initialFormData = Object.freeze({});
function ProfileModal({ closeModal, profileInfo }: any) {
  const [formData, setFormData]: any = useState(initialFormData);
  const [birthDate, setBirthDate] = useState<any | null>();
  const [expiringDate, setExpiringDate] = useState<any | null>();
  const [issuingCountry, setIssuingCountry] = useState<string>();
  const [visaType, setVisaType] = useState<string>();
  const [country, setCountry] = useState<any>([]);
  const [doc, setDoc] = useState<any>();
  const [error, setError] = useState<any>([]);
  const [fileError, setFileError] = useState<any>();

  const { state } = useContext(AppContext);
  const router = useRouter();

  const onchange = (e: any) => {
    e.target.name == 'issuingCountry' && setIssuingCountry(e.target.value);
    e.target.name == 'visaType' && setVisaType(e.target.value);
    // let fieldName = ['firstName', 'lastName', 'middleName', 'issuingCountry','visaType','expiringDate','issuingDate']
    // if(!fieldName?.includes(e.target.name)){

    // }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clear = () => {
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      number: '',
      expiringDate: '',
      issuingDate: '',
    });
    setDoc([]);
    setIssuingCountry(country);
    setBirthDate('');
    setExpiringDate('');

    setVisaType(allVisaTypes);
    setError([]);
    setFileError('');
    closeModal(false);
  };

  const addVisa = async (e: any) => {
    e.preventDefault();
    let data: any = new FormData();

    for (let key in formData) {
      data.append(key, formData[key]);
    }

    birthDate;
    birthDate &&
      data.append('birthDate', moment(birthDate).format().split('T')[0]);
    // data.append('visaDocument',doc[0]);
    data.append('avatar', doc[0]);

    try {
      let res = await toast.promise(
        axios.patch(
          `${process.env.NEXT_PUBLIC_URL}/profile/profile-update`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: state.token,
            },
          }
        ),
        {
          pending: 'Please wait....',
          success: 'Your visa information added successfully',
          error: 'Something went wrong 🤯',
        }
      );
      console.log("🚀 ~ file: ProfileModla.tsx:90 ~ addVisa ~ res:", res.data)
      //  data.reset()
      e.target.reset();
      clear();
    } catch (error: any) {
      setError(error.response.data.error);
    }
  };

  useEffect((): any => {
    setBirthDate(new Date(profileInfo?.birthDate || '2020-5-5'));
    setDoc(profileInfo?.avatar);

    setFormData({
      ...formData,
      firstName: profileInfo?.firstName,
      middleName: profileInfo?.middleName,
      email: profileInfo?.email,
      phoneNumber: profileInfo?.phoneNumber,
      language: profileInfo?.language,
      address: profileInfo?.address,
    });
    return () => {};
  }, [profileInfo]);

  return (
    <>
      <p className='flex flex-row justify-center font-semibold leading-[30px] text-secondary'>
        {router.locale === `fr`
          ? `informations de l'utilisateur`
          : `User Information`}
      </p>
      <form
        className='mt-[41px] flex w-[984px] flex-col justify-start gap-[30px]'
        onSubmit={addVisa}
      >
        <div className='flex flex-row justify-between gap-[32px]'>
          <BaseInput
            inputType='firstName'
            identifier='firstName'
            label={router.locale === `fr` ? `Prénom` : `First Name`}
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === 'fr' ? `Entrez votre nom` : `Enter your Name`
            }
            value={formData.firstName}
            error={error}
          />
          <BaseInput
            inputType='middleName'
            identifier='middleName'
            label={router.locale === `fr` ? `Deuxième nom` : `Middle Name`}
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === 'fr' ? `Entrez votre nom` : `Enter your Name`
            }
            value={formData.middleName}
            error={error}
          />
        </div>

        <div className='flex flex-row justify-between gap-[32px]'>
          <SelectInput
            identifier='language'
            label={router.locale === `fr` ? `Langue` : 'Language'}
            initialValue={formData.language}
            updatedValue={(e) => onchange(e)}
            options={['English', 'France']}
            error={error}
          />

          <DateInput
            label={router.locale === `fr` ? `Date de naissance` : `Birth Date`}
            date={birthDate}
            selectedDate={(e: Date) => setBirthDate(e)}
            identifier='issuingDate'
            error={error}
          />
          {/* <FormValidator message={error?.number} /> */}
        </div>
        <div className='flex flex-row justify-between gap-[32px]'>
          <BaseInput
            inputType='email'
            identifier='email'
            label={router.locale === `fr` ? `adresse e-mail` : `email address`}
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === `fr` ? `Entrer votre Email` : `Enter your email`
            }
            value={formData.email}
            error={error}
          />

          <BaseInput
            inputType='phoneNumber'
            identifier='phoneNumber'
            label={
              router.locale === `fr` ? `numéro de téléphone` : `phone number`
            }
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === `fr`
                ? `Entrez votre numéro`
                : `Enter your Number`
            }
            value={formData.phoneNumber}
            error={error}
          />
        </div>
        <div className='flex flex-row justify-between gap-[32px]'>
          <BaseInput
            inputType='address'
            identifier='address'
            label={router.locale === `fr` ? `adresse` : `address`}
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === `fr`
                ? `Entrez votre adresse`
                : `Enter your address`
            }
            value={formData.address}
            error={error}
          />
        </div>
        <div className='flex flex-row justify-between gap-[32px]'>
          <FileInput
            label={router.locale === `fr` ? `document` : `document`}
            initialValue={doc}
            updatedValue={(e) => setDoc(e)}
            error={fileError}
          />
        </div>
        <div className='mt-[30px] flex flex-row justify-start gap-5'>
          <button
            type='button'
            className='btn-tertiary  flex h-[70px] w-[240px] flex-row items-center justify-center'
            onClick={clear}
          >
            {router.locale === `fr` ? `Annuler` : `Cancel`}
          </button>
          <button
            type='submit'
            className='btn-primary  flex h-[70px] w-[240px] flex-row items-center justify-center'
          >
            {router.locale === `fr`
              ? `Sauvegarder les modifications`
              : `Save Changes`}
          </button>
        </div>
      </form>
    </>
  );
}

export default ProfileModal;
