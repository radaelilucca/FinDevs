import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;

  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 3px solid rgba(85, 58, 162, 1);
    transition: 0.1s linear;

    &:hover {
      transform: scale(1.1);
      margin-bottom: 10px;
      margin-top: 5px;
      border-radius: 5px;
    }
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    color: #444444;
  }

  h3 {
    font-weight: bold;
    font-size: 20px;
    color: rgba(85, 58, 162, 0.62);
    margin-bottom: 20px;
  }

  a {

    text-decoration: none
  }

  p {
    margin-top: 10px;
    font-weight: 500;
    font-size: 19px;
    text-align: center;
    color: #999999;
  }
`;

export const DevTechs = styled.div`
  display: flex;
  align-items: center;


 .code-tag {
  color: rgba(85, 58, 162, 1);
 }


  p {    
    color: #222;
    font-size: 25px;
    font-weight: 600;
    opacity: 0.8; 
    margin-top: 50px;   
  }
  
`;

export const Buttons = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
    margin-top: 40px;
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      text-align: center;
      margin-left: 10px;
      color: rgba(85, 58, 162, 0.42);
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 35px;
    color: rgba(85, 58, 162, 1);
    &:hover {
      color: #8e4dff;
    }
  }
`;
