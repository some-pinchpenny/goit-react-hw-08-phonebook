import styled from 'styled-components';

export const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 480px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  color: #e84a5f;

  font-family: Manjari;
  font-size: 36px;
  font-weight: 500;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FormInput = styled.input`
  width: 480px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #635b5b;
  color: #635b5b;

  font-family: Overpass;
  font-size: 20px;
  font-weight: 300;
`;

export const FormBtn = styled.button`
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
