import { action, observable, when, toJS, computed } from "mobx";

const saved = observable([]);
const setSaved = action((fromCart) => {
  while (saved.length > 0) saved.pop();
  fromCart.forEach((from) => saved.push(from));
});
const totalPrice = computed(() => {
  return toJS(saved).reduce(
    (acc, { quantity, position: { price } }) => acc + quantity * price,
    0
  );
});

const addToCart = action((position) => {
  const savedCopy = toJS(saved);
  const savedPosition = savedCopy.find(
    (pos) => pos.position.id === position.id
  );
  if (savedPosition === undefined) {
    savedCopy.push({ position, quantity: 1 });
  } else {
    savedPosition.quantity++;
  }
  setSaved(savedCopy);
  localStorage.setItem("positions", JSON.stringify(saved));
});
const removeFromCart = action((position) => {
  let savedCopy = toJS(saved);
  let savedPosition = savedCopy.find((pos) => pos.position.id === position.id);
  if (savedPosition === undefined) {
    return;
  } else if (savedPosition.quantity === 1) {
    savedCopy = savedCopy.filter((pos) => pos.position.id !== position.id);
  } else {
    savedPosition.quantity--;
  }
  setSaved(savedCopy);
  localStorage.setItem("positions", JSON.stringify(saved));
});

when(
  () => saved.length === 0,
  () => {
    const fromStorage = JSON.parse(localStorage.getItem("positions")) || [];
    setSaved(fromStorage);
  }
);

export const cartStore = {
  saved,
  totalPrice,
  addToCart,
  removeFromCart,
};
