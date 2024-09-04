import styled from "styled-components"
import Featured from "./Featured";

const HomeContainer = styled.div`
  flex: 4;
`;

const Home = () => {
  return (
    <HomeContainer>
        <Featured />
    </HomeContainer>
  )
}

export default Home
