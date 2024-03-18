import Table from "@/components/Table";
import Tabs, { contentProps } from "@/components/Tabs";
import UserLayout from "@/layouts/UserLayout";
import AppContext from "context/AppContext";
import React, {
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import StatusButton from "@/components/StatusButton";
import Modal from "@/components/Modal";

import ProfileInfo from "@/components/ProfileInfo";
import VisaModal from "@/components/Modal/VisaModal";
import PassportModal from "@/components/Modal/PassportModal";
import { useRouter } from "next/router";
import PageTitles from "@/utils/statics";
import getProfile from "@/utils/getProfile";

type columnData = {
  heading: string;
  headingFr?: string;
  value: string | number;
  sortable?: boolean;
  CustomComponent?: any;
}[];

const VisaStatusButton = ({ data }: any) => {
  const router = useRouter();
  return (
    <>
      {new Date(data).getTime() - new Date().getTime() > 0 ? (
        <p className="flex  h-[34px] flex-col justify-center rounded-[24px] bg-[#D9F3DF] text-[#42C15F]">
          {router.locale === `fr` ? `Valide` : `Valid`}
        </p>
      ) : (
        <p className="flex  h-[34px] flex-col justify-center rounded-[24px] bg-[#FDE1E1] text-[#F36A6A]">
          {router.locale === `fr` ? `Expiré` : `Expired`}
        </p>
      )}
    </>
  );
};

const visaColumn: columnData = [
  {
    heading: "Issuing Country",
    headingFr: "Pays émetteur",
    value: "issuingCountry",
  },
  {
    heading: "Type",
    headingFr: "Taper",
    value: "visaType",
  },
  {
    heading: "Number",
    headingFr: "Nombre",
    value: "number",
  },
  {
    heading: "Issuing Date",
    headingFr: "Date d'émission",
    value: "issuingDate",
  },
  {
    heading: "Expiring Date ",
    headingFr: "Date d'expiration",
    value: "expiringDate",
  },
  {
    heading: "First Name",
    headingFr: "Prénom",
    value: "firstName",
  },
  {
    heading: "Middle Name",
    headingFr: "Deuxième nom",
    value: "middleName",
  },
  {
    heading: "Last Name",
    headingFr: "Nom de famille",
    value: "lastName",
  },
  {
    heading: "status",
    headingFr: "statut",
    value: "expiringDate",
    CustomComponent: VisaStatusButton,
  },
];
const passportColumn: columnData = [
  {
    heading: "Ambassy",
    headingFr: "Ambassade",
    value: "ambassy",
  },
  {
    heading: "Number",
    headingFr: "Nombre",
    value: "number",
    sortable: true,
  },
  {
    heading: "Issuing Date",
    headingFr: "Date d'émission",
    value: "issuingDate",
  },
  {
    heading: "Expiring Date  ",
    headingFr: "Date d'expiration",
    value: "expiringDate",
  },
  {
    heading: "Number of Entries",
    headingFr: "Nombre d'entrées",
    value: "numberOfEntries",
  },
  {
    heading: "status",
    headingFr: "statut",
    value: "status",
    CustomComponent: StatusButton,
  },
];

const Profile = () => {
  const [profile, setProfile]: any = useState([]);
  const [passport, setPassport]: any = useState([]);
  const [visa, setVisa]: any = useState([]);
  const { state } = useContext(AppContext);
  const [visaModal, setVisaModal] = useState(false);
  const [passPortModal, setPassPortVisaModal] = useState(false);
  const router = useRouter();

  const openVisaModal: () => void = () => {
    setVisaModal(true);
  };
  const openPassportModal: () => void = () => {
    setPassPortVisaModal(true);
  };

  useEffect(() => {
    if(state?.token){
      (async () => {
      try {
        const profile = await getProfile(state.token)
        console.log("🚀 ~ file: profile.tsx:154 ~ profile", profile)
        setProfile(profile);
        setPassport(profile.passportInformation.reverse());
        setVisa(profile.visaInformation.reverse());
      } catch (error) {
        console.log(error);
        
      }
    })();
  }
  }, [state, visaModal, passPortModal]);

  const tabValues = [
    {
      tabTitle: "Passport",
      tabTitleFr: "Passeport",
      tabComponent: <Table column={passportColumn} tableData={passport} />,
      buttonAction: () => openPassportModal(),
      buttonText:
        router.locale === `fr`
          ? `Ajouter de nouvelles informations de passeport`
          : "Add New Passport Information ",
    },
    {
      tabTitle: "visa",
      tabTitleFr: "visa",
      tabComponent: <Table column={visaColumn} tableData={visa} />,
      buttonAction: () => openVisaModal(),
      buttonText:
        router.locale === `fr`
          ? `Ajouter de nouvelles informations sur le visa`
          : "Add New visa Information ",
    },
  ];

  return (
    <>
      <ProfileInfo />
      <Tabs
        tabContent={tabValues}
        heading={
          router.locale === `fr`
            ? `Information de voyage`
            : "Travel Information"
        }
      />
      <Modal toggleState={visaModal} actionOnBlur={() => setVisaModal(false)} bodyClass='!h-[560px]'>
        <VisaModal closeModal={setVisaModal} />
      </Modal>
      <Modal
        toggleState={passPortModal}
        actionOnBlur={() => setPassPortVisaModal(false)}
      >
        <PassportModal closeModal={setPassPortVisaModal} />
      </Modal>
    </>
  );
};

export default Profile;

Profile.defineLayout = (page: ReactElement, props: any): ReactNode => {
  return (
    <UserLayout
      title={PageTitles.profiles}
      breadcumb={{ text: "profile", link: "profile", textFr: "profil" }}
    >
      {page}
    </UserLayout>
  );
};
