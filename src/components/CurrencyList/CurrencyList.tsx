import { CurrencyDetails } from '@/types';
import { CurrencyItem } from '../CurrencyItem';
import checkIcon from '@assets/check.svg';
import cn from 'classnames';

interface CurrencyListProps {
  current: string;
  currencies: CurrencyDetails[];
  onClick: (key: string) => void;
}

export const CurrencyList = ({
  currencies,
  current,
  onClick,
}: CurrencyListProps) => (
  <ul className="h-71 overflow-auto">
    {currencies.map((item) => (
      <li key={item.key} className="not-last:mb-3">
        <button
          onClick={() => onClick(item.key)}
          className={cn(
            'w-full px-2 py-3 flex items-center justify-between rounded-2xl hover:bg-neutral-100 duration-300',
            current === item.key && 'bg-neutral-100'
          )}>
          <CurrencyItem currency={item.key} />
          {current === item.key && <img src={checkIcon} alt="Item checked" />}
        </button>
      </li>
    ))}
  </ul>
);
