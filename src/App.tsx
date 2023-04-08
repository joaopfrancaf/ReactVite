import Header from "./components/header"
import Sidebar from "./components/sidebar"
import { StyledDivWrapper } from "./styles/pages/app"

function App() {
  return (
    <>
      <Header/>

      <StyledDivWrapper>
        <Sidebar/>
        <main></main>
      </StyledDivWrapper>
    </>
  )
}

export default App
