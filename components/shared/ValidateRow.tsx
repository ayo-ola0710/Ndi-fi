interface Validateprops {
  name: string;
  staked: string;
  apy: number;
}

const ValidatorRow = ({ name, staked, apy }: Validateprops) => {
  return (
    <div className="flex flex-row items-center justify-between px-6 py-4 border-b border-[#547F7F99] text-sm">
      {/* Validator */}
      <div className="flex items-center gap-3  md:w-1/3 mb-2 md:mb-0">
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        <p className="text-white">{name}</p>
      </div>

      {/* Staked */}
      <div className=" md:w-1/3 mb-2 md:mb-0">
        <p className="text-white font-medium">{staked}</p>
      </div>

      {/* APY */}
      <div className=" md:w-1/3 text-left md:text-right">
        <p className="text-white">{apy}%</p>
      </div>
    </div>
  );
};

export default ValidatorRow;
