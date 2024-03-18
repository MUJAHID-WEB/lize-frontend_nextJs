import Table from '@/components/Table';
import Tabs, { contentProps } from '@/components/Tabs';
import UserLayout from '@/layouts/UserLayout';
import AppContext from 'context/AppContext';
import React, {
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import StatusButton from '@/components/StatusButton';
import { useRouter } from 'next/router';
import PageTitles from '@/utils/statics';
import DateFormate from '@/utils/dateFormater';

type columnData = {
  heading: string;
  headingFr?: string;
  value: string | number;
  sortable?: boolean;
  CustomComponent?: any;
}[];

const column: columnData = [
  {
    heading: 'Invoice No.',
    headingFr: 'Facture n°',
    value: 'invoiceId',
    sortable: true,
  },
  {
    heading: 'Trip',
    headingFr: 'voyage',
    value: 'tripsId.tripsId',
    sortable: true,
  },
  {
    heading: 'Invoice Date',
    headingFr: 'Date de facturation',
    value: 'invoiceDate',
    CustomComponent: DateFormate,
  },
  {
    heading: 'Invoice Amount',
    headingFr: 'Montant de la facture',
    value: 'invoiceAmount',
  },
  {
    heading: 'Balance Due',
    headingFr: 'voySolde dûage',
    value: 'balanceDue',
  },
  {
    heading: 'Payment Method',
    headingFr: 'Mode de paiement',
    value: 'paymentMethod',
  },
  {
    heading: 'Due Date',
    headingFr: "Date d'échéance",
    value: 'dueDate',
    CustomComponent: DateFormate,
  },
  {
    heading: 'status',
    headingFr: 'statut',
    value: 'invoiceStatus',
    CustomComponent: StatusButton,
  },
];

const Trips = () => {
  const [invoice, setInvoice]: any = useState([]);
  const [unPaidInvoice, setUnpaidInvoice]: any = useState([]);
  const [paidInvoice, setPaidInvoice]: any = useState([]);
  const [cancelledInvoice, setCancelledInvoice]: any = useState([]);
  const openModal: () => void = () => {};
  const { state } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/invoice/user-invoice`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: state.token,
            },
          }
        );
        setInvoice(response.data.invoice);
        console.log(
          '🚀 ~ file: invoice.tsx:116 ~ response.data.invoice',
          response.data.invoice
        );

        let data = response.data.invoice;
        let unpaidInvoice = data.filter(
          (invoice: any) => invoice.invoiceStatus.toLowerCase() == 'paid'
        );

        setUnpaidInvoice(
          data.filter(
            (invoice: any) => invoice.invoiceStatus.toLowerCase() == 'unpaid'
          )
        );
        setPaidInvoice(
          data.filter(
            (invoice: any) => invoice.invoiceStatus.toLowerCase() == 'paid'
          )
        );
        setCancelledInvoice(
          data.filter(
            (invoice: any) => invoice.invoiceStatus.toLowerCase() == 'cancelled'
          )
        );
      } catch (error) {}
    })();
  }, [state]);
  const tabValues = [
    {
      tabTitle: 'Unpaid Invoices',
      tabTitleFr: 'Factures impayées',
      tabComponent: <Table column={column} tableData={unPaidInvoice} />,
    },
    {
      tabTitle: 'Paid Invoices',
      tabTitleFr: 'Factures payées',
      tabComponent: <Table column={column} tableData={paidInvoice} />,
    },
    {
      tabTitle: 'cancelled Invoices',
      tabTitleFr: 'factures annulées',
      tabComponent: <Table column={column} tableData={cancelledInvoice} />,
      //   buttonAction: () => openModal(),
      //   buttonText: 'add new Trips',
    },
  ];

  return (
    <>
      <Tabs tabContent={tabValues} />
    </>
  );
};

export default Trips;

Trips.defineLayout = (page: ReactElement, props: any): ReactNode => {
  return (
    <UserLayout
      title={PageTitles.invoices}
      breadcumb={{
        text: 'Invoice',
        link: 'invoice',
        textFr: "Facture d'achat",
      }}
    >
      {page}
    </UserLayout>
  );
};
