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
  useCallback,
} from "react";
import axios from "axios";
import StatusButton from "@/components/StatusButton";
import MyTripsBanner from "@/components/Banners/MyTripsBanner";
import MyTripsBanner2 from "@/components/Banners/MyTripsBanner2";
import MyTripsBanner3 from "@/components/Banners/MyTripsBanner3";
import { useRouter } from "next/router";
import DateFormate from "utils/dateFormater";
import PageTitles from "@/utils/statics";

type columnData = {
  heading: string;
  headingFr?: string;
  value: string | number;
  sortable?: boolean;
  CustomComponent?: any;
}[];

const column: columnData = [
  {
    heading: "trip",
    headingFr: "voyage",
    value: "tripsId",
    sortable: true,
  },
  {
    heading: "booked By",
    headingFr: "réservé par",
    value: "keyPassenger",
    sortable: true,
  },
  {
    heading: "aircraft",
    headingFr: "avion",
    value: "reservation.aircraftId.model",
  },
  {
    heading: "city",
    headingFr: "ville",
    value: "reservation.departingCity",
  },
  {
    heading: "start Date",
    headingFr: "date de début",
    value: "reservation.startDate",
    CustomComponent: DateFormate,
  },
  {
    heading: "end Date",
    headingFr: "date de fin",
    value: "reservation.endDate",
    CustomComponent: DateFormate,
  },
  {
    heading: "passengers",
    headingFr: "passengers",
    value: "numberOfPassengers",
    // CustomComponent: countPassenger
  },
  {
    heading: "status",
    headingFr: "statut",
    value: "tripsStatus",
    CustomComponent: StatusButton,
  },
  {
    heading: "cost",
    headingFr: "Coût",
    value: "cost",
  },
];

const ReservationColum: columnData = [
  {
    heading: "reservation",
    headingFr: "réservation",
    value: "reservationId",
    sortable: true,
  },
  {
    heading: "booked By",
    headingFr: "réservé par",
    value: "madeBy",
    sortable: true,
  },
  {
    heading: "aircraft",
    headingFr: "avion",
    value: "aircraftId.model",
  },
  {
    heading: "city",
    headingFr: "ville",
    value: "departingCity",
  },
  {
    heading: "start Date",
    headingFr: "date de début",
    value: "startDate",
    CustomComponent: DateFormate,
  },
  {
    heading: "end Date",
    headingFr: "date de fin",
    value: "endDate",
    CustomComponent: DateFormate,
  },
  {
    heading: "passengers",
    headingFr: "passengers",
    value: "numberOfPassengers",
    // CustomComponent: countPassenger
  },
  {
    heading: "status",
    headingFr: "statut",
    value: "reservationStatus",
    CustomComponent: StatusButton,
  },
  {
    heading: "cost",
    headingFr: "Coût",
    value: "finalPrice",
  },
];

const Trips = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [currentTrips, setCurrentTrips] = useState<any>([]);
  const [reservations, setReservations] = useState<any>([]);
  const [pastTrips, setPastTrips] = useState<any>([]);
  const [cancelledTrips, setCancelledTrips] = useState<any>([]);
  const openModal: () => void = () => {};
  const { state } = useContext(AppContext);

  const requestApi = useCallback(async () => {
    {
      try {
        const trips = await axios.post(
          "/api/trips/getUserTrips?status=Started",
          {
            token: state.token,
          }
        );
        setCurrentTrips(trips.data);
        const pastTrips = await axios.post(
          "/api/trips/getUserTrips?status=Completed",
          {
            token: state.token,
          }
        );
        setPastTrips(pastTrips.data);

        const cancelTrips = await axios.post(
          "/api/trips/getUserTrips?status=Cancelled",
          {
            token: state.token,
          }
        );
        setCancelledTrips(cancelTrips.data);
        const reservation = await axios.post("/api/trips/getUserReservation", {
          token: state.token,
        });
        setReservations(reservation.data);
      } catch (error) {}
    }
  }, [state]);

  useEffect(() => {
    requestApi();
  }, [requestApi]);

  let tabValues: contentProps = [
    {
      tabTitle: "Current Trips",
      tabTitleFr: "Voyages en cours",
      queryUrl: `/${userId}/trips?tab=current-trips`,
      tabComponent: <Table column={column} tableData={currentTrips} />,
    },
    {
      tabTitle: "Reservations",
      tabTitleFr: "Réservations",
      queryUrl: `/${userId}/trips?tab=reservation`,
      tabComponent: (
        <Table column={ReservationColum} tableData={reservations} />
      ),
    },
    {
      tabTitle: "Past Trips",
      tabTitleFr: "Voyages passés",
      queryUrl: `/${userId}/trips?tab=past-trips`,
      tabComponent: <Table column={column} tableData={pastTrips} />,
    },
    {
      tabTitle: "cancelled Trips",
      tabTitleFr: "Voyages annulés",
      queryUrl: `/${userId}/trips?tab=cancelled-trips`,
      tabComponent: <Table column={column} tableData={cancelledTrips} />,
      // buttonAction: () => openModal(),
      // buttonText: "add new Trips",
    },
  ];

  return (
    <>
      <Tabs
        tabContent={tabValues}
        heading={
          router.locale === `fr`
            ? `informations sur les voyages`
            : "trips information"
        }
      />
      {router?.query?.tab == "current-trips" && <MyTripsBanner />}
      {router?.query?.tab == "reservation" && <MyTripsBanner2 />}
      {router?.query?.tab == "past-trips" && <MyTripsBanner3 />}
      {router?.query?.tab == "cancelled-trips" && <MyTripsBanner3 />}
    </>
  );
};

export default Trips;

Trips.defineLayout = (page: ReactElement, props: any): ReactNode => {
  return (
    <UserLayout
      title={PageTitles.trips}
      breadcumb={{ text: "my trips", link: "trips", textFr: "mes excursions" }}
    >
      {page}
    </UserLayout>
  );
};
