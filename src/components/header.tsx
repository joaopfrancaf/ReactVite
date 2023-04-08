import igniteLogo from '../assets/Ignite simbol.svg'
import { StyledHeader } from '../styles/components/header'

function Header() {
    return (
        <StyledHeader>
            <img src={igniteLogo} alt="logo ignite" />
        </StyledHeader>
    )
}
  
export default Header
  