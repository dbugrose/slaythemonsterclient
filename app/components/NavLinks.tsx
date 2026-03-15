"use client"
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Button, Label, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AccountForm from "./AccountForm";
import { checkToken, getUserByUsername, loggedInData } from "@/lib/user-services";
import { UserData } from "@/interfaces/interface";

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
        <NavbarLink href={isLoggedIn ? "/co-op" : "/login"} className="text-white!">Co-Op</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </div>
  );
}