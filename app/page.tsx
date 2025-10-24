"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import VaultsTable from "@/components/shared/VaultsTable";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center pt-40 px-4">
        <div className="flex flex-row  items-center gap-10 bg-[#547F7F33] w-full max-w-4xl md:max-w-6xl px-4 md:px-15 py-5 justify-between">
          <div className="space-y-3  lg:text-left">
            <p className="text-xl md:text-6xl text-[#06F9F9]">
              Transparent. Secure. <br /> Decentralized.
            </p>
            <p className="text-[10px] md:text-sm">
              Ndi-Fi puts you in control of your digital
              <br className="md:hidden" />
              wealth — with <br className="hidden md:block" />
              open-source smart contracts <br className="md:hidden" /> and
              verified on-chain data.
            </p>
          </div>
          <Image
            src="/images/Hero.png"
            alt="Image"
            width={350}
            height={100}
            className="w-full max-w-20 md:max-w-sm "
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center -ml-35 md:-ml-230 pt-10">
          <p className="text-2xl">Protocol Metrics</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 md:-ml-35 pt-10">
            <Card className="bg-[#547F7F33] md:w-55 w-40 border border-[#547F7F99]">
              <CardHeader>
                <CardTitle className="text-[#969696] text-[12px] -mt-2">
                  Total Value Locked
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white -mt-5">$ 99.1k</p>
                <p className="text-[#38C00A] text-[12px] -mb-2">+ 2.5%</p>
              </CardContent>
            </Card>
            <Card className="bg-[#547F7F33] md:w-55 border border-[#547F7F99]">
              <CardHeader>
                <CardTitle className="text-[#969696] text-[12px] -mt-2">
                  Total Collateral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white -mt-5">$ 80.5k</p>
                <p className="text-[#38C00A] text-[12px] -mb-2">+ 2.5%</p>
              </CardContent>
            </Card>
            <Card className="bg-[#547F7F33] md:w-55 border border-[#547F7F99]">
              <CardHeader>
                <CardTitle className="text-[#969696] text-[12px] -mt-2">
                  Total Borrowed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white -mt-5">$ 45.1k</p>
                <p className="text-[#FF0000] text-[12px] -mb-2">- 0.5%</p>
              </CardContent>
            </Card>
            <Card className="bg-[#547F7F33] md:w-55 border border-[#547F7F99]">
              <CardHeader>
                <CardTitle className="text-[#969696] text-[12px] -mt-2">
                  Available Liquidity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white -mt-5">$ 55k</p>
                <p className="text-[#38C00A] text-[12px] -mb-2">+ 3.1%</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center gap-10 ml-7 md:-ml-55 pt-10 pb-10">
            <Card className="bg-[#547F7F33] w-85 md:w-70 border border-[#547F7F99] -pb-20">
              <CardHeader>
                <CardTitle className="text-[#969696] text-[12px] -mt-2">
                  Utilization Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white -mt-6">66.7%</p>
              </CardContent>
            </Card>
            <Card className="bg-[#547F7F33] w-85 md:w-70 border border-[#547F7F99] -pb-20">
              <CardHeader>
                <CardTitle className="text-[#969696] text-[12px] -mt-2">
                  Vault Staking Cap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white -mt-6">70k NDI</p>
              </CardContent>
            </Card>
            <Card className="bg-[#547F7F33] w-85 md:w-70 border border-[#547F7F99] -pb-20">
              <CardHeader>
                <CardTitle className="text-[#969696] text-[12px] -mt-2">
                  Protocol Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white -mt-6">Normal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="mb-30">
        <div className="flex justify-center -ml-200 md:-ml-260 pt-10">
          <p className="text-2xl">Vaults</p>
        </div>
        <div className="overflow-x-hidden">
          <VaultsTable />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
