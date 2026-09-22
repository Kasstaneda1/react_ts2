import styled from "@emotion/styled";

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: fit-content;
  height: fit-content;
  border: 1px solid black;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ResultsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const Count = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

export const ControlsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const ButtonControl = styled.div`
  width: 130px;
`;
