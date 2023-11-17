'use client';

import { Button, Navbar } from 'flowbite-react';
import LoginModalComponent from './loginModal';

function NavbarComponent
() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/images/DealinkLogo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/user">User</Navbar.Link>
        <Navbar.Link href="/admin">Admin</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
      <LoginModalComponent />
    </Navbar>
  );
}

export default NavbarComponent;