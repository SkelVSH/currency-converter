import { Modal } from '@/components/Modal';
import { useRates } from '@/providers/RatesContext';
import { CurrencyPair } from '@/types';
import { useEffect, useRef, useState } from 'react';
import searchIcon from '@assets/search.svg';
import { CurrencyList } from '@/components/CurrencyList';

interface CurrencyModalProps {
  type: keyof CurrencyPair | null;
  onClose: () => void;
  handleChangePair: (pair: Partial<CurrencyPair>) => void;
  currency: string;
}

export const CurrencyModal = ({
  type,
  onClose,
  handleChangePair,
  currency,
}: CurrencyModalProps) => {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { currenciesList } = useRates();

  const sortedCurrencies = currenciesList.sort((a) =>
    a.key === currency ? -1 : 1
  );

  const filteredCurrencies = sortedCurrencies.filter(
    (item) =>
      item.symbol?.toLowerCase().includes(search.toLowerCase()) ||
      item.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      item.key.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectCurrency = (currency: string) => {
    if (!type) return;

    handleChangePair({ [type]: currency });
    onClose();
  };

  useEffect(() => inputRef.current?.focus(), [type]);

  return (
    <Modal isOpen={!!type} onClose={onClose} title="Select currency">
      <div className="flex flex-col gap-3">
        <p className="font-medium text-sm text-neutral-500">
          Choose a currency from the list below or use the search bar to find a
          specific currency.
        </p>
        <label className="flex items-center gap-2.5 py-2 px-3 border border-neutral-300 focus-within:border-blue-400 rounded-2xl focus-within:outline-3 outline-blue-100">
          <img src={searchIcon} alt="Search icon" />
          <input
            ref={inputRef}
            onChange={handleChange}
            value={search}
            placeholder="Search currency"
            className="font-medium text-sm outline-none flex-1"
          />
        </label>
        <CurrencyList
          currencies={filteredCurrencies}
          current={currency}
          onClick={handleSelectCurrency}
        />
      </div>
    </Modal>
  );
};
