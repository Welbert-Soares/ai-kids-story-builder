"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";

const Header = () => {
  const MenuList = [
    {
      name: "Início",
      path: "/",
    },
    {
      name: "Criar História",
      path: "/create-story",
    },
    {
      name: "Explorar Histórias",
      path: "/explore",
    },
    {
      name: "Contato",
      path: "/contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
          <h2 className="font-bold font-title text-3xl text-primary ml-3">
            Fabulinha
          </h2>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex">
        {MenuList.map((item, index) => (
          <NavbarItem
            key={index}
            className="text-xl text-primary font-medium hover:underline ml-2"
          >
            <Link href={item.path}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Button color="primary">Entrar</Button>
      </NavbarContent>

      <NavbarMenu>
        {MenuList.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.path}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export { Header };
