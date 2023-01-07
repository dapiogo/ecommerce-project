import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly name: string;
  readonly count: number;
}

interface CartState {
  readonly items: readonly CartItem[];
  // eslint-disable-next-line no-unused-vars
  readonly addItemToCart: (item: CartItem) => void;
  // eslint-disable-next-line no-unused-vars
  readonly removeItemToCart: (id: CartItem['id']) => void;
}

const SHOPPING_CART = 'SHOPPING_CART';

const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem(SHOPPING_CART);

  if (!itemsFromLocalStorage) {
    return [];
  }

  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const setCartItemInStorage = (cartItems: CartItem[]) =>
  localStorage.setItem(SHOPPING_CART, JSON.stringify(cartItems));

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
  }, []);

  useEffect(() => {
    setCartItemInStorage(cartItems);
  }, [cartItems]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) =>
          setCartItems((prevState) => {
            const existingItem = prevState.find((el) => el.id === item.id);
            if (!existingItem) {
              return [...prevState, item];
            }

            return prevState.map((el) => {
              return el.id === item.id
                ? {
                    ...el,
                    count: el.count + 1
                  }
                : el;
            });
          }),
        removeItemToCart: (id) =>
          setCartItems((prevState) => {
            const findItem = prevState.find((el) => el.id === id);

            if (findItem && findItem.count <= 1) {
              return prevState.filter((el) => el.id !== id);
            }

            return prevState.map((el) => {
              if (el.id === id) {
                return {
                  ...el,
                  count: el.count - 1
                };
              }

              return el;
            });
          })
      }}>
      {children}
    </CartStateContext.Provider>
  );
};

export const userCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) {
    throw new Error('You forgot CartStateContextProvider');
  }

  return cartState;
};
