import { getCurrencyDetails } from '@/utils/getCurrencyDetails';

interface CurrencyIconProps {
  currency: string;
}

export const CurrencyItem = ({ currency }: CurrencyIconProps) => {
  const { symbol, fullName } = getCurrencyDetails(currency);

  return (
    <div className="flex items-center gap-3 flex-1">
      <span className="size-7.5 flex items-center justify-center text-xs text-blue-700 bg-blue-50 rounded-full border border-blue-200">
        {symbol}
      </span>
      <div className="flex flex-col gap-0.5 text-start">
        <p className="font-semibold text-sm">{currency}</p>
        <p className="text-xs text-neutral-500">{fullName}</p>
      </div>
    </div>
  );
};
