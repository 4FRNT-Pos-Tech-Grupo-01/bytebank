export const InvestmentCardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section
      className="flex flex-col relative
        rounded-lg 
        min-h-[633px] md:min-h-[629px] lg:min-h-100
        p-4 md:p-8 lg:p-8 pb-8 md:pb-[95px] lg:pb-[95px]"
    >
      {children}
    </section>
  );
};

export default InvestmentCardLayout;
