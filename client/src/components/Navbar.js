import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../pages/login/loginAction";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
`;

const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const SearchConatiner = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Name = styled.h1`
  font-size: 15px;
  ${mobile({ fontSize: "24px" })}
`;

const Navbar = () => {
  const { isAuth, clients } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchConatiner>
            <Input placeholder="Search" />
            <SearchOutlinedIcon style={{ color: "red", size: "10px" }} />
          </SearchConatiner>
        </Left>
        <Center>
          <Link to="/" className="link">
            <Logo>ANUP'S.</Logo>
          </Link>
        </Center>
        <Right>
          {!isAuth ? (
            <>
              {" "}
              <Link to="/register" className="link">
                <MenuItem>Register </MenuItem>
              </Link>
              <Link to="/login" className="link">
                <MenuItem>Sign In </MenuItem>
              </Link>
            </>
          ) : (
            <>
              <Name>Hello ! {clients.firstName}</Name>
              <MenuItem onClick={() => dispatch(logoutAction())}>
                Sign Out{" "}
              </MenuItem>
            </>
          )}

          <MenuItem>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon />
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
