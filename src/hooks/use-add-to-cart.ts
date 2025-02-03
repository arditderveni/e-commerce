import { useCallback } from "react";
import useCartContext from "./use-cart-context";

interface Params {
  item: CartItem;
}

const useAddToCart = ({ item }: Params) => {
  const { addItem } = useCartContext();

  const addToCart = useCallback(() => {
    addItem(item);
  }, [item, addItem]);

  return { addToCart };
};

export default useAddToCart;
