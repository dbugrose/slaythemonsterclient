import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function NavLinks() {
  return (
    <Navbar fluid rounded>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
              <span className="block text-sm">Dragonslayer123</span>

          }
        >
          <DropdownItem><NavbarLink href="/pages/profile">Profile</NavbarLink></DropdownItem>
          <DropdownItem><NavbarLink href="/pages/friends">Friends</NavbarLink></DropdownItem>
          <DropdownItem><NavbarLink href="/pages/settings">Settings</NavbarLink></DropdownItem>

          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/pages/missions">Missions</NavbarLink>
        <NavbarLink href="/pages/battle">Battle</NavbarLink>
        <NavbarLink href="/pages/records">Records</NavbarLink>
        <NavbarLink href="/pages/co-op">Co-Op</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}