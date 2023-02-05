import styled from 'styled-components';

export const StyledJobs = styled.div`
  width: 100%;
  background-color: var(--gray-bg);

  padding: 45px 0px;

  h2 {
    font-size: 32px;
    margin-bottom: 40px;
    text-align: center;
  }

  .slide {
    width: 50%;
  }

  .carousel .slide img {
    object-fit: contain;
    height: 475px;
  }

  .carousel .thumbs {
    text-align: center;
  }

  .carousel .thumb img {
    height: 100px;
  }

  .carousel-status {
    display: none;
  }

  @media (max-width: 650px) {
    h2 {
      font-size: 25px;
    }
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 19px;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 16px;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 350px) {
    h2 {
      font-size: 12px;
    }
  }
`;
