import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Menubar } from "./ui/menubar";
import Image from "next/image";
const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const Nav = [
    {
      title: "PROFILE",
      link: "/",
    },
    {
      title: "GALLERY",
      link: "/",
    },
    {
      title: "ACCOMPLISHMENTS",
      link: "/",
    },
    {
      title: "HOUSE BILLS",
      link: "/housebills",
    },
    {
      title: "CONTACT",
      link: "/",
    },
  ];
  return (
    <nav className="w-full h-24 bg-red-500 z-10 absolute top-0 left-0">
      <div className="relative w-full  h-full flex items-center justify-between px-8 ">
        <Link
          href={"/"}
          className="flex lg:hidden text-5xl font-bold tracking-wider text-white"
        >
          USCP
        </Link>
        <Link
          href={"/"}
          className="hidden lg:flex text-5xl font-bold tracking-wider text-white"
        >
          UNITED Senior Citizens Partylist
        </Link>
        <div className="relative w-[80px] h-[80px] flex md:hidden">
          <Image fill alt="LOGO" src={"/logo.png"}></Image>
        </div>
        <div className="hidden md:flex">
          {Nav.map((item, index) => (
            <Link href={item.link} key={index}>
              <Button
                variant={"link"}
                className=" text-white text-lg font-semibold hover:bg-slate-200/50 duration-300 transition-all ease-out hover:scale-105"
              >
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <Drawer>
            <DrawerTrigger>
              <Menu size={40} className="text-white" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>NAVIGATIONS</DrawerTitle>
              </DrawerHeader>
              <DrawerFooter>
                {Nav.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <Button
                      className="w-full font-semibold"
                      variant={"secondary"}
                    >
                      {item.title}
                    </Button>
                  </Link>
                ))}
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
