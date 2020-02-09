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

export const SignUpBox = styled.div`
  width: 490px;
  height: 450px;
  background: #ffffff;
  border-radius: 15px;
`;

export const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 490px;
  height: 450px;
  background: #ffffff;
  border-radius: 15px;
  margin-right: 10px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    text-align: center;
    color: #553aa2;
    margin-top: 20px;
    
  }

  h2 {
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #666666;
    margin-bottom: 45px;
    margin-top: 70px;
  }
.login-option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {    
    font-weight: bold;
    font-size: 18px;
    line-height: 41px;
    color: rgba(102, 102, 102, 0.75);
  }

}
 
`;


export const Button = styled.button`
  background: rgba(87, 60, 163, 0.95);
  border-radius: 16px;
  width: 250px;
  height: 40px;
  align-self: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s linear;


  &:hover {
    transform: scale(1.1);
    background: #8100e5;
    font-weight: bold;
  }
`;
