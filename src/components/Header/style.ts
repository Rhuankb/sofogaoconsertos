import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  box-shadow: rgba(123, 123, 123, 0.15) 0px 0px 12px 0px;

  h1 {
    font-family: 'Broadway BT';
    color: #dd0e18;
    font-size: 55px;
    font-weight: normal;
  }
  svg {
    display: flex;
    width: 35px;
    height: 35px;
  }

  img {
    display: flex;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

  a {
    width: 35px;
  }
  .container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: space-between;
    align-items: center;
  }

  .container > div {
    justify-content: center;
    display: flex;
    gap: 40px;
    margin-right: 10px;
  }

  @media (max-width: 1200px) {
    .container {
      padding: 0px 30px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 38px;
    }

    .container > div {
      gap: 22px;
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 32px;
    }
    img {
      width: 30px;
      height: 30px;
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
