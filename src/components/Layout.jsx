import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar } from './AppBar/AppBar';

const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 1140px;
  margin: 0 auto;
  padding: 20px;
`;

export const Layout = () => {
  return (
    <Wrapp>
      <AppBar />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </Wrapp>
  );
};
