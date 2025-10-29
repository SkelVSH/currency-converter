import { useOnlineState } from '@/hooks/useOnlineState';
import clockIcon from '@assets/clock.svg';
import wifiOnIcon from '@assets/wifi-on.svg';
import wifiOffIcon from '@assets/wifi-off.svg';
import refreshIcon from '@assets/refresh.svg';
import { useRates } from '@providers/RatesContext';
import { formatTimestamp } from '@utils/formatTimestamp';
import cn from 'classnames';

export const Status = () => {
  const isOnline = useOnlineState();
  const { forceRefetch, isLoading, lastUpdateTS } = useRates();

  return (
    <div className="flex items-center gap-4 flex-col lg:flex-row">
      <span
        className={cn(
          'flex items-center gap-1 px-2 py-1 border rounded-lg font-semibold text-xs',
          isOnline
            ? 'bg-green-50 border-green-200 text-green-700'
            : 'bg-red-50 border-red-200 text-red-700'
        )}>
        <img src={isOnline ? wifiOnIcon : wifiOffIcon} alt="Connection icon" />
        {isOnline ? 'Online' : 'Offline'}
      </span>
      <p className="flex items-center gap-1.5 font-medium text-xs text-neutral-500">
        <img src={clockIcon} alt="Clock icon" />
        {isOnline ? 'Last updated:' : 'Using cached rates from'}{' '}
        {lastUpdateTS && formatTimestamp(lastUpdateTS)}
      </p>
      <button
        className="flex items-center gap-1 px-2 py-1 border rounded-lg font-semibold text-xs bg-blue-50 border-blue-200 text-blue-700"
        onClick={forceRefetch}
        disabled={isLoading}>
        <img src={refreshIcon} alt="Refresh button" />
        Refresh rates
      </button>
    </div>
  );
};
