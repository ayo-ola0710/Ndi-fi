"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 md:px-20 py-5 border-b border-[#141616] fixed top-0 w-full">
      <p className="text-xl">Ndi-Fi</p>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-[12px]">
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Button className="hidden md:block bg-[#06F9F9] text-black hover:bg-[#9af1f1] cursor-pointer hover:scale-105">
        Connect Wallet
      </Button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full  border-b border-[#141616] md:hidden">
          <ul className="flex flex-col gap-4 p-4 text-[12px]">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer py-2">
                DashBoard
              </li>
            </Link>
            <Link href="/deposit" onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer py-2">
                Deposit
              </li>
            </Link>
            <Link href="/borrow" onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer py-2">
                Borrow
              </li>
            </Link>
            <Link href="/stake" onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer py-2">
                Stake
              </li>
            </Link>
            <li className="pt-4">
              <Button className="w-full bg-[#06F9F9] text-black hover:bg-[#9af1f1] cursor-pointer hover:scale-105">
                Connect Wallet
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
