import "./App.css";
import styled from "@emotion/styled";
import imgUrl from "./assets/testLogo.png";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/Projects";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Nav = styled.nav`
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
`;

const MenuLogo = styled.img`
  width: 50px;
  height: 50px;
  padding: 5;
`;

const SearchInput = styled.input`
  width: 100px;
  transition-property: width;
  transition-duration: 1s;
  &:focus {
    width: 200px;
  }
`;

const NavText = styled.div`
  margin: 5px;
  padding: 5px;
  display: inline-block;
`;

const NavBar = () => {
  return (
    <Nav>
      <MenuLogo src={imgUrl} />
      <SearchInput />
      <NavLink to="/">
        <NavText>Home</NavText>
      </NavLink>
      <NavLink to="/ProjectsPage">
        <NavText>ProjectsPage</NavText>
      </NavLink>
      <NavLink to="/FirstPage">
        <NavText>FirstPage</NavText>
      </NavLink>
      <NavLink to="/SecondPage">
        <NavText>SecondPage</NavText>
      </NavLink>
      <NavLink to="/ThirdPage">
        <NavText>ThirdPage</NavText>
      </NavLink>
    </Nav>
  );
};

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ProjectsPage" element={<ProjectPage />} />
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/ThirdPage" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
