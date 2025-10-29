import { CurrencyDetails } from '@/types';
import { CurrencyItem } from '../CurrencyItem';
import checkIcon from '@assets/check.svg';
import cn from 'classnames';
import { useEffect, useEffectEvent, useRef, useState } from 'react';

interface CurrencyListProps {
  current: string;
  currencies: CurrencyDetails[];
  onClick: (key: string) => void;
}

export const CurrencyList = ({
  currencies,
  current,
  onClick,
}: CurrencyListProps) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (focusedIndex !== null && itemsRef.current[focusedIndex]) {
      itemsRef.current[focusedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', // Плавный скролл
      });
    }
  }, [focusedIndex]);

  const onKeyDown = useEffectEvent((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        if (focusedIndex === null) {
          setFocusedIndex(0);
          return;
        }

        if (currencies[focusedIndex + 1]) setFocusedIndex(focusedIndex + 1);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        if (focusedIndex === null) {
          setFocusedIndex(0);
          return;
        }
        if (currencies[focusedIndex - 1]) setFocusedIndex(focusedIndex - 1);
        break;
      }
      case 'Enter': {
        if (focusedIndex !== null) onClick(currencies[focusedIndex].key);
        break;
      }
      default:
        break;
    }
  });

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, currencies.length);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [currencies]);

  return (
    <ul className="h-71 overflow-auto">
      {currencies.map((item, index) => (
        <li
          key={item.key}
          ref={(el) => {
            itemsRef.current[index] = el;
          }}
          className="not-last:mb-3">
          <button
            onClick={() => onClick(item.key)}
            className={cn(
              'w-full px-2 py-3 flex items-center justify-between rounded-2xl hover:bg-neutral-100 duration-300',
              current === item.key && 'bg-neutral-100',
              focusedIndex === index &&
                'outline-3 -outline-offset-3 outline-blue-100'
            )}>
            <CurrencyItem currency={item.key} />
            {current === item.key && <img src={checkIcon} alt="Item checked" />}
          </button>
        </li>
      ))}
    </ul>
  );
};
