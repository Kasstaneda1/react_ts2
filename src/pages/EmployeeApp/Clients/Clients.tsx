import { ROUTES } from "constants/routes";

import { PageWrapper, NavContainer, ClientsLink } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <NavContainer>
        <ClientsLink to={ROUTES.APPLE}>Apple</ClientsLink>
        <ClientsLink to={ROUTES.FACEBOOK}>Facebook</ClientsLink>
        <ClientsLink to={ROUTES.GOOGLE}>Google</ClientsLink>
      </NavContainer>
    </PageWrapper>
  );
}

export default Clients;
