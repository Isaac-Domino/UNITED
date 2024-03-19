import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

const HomePage = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <main>
      <div className="w-full h-screen relative">
        <div className="absolute w-full h-full -z-10">
          <Image fill alt="Background" src={"/bg.jpg"}></Image>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
