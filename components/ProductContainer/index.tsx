import React, { ReactNode } from 'react';

interface ProductContainerProps {
  children: ReactNode;
}

const ProductContainer = ({ children }: ProductContainerProps) => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4">{children}</div>
    </div>
  );
};

export default ProductContainer;
