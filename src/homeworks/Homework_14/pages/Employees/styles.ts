import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 125px;
  flex: 1;
  min-width: 0;
  padding: 84px 50px 54px 55px;

  @media (max-width: 700px) {
    gap: 40px;
    padding: 40px 20px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 65px;
  width: 100%;

  @media (max-width: 700px) {
    gap: 24px;
  }
`;

export const ButtonControl = styled.div`
  width: 700px;
  max-width: 100%;

  button {
    border-radius: 4px;
    background-color: #d40000;
    font-weight: 600;
    line-height: 30px;

    &:hover {
      background-color: #b30000;
    }

    &:focus-visible {
      outline: 2px solid #d40000;
      outline-offset: 3px;
    }
  }
`;

export const EmptyText = styled.p`
  color: #ffffff;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
`;
