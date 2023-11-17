import styled from 'styled-components';

export const StyledInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  height: 475px;
  margin-bottom: 70px;

  .container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      gap: 25px;
      height: 100%;
      flex-direction: column;
      -webkit-box-shadow: -44px -1px 18px 15px rgb(255 255 255);
      -moz-box-shadow: -44px -1px 18px 15px rgb(255 255 255);
      box-shadow: -44px -1px 18px 15px rgb(255 255 255);
    }
  }
  .info-img {
    height: 450px;
    border-radius: 20px 0px 0px 20px;
  }

  .logo {
    height: 206px;
  }

  button {
    width: fit-content;
    background-color: var(--color-primary);
    margin-top: 10px;
    font-size: 28px;
    color: var(--font-color);
    font-weight: 700;
    padding: 12px 36px;
    border-radius: 30px;
  }

  h2 {
    font-size: 29px;
    color: var(--font-color);
    font-weight: 400;
    text-align: justify;
  }

  span {
    font-weight: 800;
  }

  @media (max-width: 1200px) {
    .info-img {
      width: 50vw;
      height: 450px;
      object-fit: cover;
    }

    div {
      width: 50vw;
    }

    .logo {
      width: 100%;
    }

    h2 {
      font-size: 24px;
    }

    .container {
      padding: 0px 30px;
    }
  }

  @media (max-width: 750px) {
    margin-bottom: 50px;
    .info-img {
      display: none;
    }
  }

  div {
    width: 100vw;
  }

  @media (max-width: 450px) {
    button {
      font-size: 24px;
    }
  }
`;
