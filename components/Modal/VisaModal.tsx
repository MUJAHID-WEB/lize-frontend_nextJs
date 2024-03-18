import AppContext from 'context/AppContext';
import React, { useContext, useEffect, useState } from 'react';
import BaseInput, { DateInput, FileInput, SelectInput } from '../Base';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
let allVisaTypes: any = ['Select Your Visa Type', 'Diplomatique', 'normal'];
const initialFormData = Object.freeze({});
function VisaModal({ closeModal }: any) {
  const [issueDate, setIssueDate] = useState<any | null>();
  const [expiringDate, setExpiringDate] = useState<any | null>();
  const [formData, setFormData]: any = useState(initialFormData);
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
    setIssueDate('');
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

    expiringDate &&
      data.append('expiringDate', moment(expiringDate).format().split('T')[0]);
    issueDate &&
      data.append('issuingDate', moment(issueDate).format().split('T')[0]);
    // data.append('visaDocument',doc[0]);
    if (doc) {
      doc.map((file: any, i: number) => {
        data.append('visaDocument', file);
      });
    } else {
      setFileError('This file is required.');
    }

    try {
      let res = await toast.promise(
        axios.post(`${process.env.NEXT_PUBLIC_URL}/visa`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: state.token,
          },
        }),
        {
          pending: 'Please wait....',
          success: 'Your visa information added successfully',
          error: 'Something went wrong 🤯',
        }
      );
      //  data.reset()
      e.target.reset();
      clear();
    } catch (error: any) {
      setError(error.response.data.error);
    }
  };

  useEffect((): any => {
    (async () => {
      let arr: any = [];
      let res = await axios.get('https://restcountries.com/v3.1/all');
      res.data.map((country: any) => {
        arr.push(country.name.common);
      });
      arr.sort();
      arr.unshift('Select visa Issuing Country');
      setCountry(arr);
    })();
    return () => {};
  }, []);

  return (
    <>
      <p className='flex flex-row justify-center font-semibold leading-[30px] text-secondary'>
        {router.locale === `fr`
          ? `Ajouter une nouvelle information sur le visa`
          : `Add a new Visa Information`}
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
          <BaseInput
            inputType='lastName'
            identifier='lastName'
            label={router.locale === `fr` ? `Nom de famille` : `Last Name`}
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === 'fr' ? `Entrez votre nom` : `Enter your Name`
            }
            value={formData.lastName}
            error={error}
          />

          <BaseInput
            inputType='number'
            identifier='number'
            label={router.locale === `fr` ? `Nombre` : `Number`}
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={router.locale === `fr` ? `Nombre` : `Number`}
            value={formData.number}
            error={error}
          />
          {/* <FormValidator message={error?.number} /> */}
        </div>
        <div className='flex flex-row justify-between gap-[32px]'>
          <DateInput
            label={router.locale === `fr` ? `date d'émission` : `issuing date`}
            date={issueDate}
            selectedDate={(e: Date) => setIssueDate(e)}
            identifier='issuingDate'
            error={error}
          />
          <DateInput
            label={
              router.locale === `fr` ? `date d'expiration` : `expiring date`
            }
            date={expiringDate}
            selectedDate={(e: Date) => setExpiringDate(e)}
            identifier='expiringDate'
            error={error}
          />
        </div>
        <div className='flex flex-row justify-between gap-[32px]'>
          <SelectInput
            identifier='issuingCountry'
            label={router.locale === `fr` ? `pays émetteur` : 'issuing country'}
            initialValue={issuingCountry}
            updatedValue={(e) => onchange(e)}
            options={country}
            error={error}
          />
          <SelectInput
            identifier='visaType'
            label={router.locale === `fr` ? `taper` : 'type'}
            initialValue={visaType}
            updatedValue={(e) => onchange(e)}
            options={allVisaTypes}
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
            {router.locale === `fr` ? `Ajouter un document` : `Add Document`}
          </button>
        </div>
      </form>
    </>
  );
}

export default VisaModal;
