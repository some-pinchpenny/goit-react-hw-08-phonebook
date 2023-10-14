import styled from 'styled-components';

const HomeWrap = styled.div`
  padding-top: 160px;
`;

const MainTitle = styled.h1`
  color: #e84a5f;

  font-family: Manjari;
  font-size: 44px;
  font-weight: 400;
  margin-bottom: 24px;
`;

const MainText = styled.p`
  font-family: Overpass;
  font-size: 20px;
  width: 594px;
`;

export default function Home() {
  return (
    <HomeWrap>
      <MainTitle>Welcome to the contact book!</MainTitle>
      <MainText>
        Your personal tool for saving and managing contacts. Add, remove, and
        quickly find information about your friends, colleagues, and
        acquaintances. Let's start!
      </MainText>
    </HomeWrap>
  );
}
