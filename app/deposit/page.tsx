"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DepositWithdraw from "@/components/shared/DepositWithdraw";
import { IoIosWarning } from "react-icons/io";
import { GiSpanner } from "react-icons/gi";
import { motion } from "framer-motion";

const Deposit = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="ml-4 md:ml-20 mr-4 md:mr-20"
    >
      <p className="text-4xl pt-40">DAI Vault</p>
      <div>
        <Card className="bg-[#547F7F33] w-full max-w-60 h-55 border-none -pb-20">
          <CardHeader>
            <CardTitle className="text-[#969696] text-[15px] flex flex-row  items-end gap-2">
              <div className="bg-[#06F9F9] w-8 h-8 "></div>
              <p className="">DAI</p>
            </CardTitle>
            <CardDescription className="text-[#969696] text-[13px] mt-7">
              Your Deposit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white -mt-4">998 DAI</p>
            <p className="text-xl text-white">$885.56 USD</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <div className="pt-8 flex flex-col md:flex-row gap-4 md:gap-10">
          <Card className="bg-[#547F7F33] w-full max-w-90 h-25 -pb-20 border border-[#547F7F99]">
            <CardHeader>
              <CardTitle className="text-[#969696] text-[15px] -mt-2 ">
                <p className="text-sm">Vault Share Price</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-white -mt-5">$ 1.05</p>
            </CardContent>
          </Card>
          <Card className="bg-[#547F7F33] w-full max-w-90 h-25 -pb-20 border border-[#547F7F99]">
            <CardHeader>
              <CardTitle className="text-[#969696] text-[15px] -mt-2 ">
                <p className="text-sm">APY</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 items-center">
              <p className="text-2xl text-white -mt-5">5.2%</p>
              <p className="text-sm text-[#38C00A] -mt-5 ">+ 0.12%</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="pt-10 space-y-8">
        <div className="bg-[#987E114D] border border-[#D6B00F] text-[#D6B00F] p-6 w-full max-w-190 rounded-md flex items-center gap-2">
          <IoIosWarning className="text-xl" />
          Staking is temporarily paused as the cap has been reached.
        </div>
        <div className="bg-[#CC352D33] border border-[#D61208] text-[#E58B86] p-6 w-full max-w-190 rounded-md flex items-center gap-2">
          <GiSpanner className="text-xl" />
          The platform will undergo scheduled maintenance soon.
        </div>
      </div>
      <div className="mt-20 mb-40">
        <DepositWithdraw />
      </div>
    </motion.div>
  );
};

export default Deposit;
