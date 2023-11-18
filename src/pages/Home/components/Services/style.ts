import styled from 'styled-components';

export const StyledServices = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  background-color: var(--gray-bg);
  .container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    flex-direction: column;
  }

  ul {
    display: flex;
    width: fit-content;
    justify-content: space-between;
    margin: 40px 20px 0 20px;
    gap: 20px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      position: relative;
      top: 40px;
      color: black;
      font-size: 19px;
      width: 150px;
      text-align: center;
      font-weight: 600;
    }
  }

  ul :nth-child(4) {
    p {
      top: 25px;
    }
  }
  li > img {
    height: 300px;
    width: 270px;
    border-radius: 5%;
    object-fit: cover;
  }

  h3 {
    font-weight: 400;
    font-size: 32px;
    margin-top: 30px;
  }

  h2 {
    font-size: 32px;
    margin-top: 90px;
  }

  button {
    width: fit-content;
    background-color: var(--color-primary);
    margin-top: 20px;
    font-size: 32px;
    color: var(--font-color);
    font-weight: 700;
    padding: 12px 36px;
    border-radius: 30px;
    margin-bottom: 70px;
  }

  @media (max-width: 1200px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media (max-width: 750px) {
    ul {
      justify-content: unset;
      justify-items: center;
      gap: 37px;
    }

    h3 {
      font-size: 25px;
    }

    button {
      font-size: 25px;
    }
  }

  li {
    height: fit-content;
    width: fit-content;
  }

  li > p {
    top: 15px;
  }

  ul :nth-child(4) {
    p {
      top: 10px;
    }
  }

  @media (max-width: 650px) {
    h2 {
      font-size: 27px;
    }

    li > img {
      height: 260px;
      width: 100%;
    }

    h3 {
      font-size: 20px;
    }

    button {
      font-size: 20px;
    }
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 21px;
    }

    li > img {
      height: 165px;
      width: 90%;
    }

    h3 {
      font-size: 16px;
    }

    button {
      font-size: 16px;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 18px;
    }

    li > P {
      font-size: 19px;
    }

    li > img {
      height: 165px;
      width: 90%;
    }

    h3 {
      font-size: 13px;
    }

    button {
      font-size: 13px;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 16px;
    }

    li > img {
      height: 150px;
      width: 85%;
    }
  }

  @media (max-width: 350px) {
    h2 {
      font-size: 14px;
    }
  }
`;
