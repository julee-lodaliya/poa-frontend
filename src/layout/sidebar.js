import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const Sidebar = () => {
  return (
    <aside className="cook_side_bar">
      <Navbar
        collapseOnSelect
        expand="lg"
        aria-orientation="verical"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect width="32" height="32" rx="4" fill="white" />

                <path fill="black" d="M7 7V13.75H13.75V7H7Z" />
                <path fill="black" d="M18.25 7V13.75H25V7H18.25Z" />
                <path fill="black" d="M7 18.25V25H13.75V18.25H7Z" />
                <path fill="black" d="M18.25 18.25V25H25V18.25H18.25Z" />
              </svg>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <rect y="0.300781" width="32" height="32" rx="4" fill="white" />
                <path
                  d="M7 21.3008L9 23.3008L13 19.3008M7 11.3008L9 13.3008L13 9.30078M17 10.3008H25M17 16.3008H25M17 22.3008H25"
                  stroke="black"
                  strokeOpacity="0.8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
