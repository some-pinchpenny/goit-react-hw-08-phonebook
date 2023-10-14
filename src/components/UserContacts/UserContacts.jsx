import { AddForm } from 'components/AddForm/AddForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Loading } from 'components/Loading';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Container } from './UserContacts.styled';

export const UserContacts = () => {
  const contacts = useSelector(selectContacts);
  return (
    <div>
      <AddForm />
      <Container>
        {contacts.items.length !== 0 && (
          <>
            <Filter />
            {contacts.isLoading && !contacts.error && <Loading />}
            <ContactsList />
          </>
        )}
      </Container>
    </div>
  );
};
