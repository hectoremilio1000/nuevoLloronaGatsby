import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../data/imagenes/logo_alta_sin_nombre.png";

import {
  colors,
  letterSpacing,
  transObject,
} from "../../components/styles/globalStyles";

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props;

    return (
      <NavbarHeaderWrapper>
        <Link to="/" className="logo">
          <img src={logo} width="100" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar();
          }}
        />
      </NavbarHeaderWrapper>
    );
  }
}
const NavbarHeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    margin-top: 0.01rem;
    font-family: avenir, sans-serif;
    font-weight: 600;
    ${letterSpacing({ spacing: ".3rem" })};
    transform: skew(-15deg);
    font-size: 1.75rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.mainWhite};
    text-shadow: 1px 1px 0 rgba(${colors.mainGrey}, 0.4);
  }

  .logo {
    background-image: url("../data/imagenes/logo_alta_sin_nombre.png");
    background-image: linear-gradient(
      to right,
      ${colors.mainWhite} 70%,
      ${colors.mainYellow} 50%
    );
    background-position: 0;
    background-size: 200%;
    transition: all 0.4s;
    &:hover {
      background-position: -100%;
    }
  }
  .toggle-icon {
    cursor: pointer;
    font-size: 1.75rem;
    color: ${colors.mainGrey};
    ${transObject({})};
    &:hover {
      color: ${colors.mainYellow};
    }
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;
