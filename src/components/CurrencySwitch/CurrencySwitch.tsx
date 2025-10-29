import { CurrencyPair } from '@/types';
import { CurrencyItem } from '../CurrencyItem';
import switchIcon from '@assets/switch.svg';

interface CurrencySwitch {
  base: string;
  target: string;
  handleSwitchPair: () => void;
  handleOpenModal: (type: keyof CurrencyPair) => void;
}

export const CurrencySwitch = ({
  base,
  target,
  handleSwitchPair,
  handleOpenModal,
}: CurrencySwitch) => (
  <div className="flex gap-3 flex-col items-stretch lg:items-end lg:flex-row">
    <div className="flex flex-col gap-2 flex-1">
      <p className="text-xs font-semibold">From</p>
      <button
        className="border border-neutral-300 bg-neutral-50 rounded-2xl px-2 py-1"
        onClick={() => handleOpenModal('base')}>
        <CurrencyItem currency={base} />
      </button>
    </div>
    <button
      className="size-10.5 flex items-center justify-center self-center md:self-auto"
      onClick={handleSwitchPair}>
      <img src={switchIcon} alt="Switch button" />
    </button>
    <div className="flex flex-col gap-2 flex-1">
      <p className="text-xs font-semibold">To</p>
      <button
        className="border border-neutral-300 bg-neutral-50 rounded-2xl px-2 py-1"
        onClick={() => handleOpenModal('target')}>
        <CurrencyItem currency={target} />
      </button>
    </div>
  </div>
);
