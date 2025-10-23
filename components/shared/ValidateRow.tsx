interface Validateprops {
  name: string;
  staked: string;
  apy: number;
}

const ValidatorRow = ({ name, staked, apy }: Validateprops) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-[#547F7F99] text-sm">
      {/* Validator */}
      <div className="flex items-center gap-3 w-1/3">
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        <p className="text-white">{name}</p>
      </div>

      {/* Staked */}
      <div className="w-1/3">
        <p className="text-white font-medium">{staked}</p>
      </div>

      {/* APY */}
      <div className="w-1/3 text-right">
        <p className="text-white">{apy}%</p>
      </div>
    </div>
  );
};

export default ValidatorRow;
