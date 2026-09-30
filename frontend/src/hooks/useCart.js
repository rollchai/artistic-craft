import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCartDrawer,
} from '../features/cart';

export const useCart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart || { items: [], isOpen: false });

  const totalAmount = items.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    isOpen,
    totalAmount,
    totalCount,
    addItem: (item) => dispatch(addToCart(item)),
    removeItem: (id) => dispatch(removeFromCart(id)),
    updateQty: (id, quantity) => dispatch(updateQuantity({ id, quantity })),
    clear: () => dispatch(clearCart()),
    toggleDrawer: () => dispatch(toggleCartDrawer()),
  };
};
