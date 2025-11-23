import React, { useEffect, useState } from "react";

const useCart = (name = "order") => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let save = localStorage.getItem(name);
    if (!save) {
      localStorage.setItem(name, JSON.stringify([]));
      setCart([]);
    } else {
      setCart(JSON.parse(save));
    }
  }, [name]);

  const sync = (updated) => {
    localStorage.setItem(name, JSON.stringify(updated));
    setCart(updated);
  };

  const getCart = () => cart;

  const addItem = (item) => {
    let updated = [...cart];

    let exist = updated.find((i) => i.id === item.id);

    if (exist) {
      exist.qty = (exist.qty || 1) + 1;
    } else {
      updated.push({ ...item, qty: item.qty || 1 });
    }

    sync(updated);
  };

  const delItem = (itemId) => {
    let updated = cart.filter((i) => i.id !== itemId);
    sync(updated);
  };

  const dicreaseItem = (itemId) => {
    let updated = [...cart];
    let exist = updated.find((i) => i.id === itemId);

    if (exist && exist.qty > 1) {
      exist.qty -= 1;
    }

    sync(updated);
  };

  const clear = () => {
    localStorage.setItem(name, JSON.stringify([]));
    setCart([]);
  };

  const clearAll = () => {
    localStorage.clear(); // fixed
    setCart([]);
  };

  return { clearAll, clear, dicreaseItem, delItem, addItem, getCart, cart };
};

export default useCart;
