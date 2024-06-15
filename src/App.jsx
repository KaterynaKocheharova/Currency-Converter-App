import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Header } from 'components';
import { getUserInfo } from './service';

const Home = lazy(() => import('pages/Home'));
const Rates = lazy(() => import('pages/Rates'));

export const App = () => {
  useEffect(() => {
navigator.geolocation.getCurrentPosition(position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  getUserInfo({latitude, longitude});
})
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>}  />
          <Route path="/rates" element={<Rates/>} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </>
  );
};
