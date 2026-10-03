import styled from "@emotion/styled";

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 600px;
  padding: 24px;
  border-radius: 10px;
  background-color: white;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: rgb(7, 35, 63);
`;

export const MessageArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  resize: vertical;
`;

export const ButtonControl = styled.div`
  width: 200px;
`;
