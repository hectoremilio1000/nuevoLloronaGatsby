import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import {
  colors,
  transObject,
  transDefault,
} from "../../components/styles/globalStyles";

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "inicio",
      },
      {
        id: 1,
        path: "/reserva",
        name: "reserva",
      },
      {
        id: 2,
        path: "/menullorona",
        name: "Menú",
      },
      {
        id: 3,
        path: "/administrador",
        name: "Administrador",
      },
      {
        id: 4,
        path: "/mezcal",
        name: "Mezcal",
      },
    ],
  };

  render() {
    return (
      <NavbarLinksWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          );
        })}
      </NavbarLinksWrapper>
    );
  }
}

const NavbarLinksWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${transDefault};
    &:hover {
      background: ${colors.mainGrey};
      color: ${colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }

  height: ${props => (props.open ? "auto" : "0px")};
  overflow: hidden;
  ${transObject({})};
  @media (min-width: 768px) {
    height: auto; /* otherwise links won't show up */
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`;
