import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 35px;
    color: #553aa2;
  }

  img {
    width: 45%;
  }
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: rgba(102, 102, 102, 0.55);
  margin-bottom: 30px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 60px;  
  border-bottom: 2px solid #553aa2;
  box-sizing: border-box;
  margin-bottom: 18px;
  transition: 0.1s linear;
  &:hover{
    width: 410px;
  }
`;
export const Input = styled.input`
  width: 90%;
  background: none;
  border: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: #573ca3;
  opacity: 0.8;
  display: flex;
  align-items: center;
  text-align: center;

  
`;

export const Button = styled.button`
  width: 300px;
  height: 55px;
  background: #573ca3;
  border-radius: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 41px;
  color: #ffffff;
  margin-top: 20px;
  transition: 0.05s linear;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scaleX(1.06);
    background: #8e4dff;
  }
`;
