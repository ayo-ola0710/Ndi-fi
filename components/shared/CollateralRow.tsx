import { Button } from "../ui/button";

interface ValueProps {
  name: string;
  price: string;
  balance: string;
}

const CollateralRow = ({ name, price, balance }: ValueProps) => {
  return (
    <div>
      <div className="flex items-center justify-between border border-[#547F7F99] p-2 rounded-md ">
        <div className="flex gap-2 md:gap-5 items-center">
          <div className="bg-[#474747] w-8 h-8 md:w-15  md:h-15"></div>
          <div>
            <p>{name}</p>
            <p className="text-[10px] md:text-sm text-[#39D4DF] flex">
              Price ${price} <span className="hidden md:block">|</span>
              <br className="md:hidden" /> Balance {balance}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <Button className="md:px-10 bg-[#39D4DF] rounded-2xl hover:bg-[#a0edf3] hover:scale-105 text-black">
            Deposit
          </Button>
          <Button className="bg-transparent md:px-10 text-[#39D4DF] border border-[#39D4DF] hover:bg-[#39D4DF] rounded-2xl hover:text-white hover:scale-105 cursor-pointer">
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollateralRow;
