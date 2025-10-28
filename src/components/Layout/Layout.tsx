interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="w-[1000px] p-2.5 flex flex-col gap-7.5">{children}</div>
);
