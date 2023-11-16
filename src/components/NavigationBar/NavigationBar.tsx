import styled from "styled-components";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/img/logoSvinov.svg';
import {urls} from "../../utils/urls";

export const NavigationBar = () => {
    return (
        <NavigationBarContainer>
            <NavigationLinksContainer>
                <NavLink to={'#'}>Home</NavLink>
                <NavLink to={'#'}>Články</NavLink>
                <NavLink to={'#'}>Tabulky</NavLink>
            </NavigationLinksContainer>
            <LogoContainer to={urls.home}>
                <Logo/>
            </LogoContainer>
            <NavigationLinksContainer>
                <NavLink to={'#'}>Mládež</NavLink>
                <NavLink to={''}>O oddílu</NavLink>
                <NavLink to={'#'}>Kronika</NavLink>
            </NavigationLinksContainer>
        </NavigationBarContainer>
    )
}

const NavigationBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 4rem;
`

const NavigationLinksContainer = styled.div`
  display: flex;
  gap: 2.5em;
`

const NavLink = styled(Link)`
  text-transform: uppercase;
  font-weight: ${({theme}) => theme.fontWeights.bold};
  text-decoration: none;
  color: ${({theme}) => theme.colors.text.primary};
  font-size: 1.5em;
  
  &:hover {
    color: ${({theme}) => theme.colors.general.yellow};
    text-decoration: underline;
  }
`
const LogoContainer = styled(Link)`
  position: relative;
  width: 10em;
  top: 2.5em;
`