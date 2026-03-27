"use client"
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import React, { useEffect, useState } from 'react'
import { getToken, loggedInData, checkToken } from "@/lib/user-services";

export function NavLinks() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


useEffect(() => {
  const user = loggedInData();
setUsername(user?.username || "");
setIsLoggedIn(checkToken());
}, [])

  return (
    <div>    
      <Navbar fluid rounded className="bg-[#053A58]!" >
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          className={isLoggedIn ? "" : "hidden"}
          label={
              <span className="block text-sm">{isLoggedIn ? `${username}` : "Login | Create Account"}</span>
          }
        >
          <DropdownItem><NavbarLink className={isLoggedIn ? "" : "hidden"} href={isLoggedIn ? "/profile" : "/login"}>Profile</NavbarLink></DropdownItem>
          <DropdownItem><NavbarLink className={isLoggedIn ? "" : "hidden"} href={isLoggedIn ? "/friends" : "/login"}>Friends</NavbarLink></DropdownItem>
          <DropdownItem><NavbarLink className={isLoggedIn ? "" : "hidden"} href={isLoggedIn ? "/settings" : "/login"}>Settings</NavbarLink></DropdownItem>

          <DropdownDivider />
          <DropdownItem className={isLoggedIn ? "" : "hidden"}>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" className="text-white!">
          Home
        </NavbarLink>
        <NavbarLink href={isLoggedIn ? "/missions" : "/login"} className="text-white!">Missions</NavbarLink>
        <NavbarLink href={isLoggedIn ? "/battle" : "/login"} className="text-white!">Battle</NavbarLink>
        <NavbarLink href={isLoggedIn ? "/records" : "/login"} className="text-white!">Records</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </div>
  );
}
