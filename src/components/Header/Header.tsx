import { Status } from '../Status';

export const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="mb-2.5 font-semibold text-[32px]">Currency converter</h1>
      <p className="mb-7.5 text-sm font-medium text-neutral-500">
        Get real-time exchange rates
      </p>
      <Status />
    </header>
  );
};
