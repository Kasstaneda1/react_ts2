import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  max-width: 900px;
  padding: 18px 24px;
  border-radius: 10px;
  background-color: rgb(3, 24, 45);
`;

export const HeaderTitle = styled.p`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
`;

export const HeaderSubtitle = styled.p`
  font-size: 14px;
  color: #8fa6c0;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 30px 0;
`;

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #e2e6ec;
  border-top-color: rgb(7, 35, 63);
  border-radius: 50%;
  animation: ${rotate} 0.9s linear infinite;
`;

export const LoaderText = styled.p`
  font-size: 16px;
  color: #6f6f6f;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  padding: 40px;
  align-items: center;
  justify-content: center;
  background-color: rgb(7, 35, 63);
`;

export const SearchPanel = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 900px;
  padding: 24px;
  border-radius: 10px;
  background-color: white;
`;

export const ButtonControl = styled.div`
  width: 220px;

  button {
    height: 50px;
    font-size: 16px;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 900px;
  max-height: 420px;
  overflow-y: auto;
`;

export const UniversityCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #e2e6ec;
  border-radius: 8px;
  background-color: white;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: rgb(7, 35, 63);
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CardLabel = styled.span`
  font-size: 13px;
  text-transform: uppercase;
  color: #8a94a6;
`;

export const CardText = styled.p`
  font-size: 15px;
  color: #333333;
`;

export const CardLink = styled.a`
  font-size: 15px;
  color: rgb(82, 82, 241);
  word-break: break-all;
`;

export const Message = styled.p`
  font-size: 20px;
  color: #333333;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  color: #ff6868ff;
`;