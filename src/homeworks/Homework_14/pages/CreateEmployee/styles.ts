import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  min-width: 0;
  padding: 118px 40px 80px;

  @media (max-width: 700px) {
    padding: 40px 20px;
  }
`;
