import styled from 'styled-components';

export const StyledBrands = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: fit-content;
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    justify-content: center;

    padding: 0px 30px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
  }

  li > img {
    height: 100%;
    width: 100%;
    opacity: 0.5;
  }

  h2 {
    font-size: 32px;
    margin-top: 90px;
  }

  @media (max-width: 650px) {
    h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 24px;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 18px;
    }
  }
`;
