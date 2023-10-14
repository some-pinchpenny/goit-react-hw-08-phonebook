import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ContactsBtn,
  ContactsTitle,
  ErrorNotif,
  Input,
  Label,
  PhoneForm,
} from './AddForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const NameValid = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const NumberValid =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const FormSchena = Yup.object().shape({
  name: Yup.string('Enter your name')
    .min(3, 'Too Short!')
    .matches(
      NameValid,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      NumberValid,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(12, 'Phone number must be at least 12 digits')
    .required('Phone number is required'),
});

export const AddForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }) => {
    const contact = {
      name,
      number,
    };
    const hasName = contacts.items.some(
      cont => cont.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (hasName) return window.alert(`${contact.name} is allready in contacts`);

    dispatch(addContact(contact));
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={FormSchena}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <PhoneForm>
          <ContactsTitle>Your contacts</ContactsTitle>
          <Label>
            Name
            <Input type="text" name="name" />
            <ErrorNotif name="name" component="span" />
          </Label>
          <Label>
            Number
            <Input type="tel" name="number" />
            <ErrorNotif name="number" component="span" />
          </Label>
          <ContactsBtn type="submit">Add contact</ContactsBtn>
        </PhoneForm>
      </Formik>
    </div>
  );
};
