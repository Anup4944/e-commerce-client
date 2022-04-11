import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
  HomeOutlined,
  ComputerRounded,
  AccountBox,
  HistoryOutlined,
  FavoriteOutlined,
  SecurityOutlined,
  CollectionsBookmarkOutlined,
} from "@material-ui/icons";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Logo = styled.h1``;

const Decs = styled.p`
  margin: 20px 0px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fcf5f5;
  ${mobile({ backgroundColor: "#eee" })}
`;

const Title = styled.h3`
  margin-bottom: 8px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  background-color: skyblue;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  const { isAuth, clients } = useSelector((state) => state.login);
  return (
    <Container>
      <Left>
        <Logo>ANUP'S </Logo>
        <Decs>Lorem Ipsum</Decs>
        <Social>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>
        </Social>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            {" "}
            <HomeOutlined style={{ marginRight: "10px" }} />
            <Link to="/" className="link">
              Home
            </Link>
          </ListItem>
          <ListItem>
            {" "}
            <CollectionsBookmarkOutlined style={{ marginRight: "10px" }} />{" "}
            <Link to="/product" className="link">
              Products
            </Link>
          </ListItem>
          <ListItem>
            {" "}
            <ShoppingCartOutlinedIcon style={{ marginRight: "10px" }} />{" "}
            <Link to="/cart" className="link">
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <ComputerRounded style={{ marginRight: "10px" }} />{" "}
            <Link to="/shop-by-category" className="link">
              Shop by category
            </Link>
          </ListItem>

          {isAuth ? (
            <ListItem>
              {" "}
              <HistoryOutlined style={{ marginRight: "10px" }} />{" "}
              <Link to={`/purchase-history/${clients._id}`} className="link">
                Purchase History
              </Link>
            </ListItem>
          ) : null}
          <ListItem>
            {" "}
            <FavoriteOutlined style={{ marginRight: "10px" }} />{" "}
            <Link to={`/liked-product/${clients._id}`} className="link">
              Liked Products
            </Link>
          </ListItem>
          <ListItem>
            {" "}
            <SecurityOutlined style={{ marginRight: "10px" }} /> Terms
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 903 Princess Highway NSW
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} />
          +61 403 852 741{" "}
        </ContactItem>
        <ContactItem>
          {" "}
          <Mail style={{ marginRight: "10px" }} /> anup@info.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
