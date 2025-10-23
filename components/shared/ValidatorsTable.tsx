import ValidatorRow from "./ValidateRow";

const validators = [
  { name: "Validator 1", staked: "40,246,796.15", apy: 4.6 },
  { name: "Validator 2", staked: "10,090,383.12", apy: 4.2 },
  { name: "Validator 3", staked: "10,090,383.12", apy: 4.5 },
  { name: "Validator 4", staked: "10,090,383.12", apy: 4.5 },
  { name: "Validator 5", staked: "10,383.12", apy: 4.6 },
];

export default function ValidatorsTable() {
  return (
    <div className="bg-[#547F7F33] border border-[#547F7F99] rounded-xl w-full max-w-6xl overflow-hidden ">
      {/* Header */}
      <div className="flex justify-between px-6 py-3 border-b border-[#547F7F99] text-gray-300 font-semibold">
        <div className="w-1/3">Validator</div>
        <div className="w-1/3">Staked</div>
        <div className="w-1/3 text-right">Effective APY</div>
      </div>

      {/* Rows */}
      {validators.map((v, i) => (
        <ValidatorRow key={i} {...v} />
      ))}
    </div>
  );
}
