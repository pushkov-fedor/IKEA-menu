import { action, observable, when, toJS } from "mobx";

const menuNavs = observable([]);
const setMenuNavs = action(navs => {
  while(menuNavs.length !== 0){
    menuNavs.pop();
  }
  navs.forEach(nav => {
    menuNavs.push(nav);
  })
})
when(
  () => menuNavs.length === 0,
  () => {
    setTimeout(() => {
      const navs = [
        {
          title: "Всё",
          link: "/"
        },
        {
          title: "Завтрак",
          link: "/breakfast"
        }, 
        {
          title: "Обед",
          link: "/lunch"
        },
        {
          title: "Ужин",
          link: "/dinner"
        },
        {
          title: "Новинки",
          link: "/new"
        }, 
        {
          title: "Для детей",
          link: "/childs"
        }]
      setMenuNavs(navs);
    }, 1000)
  }
)

const menuPositions = observable([]);
const setMenuPositions = action(positions => {
  while(menuPositions.length !== 0){
    menuPositions.pop();
  }
  positions.forEach(position => {
    menuPositions.push(position);
  })
})
when(
  () => menuPositions.length === 0,
  () => {
    setTimeout(() => {
      const positions = [
        {
          id: 1,
          price: 109,
          path: "/breakfast",
          photo: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "Сэндвич с яйцом",
          description: "Микс салатов, лосось, рассыпчатый творог и обжаренный фундук",
          includes: "Рыбу, Молоко, Сульфиты",
          calories: 957,
          consistOf: "Лосось, Огурец, Помидоры черри, Маслины, Кунжут,Соевый соус, Сок лимонный, Масло оливковое, Перец черный (молотый), Зелень (петрушка, укроп)",
          proteins: 39,
          fats: 64,
          carbohydrates: 97
        },
        {
          id: 2,
          price: 159,
          path: "/breakfast",
          photo: "https://images.pexels.com/photos/1333746/pexels-photo-1333746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "Банановая каша",
          description: "Микс салатов, лосось, рассыпчатый творог и обжаренный фундук",
          includes: "Рыбу, Молоко, Сульфиты",
          calories: 957,
          consistOf: "Лосось, Огурец, Помидоры черри, Маслины, Кунжут,Соевый соус, Сок лимонный, Масло оливковое, Перец черный (молотый), Зелень (петрушка, укроп)",
          proteins: 39,
          fats: 64,
          carbohydrates: 97
        },
        {
          id: 3,
          price: 159,
          path: "/lunch",
          photo: "https://images.pexels.com/photos/3297807/pexels-photo-3297807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Лапша по-гонконгски",
          description: "Микс салатов, лосось, рассыпчатый творог и обжаренный фундук",
          includes: "Рыбу, Молоко, Сульфиты",
          calories: 957,
          consistOf: "Лосось, Огурец, Помидоры черри, Маслины, Кунжут,Соевый соус, Сок лимонный, Масло оливковое, Перец черный (молотый), Зелень (петрушка, укроп)",
          proteins: 39,
          fats: 64,
          carbohydrates: 97
        },
        {
          id: 4,
          price: 159,
          path: "/lunch",
          photo: "https://images.pexels.com/photos/2260208/pexels-photo-2260208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Пицца Нью-Мехико",
          description: "Микс салатов, лосось, рассыпчатый творог и обжаренный фундук",
          includes: "Рыбу, Молоко, Сульфиты",
          calories: 957,
          consistOf: "Лосось, Огурец, Помидоры черри, Маслины, Кунжут,Соевый соус, Сок лимонный, Масло оливковое, Перец черный (молотый), Зелень (петрушка, укроп)",
          proteins: 39,
          fats: 64,
          carbohydrates: 97
        } ];
      setMenuPositions(positions);
    }, 1000)
  }
)
const getPositionsByPath = (path) => {
  const positionsJS = toJS(menuPositions);
  if (path === "/") {
    return positionsJS;
  } else {
    return positionsJS.filter(pos => pos.path === path);
  }
}
const getPositionById = (id) => {
  const positionsJS = toJS(menuPositions);
  const position = positionsJS.find(pos => pos.id == id);
  return position;
}

const specialOffer = observable.box("");
const setSpecialOffer = action(offer => specialOffer.set(offer));
when(
  () => specialOffer.get().length === 0,
  () => {
    setTimeout(() => setSpecialOffer("https://firebasestorage.googleapis.com/v0/b/ikea-menu.appspot.com/o/SpecialOffer.png?alt=media&token=28916a50-3822-4ccd-8f10-ac8082a20fcf"), 1000);
  });

export const menuStore = {
  menuNavs,
  menuPositions,
  getPositionsByPath,
  getPositionById,
  specialOffer
}