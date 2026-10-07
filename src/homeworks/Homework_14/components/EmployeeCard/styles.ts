import styled from "@emotion/styled";

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 635px;
  max-width: 100%;
  padding: 60px;
  border-radius: 4px;
  background-color: #ffffff;

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

  @media (max-width: 600px) {
    padding: 28px;
  }
`;

export const EmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoLabel = styled.p`
  color: #6f6f6f;
  font-size: 16px;
  line-height: 24px;
`;

export const InfoValue = styled.p`
  color: #1e1e1e;
  font-size: 28px;
  font-weight: 700;
  line-height: 37px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;
