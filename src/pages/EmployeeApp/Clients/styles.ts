import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ClientsLink = styled(Link)`
  color: black;
  font-size: 24px;
  font-weight: bold;
`;
