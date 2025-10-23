import VaultRow from "./VaultRow";

const vaults = [
  {
    name: "Vault Name 1",
    totalDeposits: "45.2k",
    curator: "Curator 1",
    liquidity: "45.2k",
    collateralCount: 4,
    apy: "7.45",
  },
  {
    name: "Vault Name 2",
    totalDeposits: "45.2k",
    curator: "Curator 1",
    liquidity: "45.2k",
    collateralCount: 4,
    apy: "7.45",
  },
  {
    name: "Vault Name 3",
    totalDeposits: "45.2k",
    curator: "Curator 1",
    liquidity: "45.2k",
    collateralCount: 4,
    apy: "7.45",
  },
];

const VaultsTable = () => {
  return (
    <div className="bg-[#547F7F33] text-white rounded-2xl overflow-hidden border border-[#547F7F99] w-full md:max-w-6xl ml-5 md:mx-auto mt-10 min-w-[800px]">
      {/* Header */}
      <div className="flex flex-row justify-between px-6 py-4 border-b border-gray-700 font-semibold text-gray-300">
        <div className="w-full md:w-1/5 mb-2 md:mb-0">Vault</div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0">Total Deposits</div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0">Curator</div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0">Liquidity</div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0">Collateral</div>
        <div className="w-full md:w-[10%]">Supply APY</div>
      </div>

      {/* Rows */}
      {vaults.map((vault, index) => (
        <VaultRow key={index} {...vault} />
      ))}
    </div>
  );
};

export default VaultsTable;
