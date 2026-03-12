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

useEffect(() => {
  const user = loggedInData();
setUsername(user?.username || "");
}, [])

  return (
    <div>    
      <Navbar fluid rounded className="bg-[#053A58]!" >
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          className={checkToken() ? "" : "hidden"}
          label={
              <span className="block text-sm">{checkToken() ? `${username}` : "Login | Create Account"}</span>
          }
        >
          <DropdownItem><NavbarLink className={checkToken() ? "" : "hidden"} href={checkToken() ? "/profile" : "/login"}>Profile</NavbarLink></DropdownItem>
          <DropdownItem><NavbarLink className={checkToken() ? "" : "hidden"} href={checkToken() ? "/friends" : "/login"}>Friends</NavbarLink></DropdownItem>
          <DropdownItem><NavbarLink className={checkToken() ? "" : "hidden"} href={checkToken() ? "/settings" : "/login"}>Settings</NavbarLink></DropdownItem>

          <DropdownDivider />
          <DropdownItem className={checkToken() ? "" : "hidden"}>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" className="text-white!">
          Home
        </NavbarLink>
        <NavbarLink href={checkToken() ? "/missions" : "/login"} className="text-white!">Missions</NavbarLink>
        <NavbarLink href={checkToken() ? "/battle" : "/login"} className="text-white!">Battle</NavbarLink>
        <NavbarLink href={checkToken() ? "/records" : "/login"} className="text-white!">Records</NavbarLink>
        <NavbarLink href={checkToken() ? "/co-op" : "/login"} className="text-white!">Co-Op</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </div>
  );
}