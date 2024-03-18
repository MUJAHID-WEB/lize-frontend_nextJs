import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'react-toastify/dist/ReactToastify.css';
import 'flag-icons/css/flag-icons.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/calendar.css';
import '../styles/globals.css';
import '../styles/all.min.css';
import AppContext from 'context/AppContext';
import auth from 'config/auth';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

// type of the page with their layout
type AwesomePageWithLayout = NextPage & {
  defineLayout?: (page: ReactElement, pageProps?: any) => ReactNode;
};

// App type props
// contain the component with the layout
type AppPropsWithLayout = AppProps & {
  Component: AwesomePageWithLayout;
};

/**
 * # MyApp
 *
 * custom application setup with following layout
 * some of layout like main and more
 *
 * @param {AppPropsWithLayout} props
 * @returns ReactNode
 */

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  /** state for header to keep up it's position.
   * false = absolute
   * true = fixed
   */
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [render, setRerender] = useState(false);
  const [reservation, setReservation] = useState<any>('');
  const [trips, setTrips] = useState<any>('');
  const [amenities, setAmenities] = useState<any>();
  const [avionRef, setAvionRef] = useState<any>();
  const [serviceRef, setServiceRef] = useState<any>();
  const router = useRouter();
  const layout = Component.defineLayout ?? ((page) => page);

  useEffect(() => {
    // Fetch Data On initial load or Reload
    (async () => {
      try {
        let res = await auth.userInfo();
        if (res.user && res.token) {
          setToken(res.token);
          setUser(res.user);
          setIsLoggedIn(true);
          if (!router.query.userId) {
            router.push({
              pathname: router.pathname,
              query: { userId: res.user?._id, ...router.query },
            });
          }
        }
      } catch (err: any) {}
    })();
    //eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        state: {
          user,
          token,
          isLoggedIn,
          render,
          reservation,
          trips,
          amenities,
          avionRef,
          serviceRef,
        },
        setServiceRef,
        setAvionRef,
        setUser,
        setToken,
        setIsLoggedIn,
        setRerender,
        setReservation,
        setTrips,
        setAmenities,
      }}
    >
      {layout(<Component {...pageProps} />, pageProps)}
      <ToastContainer />
    </AppContext.Provider>
  );
}

export default MyApp;
