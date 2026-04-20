import "./App.css";
import styled from "@emotion/styled";
import imgUrl from "./assets/testLogo.png";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Nav = styled.nav`
  padding: 5;
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

const NavBar = () => {
  return (
    <Nav>
      <MenuLogo src={imgUrl} />
      <SearchInput />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/FirstPage">FirstPage</NavLink>
      <NavLink to="/SecondPage">SecondPage</NavLink>
      <NavLink to="/ThirdPage">ThirdPage</NavLink>
    </Nav>
  );
};

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/ThirdPage" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
