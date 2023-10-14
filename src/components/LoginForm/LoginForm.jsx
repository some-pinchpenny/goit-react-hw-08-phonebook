import {
  FormBtn,
  FormInput,
  FormLabel,
  FormTitle,
  RegForm,
} from 'components/RegisterForm/RegisterForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <RegForm onSubmit={handleSubmit} autoComplete="off">
        <FormTitle>Do you have an account?</FormTitle>
        <FormLabel>
          Email
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormLabel>

        <FormLabel>
          Password
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormLabel>

        <FormBtn type="submit">Log In</FormBtn>
      </RegForm>
    </div>
  );
};
