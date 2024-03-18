import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CalenderIcon from "./svg/dashboard/CalenderIcon";
import FranceLanguageIcon from "./svg/dashboard/FranceLanguageIcon";
import EditIcon from "./svg/EditIcon";
import PhoneSVG from "./svg/PhoneSVG";
import moment from "moment";
import Modal from "./Modal";
import OrganizationModal from "./Modal/OrganizationModal";
import ProfileModal from "./Modal/ProfileModla";
import axios from "axios";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import getProfile from "@/utils/getProfile";

function ProfileInfo() {
  const [profileModal, setProfileModal] = useState<boolean>(false);
  const [orgModal, setOrgModal] = useState<boolean>(false);
  const [profileInfo, setProfileInfo] = useState<any>();
  const { state } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        const profile = await getProfile(state.token)
        setProfileInfo(profile);
      } catch (error) {}
    })();
  }, [state, profileModal, orgModal]);
  const router = useRouter();
  return (
    <>
      <section className=" mb-5 flex w-full flex-row justify-between rounded-xl bg-white-primary py-5 px-[30px]">
        <div className="flex w-[40%] flex-col justify-start border-r-[1px] border-[#84878B]/40 pr-[50px]">
          <div className="flex flex-row justify-between  ">
            <p className="text-[24px] font-semibold leading-9 text-secondary">
              {router.locale === `fr`
                ? `informations de l'utilisateur`
                : `User Information`}
            </p>
            <div
              className="h-[55px] w-[55px] cursor-pointer"
              onClick={() => setProfileModal(true)}
            >
              <EditIcon />
            </div>
          </div>

          <div className="flex flex-row items-start justify-start gap-5">
            <div className="relative  h-[100px] w-[100px]">
              <Image
                src={profileInfo?.avatar || `/defaultProfile.png`}
                alt="avatar"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <div className="item-start flex flex-col ">
              <p className="text-[20px] font-semibold leading-[30px] text-secondary ">{`${
                profileInfo?.firstName
              } ${profileInfo?.middleName ? profileInfo?.middleName : ""} ${
                profileInfo?.lastName
              }`}</p>
              <div className="mt-[10px] flex flex-row items-center justify-start">
                <p className="text-[16px] font-[500px] leading-6 text-[#84878B] ">
                  {moment(profileInfo?.birthDate).format("LL")}
                </p>
                <span className="mx-[10px] h-[6px] w-[6px] rounded-full  bg-[#84878B]" />
                <p className="text-[16px] font-[500px] leading-6 text-[#84878B] ">
                  {profileInfo?.address}
                </p>
              </div>
              <p className="mt-5 flex flex-row items-center justify-start gap-[12px]">
                <CalenderIcon />
                Joined{" "}
                {moment(profileInfo?.organization?.createdAt).format("LL")}
              </p>
              <p className="mt-5 flex flex-row items-center justify-start gap-[12px]">
                <span className="fib fi-fr h-5 w-9" />
                {profileInfo?.language}
              </p>
            </div>
          </div>

          <div className="mt-[52px] mb-[82px] flex flex-row justify-start gap-[15px]">
            <div className="flex h-[50px] w-[240px] flex-row items-center justify-center gap-[13px] rounded-md border-[1px] border-primary/20 px-[18px]">
              <PhoneSVG />
              <p className="text-[18px]  leading-7 text-primary">
                +{profileInfo?.phoneNumber}
              </p>
            </div>
            <div className="flex h-[50px] w-[320px] flex-row items-center justify-center gap-[13px] rounded-md border-[1px] border-primary/20 px-[18px]">
              <i className="fa-regular fa-envelope text-[24px] text-secondary"></i>
              <p className="text-[18px]  leading-7 text-secondary">
                {profileInfo?.email}
              </p>
            </div>
          </div>
        </div>
        {/*   Information */}
        <div className="flex w-[60%] flex-col justify-start pl-[50px]">
          <div className="flex flex-row justify-between  ">
            <p className="text-[24px] font-semibold leading-9 text-secondary">
              {router.locale === `fr`
                ? `Informations sur l'organisation`
                : `Organization Information`}
            </p>
            <div
              className="h-[55px] w-[55px] cursor-pointer"
              onClick={() => setOrgModal(true)}
            >
              <EditIcon />
            </div>
          </div>
          <p className="text-[20px] font-semibold leading-[30px] text-secondary">
            {profileInfo?.organization?.organizationName}
          </p>
          <div className="mt-[10px] flex flex-row items-center justify-start">
            <p className="text-[16px] font-[500px] leading-6 text-[#84878B] ">
              {profileInfo?.organization?.motive}
            </p>
            <span className="mx-[10px] h-[6px] w-[6px] rounded-full  bg-[#84878B]" />
            <p className="text-[16px] font-[500px] leading-6 text-[#84878B] ">
              {" "}
              {profileInfo?.organization?.address}{" "}
            </p>
          </div>
          <div className="mt-[52px] flex flex-row justify-start gap-[15px]">
            <div className="flex h-[50px] w-[240px] flex-row items-center justify-center gap-[13px] rounded-md border-[1px] border-primary/20 px-[18px]">
              <PhoneSVG />
              <p className="text-[18px]  leading-7 text-primary">
                +
                {profileInfo?.organization?.organizationPhoneNumber ||
                  profileInfo?.phoneNumber}
              </p>
            </div>
            <div className="flex h-[50px] w-[320px] flex-row items-center justify-center gap-[13px] rounded-md border-[1px] border-primary/20 px-[18px]">
              <i className="fa-regular fa-envelope text-[24px] text-secondary"></i>
              <p className="text-[18px]  leading-7 text-secondary">
                {profileInfo?.organization?.organizationEmail ||
                  profileInfo?.email}{" "}
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <Modal
        toggleState={profileModal}
        actionOnBlur={() => setProfileModal(false)}
        bodyClass='!h-[600px]'
      >
        <ProfileModal closeModal={setProfileModal} profileInfo={profileInfo} />
      </Modal>
      <Modal toggleState={orgModal} actionOnBlur={() => setOrgModal(false)} bodyClass='!h-[650px]'>
        <OrganizationModal
          closeModal={setOrgModal}
          organization={profileInfo?.organization}
        />
      </Modal>
    </>
  );
}

export default ProfileInfo;
