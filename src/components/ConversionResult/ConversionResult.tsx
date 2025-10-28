import { getCurrencyDetails } from '@/utils/getCurrencyDetails';
import { Box } from '../Box/Box';

interface ConversionResultProps {
  baseAmount: string;
  targetAmount: string;
  rate: string;
  inversedRate: string;
  baseCurrency: string;
  targetCurrency: string;
}

export const ConversionResult = ({
  baseAmount,
  targetAmount,
  rate,
  inversedRate,
  baseCurrency,
  targetCurrency,
}: ConversionResultProps) => {
  const formattedBaseAmount = baseAmount === '' ? '0' : baseAmount;
  const formattedTargetAmount = targetAmount === '' ? '0' : targetAmount;

  const amountWithSymbol = `${getCurrencyDetails(targetCurrency).symbol}${formattedTargetAmount}`;
  const subText = `${formattedBaseAmount} ${baseCurrency} =`;
  const rateString = `1 ${baseCurrency} = ${rate} ${targetCurrency}`;
  const inversedRateString = `1 ${targetCurrency} = ${inversedRate} ${baseCurrency}`;

  return (
    <Box className="w-[336px]">
      <p className="text-lg font-semibold">Conversion result</p>
      <div className="flex flex-col gap-1 items-center border-b border-neutral-200 pb-6">
        <p className="font-bold text-2xl">{amountWithSymbol}</p>
        <p className="text-xs font-medium text-neutral-500">{subText}</p>
      </div>
      <div className="flex flex-col gap-3 font-semibold text-xs border-b border-neutral-200 pb-6">
        <p className="flex justify-between">
          <span className="text-neutral-500">Exchange Rate</span>
          <span>{rateString}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-neutral-500">Inverse Rate</span>
          <span>{inversedRateString}</span>
        </p>
      </div>
      <p className="bg-neutral-50 rounded-2xl px-3 py-2 text-xs text-neutral-500 text-center">
        Rates are for informational purposes only and may not reflect real-time
        market rates
      </p>
    </Box>
  );
};
