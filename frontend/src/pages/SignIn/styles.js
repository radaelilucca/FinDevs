import styled from 'styled-components';

export const Container = styled.div`
  background: #7159c1;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    240.84deg,
    #553aa2 0.09%,
    rgba(85, 58, 162, 0.95) 16.86%,
    rgba(85, 58, 162, 0.9) 28.38%,
    rgba(85, 58, 162, 0.85) 39.87%,
    rgba(85, 58, 162, 0.75) 51.19%,
    rgba(85, 58, 162, 0.65) 62.48%,
    rgba(85, 58, 162, 0.55) 72.16%,
    rgba(85, 58, 162, 0.45) 84.15%,
    rgba(85, 58, 162, 0.4) 100%
  );

  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LoginBox = styled.div`
  width: 490px;
  height: 450px;
  background: #ffffff;
  border-radius: 15px;
`;

export const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 490px;
  height: 450px;
  background: #ffffff;
  border-radius: 15px;
  margin-left: 10px;



  h1 {
    width: 65%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 94px;
    text-align: center;
    line-height: 60px;
    color: #553aa2;
    margin-bottom: 50px;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #555555;
    margin-bottom: 60px;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: rgba(102, 102, 102, 0.85);
  }

  button {
    opacity: 0.95;
  }
`;

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
