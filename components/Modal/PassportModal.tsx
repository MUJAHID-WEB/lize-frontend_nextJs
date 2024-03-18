import AppContext from 'context/AppContext';
import React, { useContext, useState } from 'react';
import BaseInput, { DateInput, FileInput, SelectInput } from '../Base';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const initialFormData = Object.freeze({});
// const country = ['bd', 'in', 'de', 'ef', 'gr', 'wer', 'fd', 'asd'];
function PassportModal({ closeModal }: any) {
  const [issueDate, setIssueDate] = useState<any | null>();
  const [expiringDate, setExpiringDate] = useState<any | null>();
  const [formData, setFormData]: any = useState(initialFormData);
  const [doc, setDoc] = useState<any>();
  const [error, setError] = useState<any>([]);
  const [fileError, setFileError] = useState<any>();

  const { state } = useContext(AppContext);
  const router = useRouter();

  const onchange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clear = () => {
    setFormData({
      ambassy: '',
      number: '',
      expiringDate: '',
      issuingDate: '',
    });
    setDoc('');
    setIssueDate('');
    setExpiringDate('');
    setError([]);
    setFileError('');
    closeModal(false);
  };

  const addPassport = async (e: any) => {
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
        data.append('passportDocument', file);
      });
    } else {
      setFileError('This file is required.');
    }

    try {
      let res = await toast.promise(
        axios.post(`${process.env.NEXT_PUBLIC_URL}/passport`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: state.token,
          },
        }),
        {
          pending: 'Please wait....',
          success: 'Your passport information added successfully',
          error: 'Something went wrong 🤯',
        }
      );
      console.log('🚀 ~ file: PassportModal.tsx:79 ~ addPassport ~ res', res);
      closeModal(false);
      e.target.reset();
      clear();
    } catch (error: any) {
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <p className='flex flex-row justify-center font-semibold leading-[30px] text-secondary'>
        {router.locale === `fr`
          ? `Ajouter une nouvelle information de passeport`
          : `Add a new Passport Information`}
      </p>
      <form
        className='mt-[41px] flex w-[984px] flex-col justify-start gap-[30px]'
        onSubmit={addPassport}
      >
        <div className='flex flex-row justify-between gap-[32px]'>
          <BaseInput
            inputType='ambassy'
            identifier='ambassy'
            label={router.locale === `fr` ? `ambassade` : `ambassy`}
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === `fr`
                ? `Ambassade de Côte d'Ivoire au Togo`
                : `Embassy Cote d'Ivoire in Togo`
            }
            value={formData.ambassy}
            error={error}
          />
          {/* <FormValidator message={error?.lastName} /> */}
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
            onClick={() => clear()}
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

export default PassportModal;
