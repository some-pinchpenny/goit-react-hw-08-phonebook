import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(item => (
        <li>
          <ContactsItem contact={item} />
        </li>
      ))}
    </List>
  );
};
