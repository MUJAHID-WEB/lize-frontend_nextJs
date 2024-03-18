import AppContext from 'context/AppContext';
import React, { useContext, useEffect, useState } from 'react';
import BaseInput, { DateInput, FileInput, SelectInput } from '../Base';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const initialFormData = Object.freeze({});

function OrganizationModal({ closeModal, organization }: any) {
  const [formData, setFormData]: any = useState(initialFormData);
  const [error, setError] = useState<any>([]);
  const { state } = useContext(AppContext);
  const router = useRouter();

  const onchange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clear = () => {
    setError([]);
    closeModal(false);
  };

  const updateOrganizationInformation = async (e: any) => {
    e.preventDefault();

    try {
      let res = await toast.promise(
        axios.patch(
          `${process.env.NEXT_PUBLIC_URL}/organization/update-organization`,
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: state.token,
            },
          }
        ),
        {
          pending: 'Please wait....',
          success: 'Your organization information update successfully',
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
    setFormData({
      ...formData,
      organizationName: organization?.organizationName,
      motive: organization?.motive,
      organizationEmail: organization?.organizationEmail,
      organizationPhoneNumber: organization?.organizationPhoneNumber,
      address: organization?.address,
    });
    return () => {};
  }, [organization]);

  return (
    <>
      <p className='flex flex-row justify-center font-semibold leading-[30px] text-secondary'>
        {router.locale === `fr`
          ? `Informations sur l'organisation`
          : `Organization Information`}
      </p>
      <form
        className='mt-[41px] flex w-[984px] flex-col justify-start gap-[30px]'
        onSubmit={updateOrganizationInformation}
      >
        <div className='flex flex-row justify-between gap-[32px]'>
          <BaseInput
            inputType='organizationName'
            identifier='organizationName'
            label={
              router.locale === `fr`
                ? `nom de l'organisation`
                : `Organization Name`
            }
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === `fr`
                ? `Entrez le nom de votre organisation`
                : `Enter your Organization Name`
            }
            value={formData?.organizationName}
            error={error}
          />
          <SelectInput
            identifier='motive'
            label={router.locale === `fr` ? `motif` : 'motive'}
            initialValue={formData?.motive}
            updatedValue={(e) => onchange(e)}
            options={['Profitable', 'Not for Profit']}
            error={error}
          />
        </div>

        <div className='flex flex-row justify-between gap-[32px]'>
          <BaseInput
            inputType='organizationEmail'
            identifier='organizationEmail'
            label={router.locale === `fr` ? `Adresse e-mail` : `Email Address`}
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === `fr`
                ? `Saisissez l'e-mail de votre organisation`
                : `Enter your Organization Email`
            }
            value={formData?.organizationEmail}
            error={error}
          />

          <BaseInput
            inputType='organizationPhoneNumber'
            identifier='organizationPhoneNumber'
            label={
              router.locale === `fr` ? `Numéro de téléphone` : `Phone Number`
            }
            groupClass='pb-[10px]'
            onchange={(e) => onchange(e)}
            placeholder={
              router.locale === `fr`
                ? `Numéro de téléphone de l'organisation`
                : `organization  Phone Number`
            }
            value={formData?.organizationPhoneNumber}
            error={error}
          />
          {/* <FormValidator message={error?.number} /> */}
        </div>

        <BaseInput
          inputType='address'
          identifier='address'
          label={router.locale === `fr` ? `adresse` : `address`}
          groupClass='pb-[10px]'
          onchange={(e) => onchange(e)}
          placeholder={
            router.locale === `fr`
              ? `Entrez votre adresse`
              : `Enter your Address`
          }
          value={formData?.address}
          error={error}
        />

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

export default OrganizationModal;
