import AmenitiesItem from '@/components/AmenitiesItem';
import Tabs from '@/components/Tabs';
import UserLayout from '@/layouts/UserLayout';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import PageTitles from '@/utils/statics';

const Amenities = () => {
  const router = useRouter();
  const [drinks, setDrink] = useState<any>();
  const [food, setFood] = useState<any>();
  const [technologies, setTechnologies] = useState<any>();
  const [flowers, setFlowers] = useState<any>();
  useEffect(() => {
    (async () => {
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/amenities/amenities-list`
      );
      let data = res.data.amenities;

      setDrink(
        data.filter(
          (plane: any) => plane.typeOfAmenities.toLowerCase() == 'drinks'
        )
      );
      setFood(
        data.filter(
          (plane: any) => plane.typeOfAmenities.toLowerCase() == 'food'
        )
      );
      setTechnologies(
        data.filter(
          (plane: any) => plane.typeOfAmenities.toLowerCase() == 'technologies'
        )
      );
      setFlowers(
        data.filter(
          (plane: any) => plane.typeOfAmenities.toLowerCase() == 'flowers'
        )
      );
    })();
  }, []);
  const tabValues = [
    {
      tabTitle: 'drinks',
      tabTitleFr: 'boissons',
      tabComponent: <AmenitiesItem amenities={drinks} />,
    },
    {
      tabTitle: 'food',
      tabTitleFr: 'nourriture',
      tabComponent: <AmenitiesItem amenities={food} />,
    },
    {
      tabTitle: 'technologies',
      tabTitleFr: 'les technologies',
      tabComponent: <AmenitiesItem amenities={technologies} />,
    },
    {
      tabTitle: 'flowers',
      tabTitleFr: 'fleurs',
      tabComponent: <AmenitiesItem amenities={flowers} />,
    },
  ];

  return <Tabs tabContent={tabValues} />;
};

export default Amenities;

Amenities.defineLayout = (page: ReactElement, props: any): ReactNode => {
  return (
    <UserLayout
      title={PageTitles.amenities}
      breadcumb={{ text: 'amenities', link: 'amenities', textFr: `Agréments` }}
    >
      {page}
    </UserLayout>
  );
};
