import styled from 'styled-components';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 12rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 5rem 0 6rem;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
  font-size: 20px
`;
export const Span = styled.p`
  margin: -0.2rem 3rem 0rem -1rem;
  font-size: 16px
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 640px;
  margin-left:1rem;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 400px;
  min-width: 400px;
  justify-content: space-between;
`;
