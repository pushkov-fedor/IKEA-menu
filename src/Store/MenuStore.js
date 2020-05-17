import { action, observable, when, toJS } from "mobx";

const currentCategory = observable.box("Всё");
const setCurrentCategory = action((route) => currentCategory.set(route));

const menuNavs = observable([]);
const setMenuNavs = action((navs) => {
  while (menuNavs.length !== 0) {
    menuNavs.pop();
  }
  navs.forEach((nav) => {
    menuNavs.push(nav);
  });
});
when(
  () => menuNavs.length === 0,
  () => {
    fetch("http://192.168.0.101:8080/category/getAll")
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(({ response }) => {
        const navs = response.map(({ name }) => name);
        navs.unshift("Всё");
        setMenuNavs(navs);
      })
      .catch((error) => console.log(error));
  }
);

const menuPositions = observable([]);
const setMenuPositions = action((positions) => {
  while (menuPositions.length !== 0) {
    menuPositions.pop();
  }
  positions.forEach((position) => {
    menuPositions.push(position);
  });
});
when(
  () => menuPositions.length === 0,
  () => {
    fetch("http://192.168.0.101:8080/product/getAll")
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(({ response }) => {
        const positions = response.map((pos) => ({
          id: pos.id,
          price: pos.cost,
          path: pos.category,
          photo: pos.urlPhoto,
          title: pos.name,
          description: pos.description,
          includes: pos.allergens,
          calories: pos.bgu.calories,
          consistOf: pos.consist,
          proteins: pos.bgu.proteins,
          fats: pos.bgu.fats,
          carbohydrates: pos.bgu.carbohydrates,
        }));
        setMenuPositions(positions);
      })
      .catch((error) => console.log(error));
  }
);
const getPositionsByCategory = (category) => {
  const positionsJS = toJS(menuPositions);
  if (category === "Всё") {
    return positionsJS;
  } else {
    return positionsJS.filter((pos) => pos.path === category);
  }
};
const getPositionsByQuery = (query) => {
  const copy = toJS(menuPositions);
  return copy.filter(
    (pos) =>
      pos.title.toLowerCase().includes(query.toLowerCase()) &&
      query !== "" &&
      query.length > 1
  );
};
const getPositionById = (id) => {
  const positionsJS = toJS(menuPositions);
  const position = positionsJS.find((pos) => pos.id == id);
  return position;
};

const specialOffer = observable.box("");
const setSpecialOffer = action((offer) => specialOffer.set(offer));
when(
  () => specialOffer.get().length === 0,
  () => {
    setTimeout(
      () =>
        setSpecialOffer(
          "https://firebasestorage.googleapis.com/v0/b/ikea-menu.appspot.com/o/SpecialOffer.png?alt=media&token=28916a50-3822-4ccd-8f10-ac8082a20fcf"
        ),
      1000
    );
  }
);

export const menuStore = {
  currentCategory,
  setCurrentCategory,
  menuNavs,
  menuPositions,
  getPositionsByCategory,
  getPositionsByQuery,
  getPositionById,
  specialOffer,
};
