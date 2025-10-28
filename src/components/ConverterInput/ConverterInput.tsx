interface ConverterInputProps {
  amount: string;
  onChangeAmount: (amount: string) => void;
  ref: React.RefObject<HTMLInputElement | null>;
}

export const ConverterInput = ({
  amount,
  onChangeAmount,
  ref,
}: ConverterInputProps) => {
  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeAmount(e.target.value);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold" htmlFor="amount">
        Amount
      </label>
      <input
        ref={ref}
        className="flex-1 p-3 border border-neutral-300 bg-neutral-50 text-center rounded-2xl outline-none"
        type="text"
        id="amount"
        value={amount}
        onChange={handleChangeAmount}
      />
    </div>
  );
};
