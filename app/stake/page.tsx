import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ValidatorsTable from "@/components/shared/ValidatorsTable";

const stat = [
  { title: "Total Staked", value: "$ 1,235,123", change: "+3.2%" },
  { title: "Staked Rewards", value: "$ 12,500", change: "+1.2%" },
  { title: "Current APY", value: "9.9%", change: "-0.3%" },
  { title: "Pending Rewards", value: "128 NDI", change: "+ 2.1%" },
];

const Stake = () => {
  return (
    <div className="pt-40 ml-20 mr-20">
      <p className="text-4xl pb-9">Stake</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mb-8">
        {stat.map((item, i) => (
          <Card
            key={i}
            className="bg-[#547F7F33] border border-[#547F7F99] shadow-sm w-60"
          >
            <CardHeader>
              <CardTitle className="text-gray-300 text-sm font-medium">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-white -mt-5">
                {item.value}
              </p>
              <p
                className={`text-sm ${
                  item.change.includes("-") ? "text-red-400" : "text-green-400"
                }`}
              >
                {item.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 w-full max-w-6xl mb-10 mt-20 pr-9 ">
        <Card className="bg-[#547F7F1A] border border-[#547F7F99] rounded-xl">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Stake DAI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between pr-55">
                <label className="text-gray-300 text-sm">Amount to Stake</label>
                <p className="text-gray-400 text-xs mt-1">Balance: 9,500 DAI</p>
              </div>
              <div className="flex  mt-2 justify-between items-center pr-10">
                <div>
                  <Input
                    placeholder="Enter Amount"
                    className="bg-[#161A1A] border-[#547F7F99] text-white relative w-210 py-5"
                  />
                  <Button className="absolute right-90 mt-0.5 bg-transparent hover:text-blue-300 cursor-pointer -ml-10">
                    MAX
                  </Button>
                </div>
                <Button className="bg-[#0ff] text-black font-semibold hover:bg-[#0dd] px-8 py-3 hover:scale-105 cursor-pointer">
                  Approve DAI
                </Button>
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-sm mb-2">
                Staking Duration: 21 Days
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#547F7F1A] border border-[#547F7F99] rounded-xl">
          <CardHeader>
            <CardTitle className="text-white text-2xl">
              Withdraw Stake
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300 text-sm">Amount to Stake</p>
            <p className="text-cyan-400 text-xl font-semibold">
              20d 15h 30m 12s
            </p>
            <p className="text-gray-400 text-xs">
              You can request to withdraw your stake. A 21-day cooldown period
              is <br /> required before you can execute the withdrawal.
            </p>
            <Button className="bg-[#0ff] text-black font-semibold hover:bg-[#0dd] mt-3 hover:scale-105 cursor-pointer">
              Request Withdrawal
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="pr-9 mt-40 mb-40">
        <ValidatorsTable />
      </div>
    </div>
  );
};

export default Stake;
