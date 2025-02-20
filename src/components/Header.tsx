import Image from "next/image";
import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/navbar";

const Header = () => {
  const MenuList = [
    {
      name: "Início",
      path: "/"
    },
    {
      name: "Criar História",
      path: "/create-story"
    },
    {
      name: "Explorar Histórias",
      path: "/explore"
    },
    {
      name: "Contato",
      path: "/contact"
    }
  ]

  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={40}
            height={40}
          />
          <h2 className="font-bold text-2xl text-primary ml-3">Fabulinha</h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        {MenuList.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.path}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  )
}

export { Header }