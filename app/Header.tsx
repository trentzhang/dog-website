"use client";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About Us", href: "#about-us" },
    { name: "Our Dogs", href: "#our-dogs" },
    { name: "Puppies", href: "#puppy-ies" },
    { name: "Beginner Guide", href: "#dog-essentials" },
    { name: "Contact Us", href: "#contact-us" },
    // "Profile",
    // "Dashboard",
    // "Activity",
    // "Analytics",
    // "System",
    // "Deployments",
    // "My Settings",
    // "Team Settings",
    // "Help & Feedback",
    // "Log Out",
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}

          <p className="font-bold text-inherit text-4xl font-cursive">
            {" "}
            Paw Hills
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4  font-cursive"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={item.href} className="text-2xl">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              //   color={
              //     index === 2
              //       ? "primary"
              //       : index === menuItems.length - 1
              //       ? "danger"
              //       : "foreground"
              //   }
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
