import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgb(3, 35, 68);
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const JokeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const Setup = styled.p`
  font-size: 20px;
  color: black;
`;

export const Punchline = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: rgb(3, 35, 68);
`;

export const ErrorText = styled.p`
  font-size: 20px;
  color: #ff6868ff;
`;
