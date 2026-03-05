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

export function NavLinks() {
  return (
    <Navbar fluid rounded className="bg-[#053A58]!" >
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
        <NavbarLink href="/" className="text-white!">
          Home
        </NavbarLink>
        <NavbarLink href="/pages/missions" className="text-white!">Missions</NavbarLink>
        <NavbarLink href="/pages/battle" className="text-white!">Battle</NavbarLink>
        <NavbarLink href="/pages/records" className="text-white!">Records</NavbarLink>
        <NavbarLink href="/pages/co-op" className="text-white!">Co-Op</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}