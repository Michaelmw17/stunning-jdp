import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 3.5rem 0 1rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
  font-size: 20px
`;

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
