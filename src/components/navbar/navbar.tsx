import Link from "next/link";
import { NavbarProps } from "./navbarProps";

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <header className="w-full sticky top-0 px-[20px] py-[15px] bg-white border-[1px] border-zinc-200 shadow-xs">
      <Link href="/" prefetch>
        <p className="text-2xl font-headline inline-block">{title}</p>
      </Link>
    </header>
  );
};

export default Navbar;
