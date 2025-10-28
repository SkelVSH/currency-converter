import cn from 'classnames';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => (
  <div
    className={cn(
      'p-5 border border-neutral-300 rounded-2xl flex flex-col gap-6',
      className
    )}>
    {children}
  </div>
);
