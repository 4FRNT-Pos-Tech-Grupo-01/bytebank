import React from 'react';

const TransactionsCardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section
      className="flex flex-col relative
        pb-[141px]
        rounded-lg overflow-hidden
        min-h-[633px] md:min-h-[629px] lg:min-h-100
        p-4 md:p-8 lg:p-8"
    >
      {children}
    </section>
  );
};

export default TransactionsCardLayout;
