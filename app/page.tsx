import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import VaultsTable from "@/components/shared/VaultsTable";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center pt-40">
        <div className="flex items-center gap-10 bg-[#547F7F33] w-285 px-15 py-5 justify-between">
          <div className="space-y-3">
            <p className="text-6xl text-[#06F9F9]">
              Transparent. Secure. <br /> Decentralized.
            </p>
            <p className="text-sm">
              Ndi-Fi puts you in control of your digital wealth — with <br />
              open-source smart contracts and verified on-chain data.
            </p>
          </div>
          <Image src="/images/Hero.png" alt="Image" width={350} height={100} />
        </div>
      </div>
      <div>
        <div className="flex justify-center -ml-230 pt-10">
          <p className="text-2xl">Protocol Metrics</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-10 -ml-35 pt-10">
            <Card className="bg-[#547F7F33] w-55 border border-[#547F7F99]">
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
            <Card className="bg-[#547F7F33] w-55 border border-[#547F7F99]">
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
            <Card className="bg-[#547F7F33] w-55 border border-[#547F7F99]">
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
            <Card className="bg-[#547F7F33] w-55 border border-[#547F7F99]">
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
          <div className="flex justify-center gap-10 -ml-55 pt-10 pb-10">
            <Card className="bg-[#547F7F33] w-70 border border-[#547F7F99] -pb-20">
              <CardHeader>
                <CardTitle className="text-[#969696] text-[12px] -mt-2">
                  Utilization Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white -mt-6">66.7%</p>
              </CardContent>
            </Card>
            <Card className="bg-[#547F7F33] w-70 border border-[#547F7F99] -pb-20">
              <CardHeader>
                <CardTitle className="text-[#969696] text-[12px] -mt-2">
                  Vault Staking Cap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white -mt-6">70k NDI</p>
              </CardContent>
            </Card>
            <Card className="bg-[#547F7F33] w-70 border border-[#547F7F99] -pb-20">
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
        <div className="flex justify-center -ml-260 pt-10">
          <p className="text-2xl">Vaults</p>
        </div>
        <VaultsTable />
      </div>
    </div>
  );
};

export default Home;
