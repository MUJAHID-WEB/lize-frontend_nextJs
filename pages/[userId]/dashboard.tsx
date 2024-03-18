import React, {
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import UserLayout from '@/layouts/UserLayout';
import Table from '@/components/Table';
import axios from 'axios';
import AppContext from 'context/AppContext';
import Modal from '@/components/Modal';
import MakeReservation from '@/components/MakeReservation';
import LatestNews from '@/components/Card/LatestNews';
import SocialMedia from '@/components/Card/SocialMedia';
import { toast } from 'react-toastify';
import ThankYouModal from '@/components/Modal/ThankYouModal';
import DateFormate from 'utils/dateFormater';
import { useRouter } from 'next/router';
import PageTitles from '@/utils/statics';
type columnData = {
  heading: string;
  headingFr?: string;
  value: string | number;
  sortable?: boolean;
  CustomComponent?: any;
}[];

const statusButton = ({ data }: any) => {
  return (
    <>
      {data.toLowerCase() == 'started' ? (
        <p className='flex  h-[34px] flex-col justify-center rounded-[24px] bg-[#E3EFF7] text-sm text-[#72ADD7]'>
          {data}
        </p>
      ) : data.toLowerCase() == 'completed' ? (
        <p className='flex  h-[34px] flex-col justify-center rounded-[24px] bg-[#D1D2E0] text-sm text-[#172066]'>
          {data}
        </p>
      ) : (
        <p className='flex h-[34px] flex-col justify-center rounded-[24px] bg-[#E6E7E8] text-sm text-gray'>
          {data}
        </p>
      )}
    </>
  );
};

const column: columnData = [
  {
    heading: 'trip',
    headingFr: 'voyage',
    value: 'tripsId',
    sortable: true,
  },
  {
    heading: 'booked By',
    headingFr: 'réservé par',
    value: 'keyPassenger',
    sortable: true,
  },
  {
    heading: 'aircraft',
    headingFr: 'avion',
    value: 'reservation.aircraftId.model',
  },
  {
    heading: 'city',
    headingFr: 'ville',
    value: 'reservation.departingCity',
  },
  {
    heading: 'start Date',
    headingFr: 'date de début',
    value: 'reservation.startDate',
    CustomComponent: DateFormate,
  },
  {
    heading: 'end Date',
    headingFr: 'date de fin',
    value: 'reservation.endDate',
    CustomComponent: DateFormate,
  },
  {
    heading: 'passengers',
    headingFr: 'passengers',
    value: 'numberOfPassengers',
    // CustomComponent: countPassenger
  },
  {
    heading: 'status',
    headingFr: 'statut',
    value: 'tripsStatus',
    CustomComponent: statusButton,
  },
  {
    heading: 'cost',
    headingFr: 'Coût',
    value: 'cost',
  },
];
const Dashboard = () => {
  const router = useRouter();
  const [dataTable, setDataTable]: any = useState([]);
  const [reservationModal, setReservationModal] = useState<any>(false);
  const [id, setId] = useState<any>();

  const { state, setRerender } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        const trips = await axios.post(
          '/api/trips/getUserTrips?status=Started',
          {
            token: state.token,
          }
        );
        setDataTable(trips.data);
      } catch (error) {}
    })();
  }, [state]);

  const submitReservation = async (data: any) => {
    let res: any = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/reservation`,
      data,
      {
        headers: {
          Authorization: state.token,
        },
      }
    );
    if (res.data.status === 200) {
      setId('T' + res.data.trips.toString().slice(-4));
      setReservationModal(true);
    }

    setRerender(!state.render);
  };

  return (
    <>
      <div className='mb-5 w-full'>
        <MakeReservation
          submitReservation={submitReservation}
          planeId={''}
          closeModal={''}
        />
      </div>
      <Modal
        toggleState={reservationModal}
        actionOnBlur={() => setReservationModal(false)}
        bodyClass='!p-0 !min-h-0 '
      >
        {/* <MakeReservation submitReservation={submitReservation} planeId = {planeId} closeModal={setReservationModal}/> */}
        <ThankYouModal closeModal={setReservationModal} data={id} />
      </Modal>
      <Table
        column={column}
        tableData={dataTable}
        title={router.locale === `fr` ? `voyages en cours` : `current trips`}
      />
      <div className='flex w-full flex-row justify-between gap-5 pt-5'>
        <LatestNews />
        <SocialMedia />
      </div>
    </>
  );
};

export default Dashboard;

Dashboard.defineLayout = (page: ReactElement, props: any): ReactNode => {
  return (
    <UserLayout
      title={PageTitles.dashboard}
      breadcumb={{
        text: 'dashboard',
        link: 'dashboard',
        textFr: 'tableau de bord',
      }}
    >
      {page}
    </UserLayout>
  );
};
