/* eslint-disable @next/next/no-img-element */
"use client";

import { Dropdown, Navbar, Avatar } from "flowbite-react";
import LoginModalComponent from "./loginModal";
import { useEffect, useState } from "react";
import Link from "next/link";

function NavbarComponent() {
    const [info_login, set_info_login] = useState();
    const login = localStorage.getItem("login");
    useEffect(() => {
        if (login) {
            set_info_login(JSON.parse(login));
            console.log(info_login);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("login");
        set_info_login("");
    };
    return (
        <Navbar
            fluid
            rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img
                    src="/images/DealinkLogo.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse>
                <Link href="/">
                  <Navbar.Link
                      active></Navbar.Link>
                </Link>
                <Link href="/about"><Navbar.Link>About</Navbar.Link></Link>
                <Link href="/user"><Navbar.Link>User</Navbar.Link></Link>
                <Link href="/admin"><Navbar.Link>Admin</Navbar.Link></Link>
                <Link href="/contact"><Navbar.Link>Contact</Navbar.Link></Link>
            </Navbar.Collapse>

            {info_login?.nama_lengkap ? (
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            img="https://picsum.photos/200/300"
                            rounded
                        />
                    }>
                    <Dropdown.Header>
                        <span className="block text-sm font-bold">
                            {info_login.nama_lengkap}
                        </span>
                        <span className="block truncate text-sm font-medium">
                            {info_login.username}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown>
            ) : (
                <LoginModalComponent />
            )}
        </Navbar>
    );
}

export default NavbarComponent;
