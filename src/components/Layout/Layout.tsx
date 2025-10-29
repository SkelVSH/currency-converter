interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="w-full lg:w-[1000px] px-4 py-6 lg:p-2.5 flex flex-col gap-7.5">
    {children}
  </div>
);
