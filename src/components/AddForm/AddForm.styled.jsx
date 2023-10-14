import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const PhoneForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 480px;
  margin: 0 auto;
`;

export const ContactsTitle = styled.h1`
  color: #e84a5f;

  font-family: Manjari;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled(Field)`
  width: 480px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #635b5b;
  color: #635b5b;

  font-family: Overpass;
  font-size: 20px;
  font-weight: 300;
`;

export const ErrorNotif = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const ContactsBtn = styled.button`
  border-radius: 4px;
  background: #e84a5f;
  width: 200px;
  height: 32px;
  color: #fff;
  border: none;

  font-family: Overpass;
  font-size: 20px;

  font-weight: 400;
  margin: 0 auto;
  margin-top: 32px;
`;
