import React, { useState } from 'react';

interface dataType {
  data: any;
  sectionTitle: String;
  airCraftTitle: String;
}

function RentalSection({ data, sectionTitle, airCraftTitle }: dataType) {
  const [airCraft, setAirCraft] = useState(data[0]);

  const activePlane = (id: any) => {
    setAirCraft(data.filter((data: any) => id == data.id)[0]);
  };

  return <></>;
}

export default RentalSection;
