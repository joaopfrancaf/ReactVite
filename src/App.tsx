import Header from "./components/header"
import Post from "./components/post"
import Sidebar from "./components/sidebar"
import { StyledDivWrapper } from "./styles/pages/app"

function App() {
  return (
    <>
      <Header/>

      <StyledDivWrapper>
        <Sidebar/>
        <main><Post/></main>
      </StyledDivWrapper>
    </>
  )
}

export default App
