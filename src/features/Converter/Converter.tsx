import { Box } from '@/components/Box/Box';
import { ConversionResult } from '@/components/ConversionResult';
import { ConverterInput } from '@/components/ConverterInput';
import { CurrencySwitch } from '@/components/CurrencySwitch';
import { AMOUNT_REGEX } from '@/const';
import { useRates } from '@providers/RatesContext';
import { getUserInput, setUserInput } from '@services/userInput';
import { useRef, useState } from 'react';
import { CurrencyModal } from '../CurrencyModal';
import { CurrencyPair } from '@/types';

export const Converter = () => {
  const { getRate, currenciesList } = useRates();
  const cachedData = getUserInput();
  const [pair, setPair] = useState<CurrencyPair>({
    base: cachedData?.base || currenciesList[0]?.key,
    target: cachedData?.target || currenciesList[1]?.key,
  });
  const [amount, setAmount] = useState(cachedData?.amount || '1');
  const [currencyModal, setCurrencyModal] = useState<keyof CurrencyPair | null>(
    null
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpenModal = (type: keyof CurrencyPair) => setCurrencyModal(type);
  const handleCloseModal = () => setCurrencyModal(null);

  const handleChangePair = ({ base, target }: Partial<CurrencyPair>) => {
    setPair({
      base: base ?? pair.base,
      target: target ?? pair.target,
    });

    setUserInput({
      amount: amount ?? '',
      base: base ?? pair.base,
      target: target ?? pair.target,
    });

    inputRef.current?.focus();
  };

  const handleSwitchPair = () => {
    handleChangePair({
      base: pair.target,
      target: pair.base,
    });

    inputRef.current?.focus();
  };

  const handleChangeAmount = (amount: string) => {
    if (amount === '' || AMOUNT_REGEX.test(amount)) {
      setAmount(amount);
      setUserInput({
        amount: amount ?? '',
        base: pair.base,
        target: pair.target,
      });
    }
  };

  const rate = getRate(pair.base, pair.target)?.toFixed(6) ?? '';
  const inversedRate = getRate(pair.target, pair.base)?.toFixed(6) ?? '';
  const conversionResult = amount
    ? (Number(amount) * Number(rate)).toFixed(2)
    : '';

  return (
    <div className="flex items-start gap-7.5">
      <Box className="flex-1">
        <ConverterInput
          ref={inputRef}
          amount={amount}
          onChangeAmount={handleChangeAmount}
        />
        <CurrencySwitch
          base={pair.base}
          target={pair.target}
          handleSwitchPair={handleSwitchPair}
          handleOpenModal={handleOpenModal}
        />
      </Box>

      <ConversionResult
        targetAmount={conversionResult}
        rate={rate}
        inversedRate={inversedRate}
        baseAmount={amount}
        baseCurrency={pair.base}
        targetCurrency={pair.target}
      />

      <CurrencyModal
        type={currencyModal}
        onClose={handleCloseModal}
        handleChangePair={handleChangePair}
        currency={currencyModal ? pair[currencyModal] : ''}
      />
    </div>
  );
};
