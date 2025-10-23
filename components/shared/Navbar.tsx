import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 py-5 border-b border-[#141616] fixed top-0 w-full ">
      <p className="text-xl">Ndi-Fi</p>
      <ul className="flex gap-10 text-[12px] ">
        <Link href="/">
          <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer">
            DashBoard
          </li>
        </Link>
        <Link href="/deposit">
          <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer">
            Deposit
          </li>
        </Link>
        <Link href="/borrow">
          <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer">
            Borrow
          </li>
        </Link>
        <Link href="/stake">
          <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer">
            Stake
          </li>
        </Link>
      </ul>
      <Button className="bg-[#06F9F9] text-black hover:bg-[#9af1f1] cursor-pointer hover:scale-105">
        Connect Wallet
      </Button>
    </div>
  );
};

export default Navbar;
