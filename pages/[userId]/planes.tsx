import PlaneItem from '@/components/PlaneItem';
import Tabs from '@/components/Tabs';
import UserLayout from '@/layouts/UserLayout';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import PageTitles from '@/utils/statics';

const Planes = () => {
  const router = useRouter();
  const [plane, setPlane] = useState<any>();
  const [privateJets, setPrivateJet] = useState<any>();
  const [helicopters, setHelicopters] = useState<any>();
  const [cargo, setCargo] = useState<any>();

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/plane`);
      let data = res.data.planes;

      setPrivateJet(
        data.filter(
          (plane: any) => plane.typeOfPlane.toLowerCase() == 'private jet'
        )
      );
      setHelicopters(
        data.filter(
          (plane: any) => plane.typeOfPlane.toLowerCase() == 'helicopters'
        )
      );
      setCargo(
        data.filter((plane: any) => plane.typeOfPlane.toLowerCase() == 'cargo')
      );
    })();
  }, []);
  const tabValues = [
    {
      tabTitle: 'private jets',
      tabTitleFr: 'jets privés',
      tabComponent: <PlaneItem plane={privateJets} />,
    },
    {
      tabTitle: 'helicopters',
      tabTitleFr: 'hélicoptères',
      tabComponent: <PlaneItem plane={helicopters} />,
    },
    {
      tabTitle: 'cargo',
      tabTitleFr: 'cargaison',
      tabComponent: <PlaneItem plane={cargo} />,
    },
  ];

  return <Tabs tabContent={tabValues} />;
};

export default Planes;

Planes.defineLayout = (page: ReactElement, props: any): ReactNode => {
  return (
    <UserLayout
      title={PageTitles.planes}
      breadcumb={{ text: 'planes', link: 'planes', textFr: 'avions' }}
    >
      {page}
    </UserLayout>
  );
};
