import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
// import { useAuth } from 'hooks';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
