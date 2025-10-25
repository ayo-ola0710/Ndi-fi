"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaQuestionCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "../ui/spinner";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const isConnected = false;

  return (
    <>
      {showWalletModal && (
        <div className="fixed inset-0 bg-black/95 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#151D1D66] border border-[#547F7F33] rounded-lg p-6 w-80">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">Connect Wallet</span>
              <button onClick={() => setShowWalletModal(false)}>
                <X size={15} />
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 hover:bg-[#5DCBCB] rounded cursor-pointer">
                <span className="bg-[#5DCBCB] w-8 h-8 rounded"></span>
                <p className="text-white">Wallet 1</p>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-[#5DCBCB] rounded cursor-pointer">
                <span className="bg-[#5DCBCB] w-8 h-8 rounded"></span>
                <p className="text-white">Wallet 2</p>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-[#5DCBCB] rounded cursor-pointer">
                <span className="bg-[#5DCBCB] w-8 h-8 rounded"></span>
                <p className="text-white">Wallet 3</p>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-[#5DCBCB] rounded cursor-pointer">
                <span className="bg-[#5DCBCB] w-8 h-8 rounded"></span>
                <p className="text-white">Wallet 4</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <motion.div
        className="flex justify-between items-center px-4 md:px-20 py-5 bg-[#141616] border-b border-[#141616] fixed top-0 w-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
        <DropdownMenu>
          <DropdownMenuTrigger className="hidden md:block">
            <Button className=" bg-[#06F9F9] text-black hover:bg-[#9af1f1] cursor-pointer hover:scale-105">
              {isLoading ? (
                <span className="flex gap-2">
                  <Spinner />
                  <p>Connecting</p>
                </span>
              ) : isConnected ? (
                "07q....ox23"
              ) : (
                "Connect Wallet"
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#151D1D66] border border-[#547F7F33] mr-20 mt-3">
            <DropdownMenuLabel className="flex justify-between text-white gap-4 items-center text-[12px] w-65 ">
              <span>
                <FaQuestionCircle />
              </span>
              <span>Connect Wallet</span>
              <span>
                <X size={15} />
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className=" border border-[#547F7F33]" />
            <DropdownMenuItem className="hover:scale-105 focus:bg-[#5DCBCB] p-3">
              <span className="bg-[#5DCBCB] w-8 h-8"></span>
              <p className="text-white">Wallet 1</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:scale-105 focus:bg-[#5DCBCB] p-3">
              <span className="bg-[#5DCBCB] w-8 h-8"></span>
              <p className="text-white">Wallet 2</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:scale-105 focus:bg-[#5DCBCB] p-3">
              <span className="bg-[#5DCBCB] w-8 h-8"></span>
              <p className="text-white">Wallet 3</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:scale-105 focus:bg-[#5DCBCB] p-3">
              <span className="bg-[#5DCBCB] w-8 h-8"></span>
              <p className="text-white">Wallet 4</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Mobile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden">
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#161D1D] border border-[#547F7F33] mr-5 mt-3 w-50 space-y-3">
            <DropdownMenuItem className="hover:scale-105 focus:bg-[#5DCBCB] mt-2">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <span className="hover:scale-105 cursor-pointer text-white ml-7">
                  DashBoard
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:scale-105 focus:bg-[#5DCBCB]">
              <Link href="/deposit" onClick={() => setIsOpen(false)}>
                <span className="hover:scale-105 cursor-pointer text-white ml-7">
                  Deposit
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:scale-105 focus:bg-[#5DCBCB]">
              <Link href="/borrow" onClick={() => setIsOpen(false)}>
                <span className="hover:scale-105 cursor-pointer text-white ml-7">
                  Borrow
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:scale-105 focus:bg-[#5DCBCB]">
              <Link href="/stake" onClick={() => setIsOpen(false)}>
                <span className="hover:scale-105 cursor-pointer text-white ml-7">
                  Stake
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:scale-105 focus:bg-[#5DCBCB]"
              onClick={() => {
                setIsOpen(false);
                setShowWalletModal(true);
              }}
            >
              <span className="hover:scale-105 cursor-pointer text-white ml-3 bg-[#5DCBCB] px-8 py-2 rounded-md ">
                {isConnected ? "07q....ox23" : "Connect Wallet"}
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </>
  );
};

export default Navbar;
