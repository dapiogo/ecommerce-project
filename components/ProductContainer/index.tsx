import React, { ReactNode } from 'react';

interface ProductContainerProps {
  children: ReactNode;
}

const ProductContainer = ({ children }: ProductContainerProps) => {
  return (
    <div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {children}
      </div>
    </div>
  );
};

export default ProductContainer;
