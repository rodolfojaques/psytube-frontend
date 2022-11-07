import styled from "styled-components";

export const StyledTop = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right, #181818, #505050);
  width: 100%;
  min-height: 100vh;
`;

export const StyledTitle = styled.div`
  margin-top: 2vh;
`;

export const StyledDiv = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media (min-width: 800px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
