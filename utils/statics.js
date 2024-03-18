import AmenetiesIcon from '@/components/svg/dashboard/AmenetiesIcon';
import DashboardIcon from '@/components/svg/dashboard/DashboardIcon';
import DocumentIcon from '@/components/svg/dashboard/DocumentIcon';
import InvoicesIcon from '@/components/svg/dashboard/InvoicesIcon';
import MessageIcon from '@/components/svg/dashboard/MessageIcon';
import PlaneIcon from '@/components/svg/dashboard/PlaneIcon';
import ProfileIcon from '@/components/svg/dashboard/ProfileIcon';
import TripsIcon from '@/components/svg/dashboard/TripsIcon';

const PageTitles = {
  dashboard: {
    titleEn: 'welcome to dashboard',
    titleFr: 'bienvenue sur le tableau de bord',
  },
  amenities: {
    titleEn: 'Amenities',
    titleFr: 'Agréments',
  },
  trips: {
    titleEn: 'trips',
    titleFr: 'voyages',
  },
  invoices: {
    titleEn: 'Invoices',
    titleFr: 'Factures',
  },
  profiles: {
    titleEn: 'my profile',
    titleFr: 'mon profil',
  },
  planes: {
    titleEn: 'planes',
    titleFr: 'Avions',
  },
};

export const pages = [
  {
    text: 'dashboard',
    textFr: 'tableau de bord',
    icon: (classes) => <DashboardIcon classNames={classes} />,
    url: 'dashboard',
  },
  {
    text: 'my trips',
    textFr: 'mes excursions',
    icon: (classes) => <TripsIcon classNames={classes} />,
    url: 'trips',
  },
  {
    text: 'invoices',
    textFr: 'factures',
    icon: (classes) => <InvoicesIcon classNames={classes} />,
    url: 'invoice',
  },
  {
    text: 'my profile',
    textFr: 'mon profil',
    icon: (classes) => <ProfileIcon classNames={classes} />,
    url: 'profile',
  },
  {
    text: 'planes',
    textFr: 'Avions',
    icon: (classes) => <PlaneIcon classNames={classes} />,
    url: 'planes',
  },
  {
    text: 'amenities',
    textFr: 'Agréments',
    icon: (classes) => <AmenetiesIcon classNames={classes} />,
    url: 'amenities',
  },
  {
    text: 'document',
    textFr: 'document',
    icon: (classes) => <DocumentIcon classNames={classes} />,
    url: 'document',
  },
  {
    text: 'messages',
    textFr: 'messages',
    icon: (classes) => <MessageIcon classNames={classes} />,
    url: 'messages/t/first/user/checking',
  },
  // {
  //   text: 'help',
  //   icon: (classes) => <HelpIcon classNames={classes} />,
  //   url: 'help',
  // },
];
export default PageTitles;
