import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import { ROUTES, NAVIGATION_MENU_ROUTES } from "constants/routes";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
  getActiveStyles,
} from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(ROUTES.HOME);
  };

  const headerLinks = Object.keys(NAVIGATION_MENU_ROUTES).map((routeName) => {
    return (
      <HeaderLink
        key={v4()}
        style={getActiveStyles}
        to={
          NAVIGATION_MENU_ROUTES[
            routeName as keyof typeof NAVIGATION_MENU_ROUTES
          ]
        }
      >
        {routeName}
      </HeaderLink>
    );
  });

  const footerLinks = Object.keys(NAVIGATION_MENU_ROUTES).map((routeName) => {
    return (
      <FooterLink
        key={v4()}
        to={
          NAVIGATION_MENU_ROUTES[
            routeName as keyof typeof NAVIGATION_MENU_ROUTES
          ]
        }
      >
        {routeName}
      </FooterLink>
    );
  });

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>
        <NavigationContainer>
          {headerLinks}
          {/* <HeaderLink style={getActiveStyles} to={ROUTES.HOME}>
            Home
          </HeaderLink>
          <HeaderLink to={ROUTES.CLIENTS} style={getActiveStyles}>
            Clients
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to={ROUTES.CONTACT_US}>
            Contact Us
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to={ROUTES.ABOUT}>
            About
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to={ROUTES.LOGIN}>
            Login
          </HeaderLink> */}
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo>
        <FooterNavigation>
          {/* <FooterLink to={ROUTES.HOME}>Home</FooterLink>
          <FooterLink to={ROUTES.CLIENTS}>Clients</FooterLink>
          <FooterLink to={ROUTES.CONTACT_US}>Contact Us</FooterLink>
          <FooterLink to={ROUTES.ABOUT}>About</FooterLink>
          <FooterLink to={ROUTES.LOGIN}>Login</FooterLink> */}
          {footerLinks}
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
