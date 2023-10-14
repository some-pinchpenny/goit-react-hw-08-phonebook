import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserMenuName = styled.p`
  font-family: Overpass;
  font-size: 24px;

  font-weight: 300;

  & span {
    color: #e84a5f;
  }
`;

export const UserMenuBtn = styled.button`
  width: 104px;
  height: 32px;
  border: 1px solid#e84a5f;
  border-radius: 4px;
  background-color: #fff;
  color: #e84a5f;

  font-family: Overpass;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
