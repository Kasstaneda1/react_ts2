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
  flex-direction: column;
  gap: 20px;
  width: 640px;
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

export const JokesList = styled.ol`
  flex: 1;
  margin: 0;
  padding: 0 0 0 28px;
  max-height: 420px;
  overflow-y: auto;
`;

export const JokeItem = styled.li`
  margin-bottom: 12px;

  &::marker {
    font-size: 16px;
    font-weight: bold;
    color: rgb(3, 35, 68);
  }
`;

export const JokeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border: 1px solid #e2e6ec;
  border-radius: 8px;
  background-color: #f7f9fc;
`;

export const JokeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Setup = styled.p`
  font-size: 17px;
  line-height: 1.4;
  color: #333333;
`;

export const Punchline = styled.p`
  font-size: 17px;
  line-height: 1.4;
  font-weight: bold;
  color: rgb(3, 35, 68);
`;

export const ErrorText = styled.p`
  font-size: 18px;
  color: #ff6868ff;
`;

export const ButtonControl = styled.div`
  flex-shrink: 0;
  width: 90px;

  button {
    height: 40px;
    font-size: 15px;
  }
`;
