import styled from "styled-components";

export const ContainerHeader = styled.div`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background:white;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    max-width: 950px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 900px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 370px;
  }
`;
