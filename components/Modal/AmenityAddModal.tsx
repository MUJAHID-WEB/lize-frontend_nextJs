import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import StatusButton from "../StatusButton";
import Table, { columnData } from "../Table";
import Tabs, { contentProps } from "../Tabs";
import axios from "axios";
import DateFormate from "utils/dateFormater";
import Modal from ".";
import ThankYouModal from "./ThankYouModal";

const CheckButton = ({ data, value, Item }: any) => {
  const { state, setReservation, setTrips } = useContext(AppContext);
  const { reservation, trips } = state;
  console.log("🚀 ~ file: AmenityAddModal.tsx:15 ~ CheckButton ~ trips:", trips)


  const router = useRouter();
  const { tab } = router.query;

  const add = (e: any) => {
    if (tab == "reservation") {
      setReservation(data);
    } else {
      setTrips(data);
    }
  };
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-5">
        <input
          type="radio"
          className="h-[30px] w-[30px] rounded-[10px] border-[#84878B] checked:bg-primary"
          defaultChecked={false}
          onChange={add}
          name='trips_data'
        />
        {tab == "reservation" ? (
          <p className="text-sm text-[14px] font-medium text-gray">
            R{data.toString().slice(-4)}
          </p>
        ) : (
          <p className="text-sm text-[14px] font-medium text-gray">
            T{data.toString().slice(-4)}
          </p>
        )}
      </div>
    </>
  );
};

const column: columnData = [
  {
    heading: "trip",
    headingFr: "voyage",
    value: "_id",
    sortable: true,
    CustomComponent: CheckButton,
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
    value: "_id",
    sortable: true,
    CustomComponent: CheckButton,
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
function AmenityAddModal({ closeModal, setConfirmModal }: any) {
  const router = useRouter();
  const { userId } = router.query;
  const [currentTrips, setCurrentTrips]: any = useState([]);
  const [reservations, setReservations]: any = useState([]);
  const { state, setReservation, setTrips, setAmenities } =
    useContext(AppContext);
    const {reservation, trips} = state
  const [tabValue,setTabValue] = useState<any>()

  const clear = () => {
    setAmenities("");
    setTrips([]);
    setReservation([]);
    closeModal(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const trips = await axios.post(
          "/api/trips/getUserTrips?status=Started",
          {
            token: state.token,
          }
        );
        setCurrentTrips(trips.data);
        // const reservation = await axios.post("/api/trips/getUserReservation", {
        //   token: state.token,
        // });
        // setReservations(reservation.data);
      } catch (error) {}
    })();
  }, [state]);
  const tabValues: contentProps = [
    {
      tabTitle: "Current Trips",
      tabTitleFr: "Voyages en cours",
      queryUrl: `/${userId}/amenities?tab=current-trips`,
      tabComponent: <Table column={column} tableData={currentTrips} />,
    },
    // {
    //   tabTitle: "Reservations",
    //   tabTitleFr: "Réservations",
    //   queryUrl: `/${userId}/amenities?tab=reservation`,
    //   tabComponent: (
    //     <Table column={ReservationColum} tableData={reservations} />
    //   ),
    // },
  ];
  

  return (
    <>
      <Tabs
        tabContent={tabValues}
        heading={
          router.locale === `fr`
            ? `Sélectionnez les réservations ou les voyages pour ajouter ces commodités.`
            : "Select the reservations or trips to add this amenities."
        }
      />
      <div className="mb-[35px] mt-[3px] flex flex-row justify-center gap-5 ">
        <button
          type="button"
          className="btn-tertiary  flex h-[70px] w-[240px] flex-row items-center justify-center"
          onClick={clear}
        >
          {router.locale === `fr` ? `Annuler` : `Cancel`}
        </button>
        <button
          onClick={() => {
            setConfirmModal(true);
            closeModal(false);
          }}
          type="submit"
          className="btn-primary  flex h-[70px] w-[240px] flex-row items-center justify-center"
        >
          {router.locale === `fr` ? `Ajouter` : `Add`}
        </button>
      </div>
    </>
  );
}

export default AmenityAddModal;
