import { useDispatch, useSelector } from 'react-redux';
import { UserMenuBtn, UserMenuName, UserMenuWrapper } from './UserMenu.styled';
import { selectUserName } from 'redux/selectors';
import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <UserMenuWrapper>
      <UserMenuName>
        Welcome, <span>{userName}</span>
      </UserMenuName>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn>
    </UserMenuWrapper>
  );
};
