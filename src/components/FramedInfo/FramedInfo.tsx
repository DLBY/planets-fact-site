export const FramedInfo = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="flex lg:flex-col justify-between items-center border border-gray-secondary/50 py-[9px] px-6 container">
      <p className="text-xs uppercase font-bold text-gray">{title} :</p>
      {children}
    </div>
  );
};
