// "use client";
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {
//   const [open, setOpen] = useState(false);
//   const [items, setItems] = useState([]);

//   const addToCart = (product) => {
//     setOpen(true);

//     setItems((prev) => {
//       const exist = prev.find((i) => i.id === product.id);
//       if (exist) {
//         return prev.map((i) =>
//           i.id === product.id ? { ...i, qty: i.qty + 1 } : i
//         );
//       }
//       return [...prev, { ...product, qty: 1 }];
//     });
//   };

//   const updateQty = (id, type) => {
//     setItems((prev) =>
//       prev.map((i) =>
//         i.id === id
//           ? { ...i, qty: type === "inc" ? i.qty + 1 : Math.max(1, i.qty - 1) }
//           : i
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setItems((prev) => prev.filter((i) => i.id !== id));
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         open,
//         setOpen,
//         items,
//         addToCart,
//         updateQty,
//         removeItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
