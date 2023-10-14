import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  color: #635b5b;

  font-family: Overpass;
  font-size: 24px;
  font-weight: 300;
  &.active {
    color: #e84a5f;
  }
`;
