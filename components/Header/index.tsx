import React, { FC, useEffect, useState } from 'react';
import HeaderDesktop from './HeaderDekstop';
import HeaderMobile from './HeaderMobile';
type headerProps = {
  scrollable?: boolean;
  headerType?: 'primary' | 'secondary';
};
const Header: FC<headerProps> = ({
  scrollable = false,
  headerType = 'primary',
}) => {
  return (
    <>
      <HeaderMobile headerType={headerType} scrollable={scrollable} />
      <HeaderDesktop headerType={headerType} scrollable={scrollable} />
    </>
  );
};

export default Header;
