import styled from 'styled-components';

export const StyledContact = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    margin-bottom: 70px;
    margin-top: 70px;
    cursor: pointer;
  }

  img:hover {
    filter: brightness(110%);
  }
  .container > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }

  .phone {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .container > div > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container > div > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 28px;
    font-align: center;
    text-align: center;
  }

  @media (max-width: 750px) {
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 20px;
      text-align: center;
    }
  }

  @media (max-width: 650px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
      text-align: center;
    }
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
      text-align: center;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
      text-align: center;
    }
  }
`;
