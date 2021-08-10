export function getUsersItemInCart(lists, id) {
  return lists.filter((data) => data.userId === id);
}

export function findItemsInCart(lists, userItems, arr) {
  for (let i = 0; i < lists.length; i++) {
    for (let j = 0; j < userItems.length; j++) {
      if (lists[i].id === userItems[j].itemId) {
        arr.push(lists[i]);
      }
    }
  }
  return arr;
}

export function findItem(lists, id) {
  return lists.find((data) => data.itemId === id);
}

export function getDataById(lists, id) {
  return lists.find((data) => data._id === id);
}

// const lists = [
//   { id: 1, title: "1" },
//   { id: 2, title: "2" },
//   { id: 3, title: "3" },
// ];

// const userItems = [
//   { id: 11, title: "1", itemId: 1 },
//   { id: 22, title: "2", itemId: 2 },
//   { id: 33, title: "3", itemId: 3 },
// ];

// const arr = [];

// function findItemsInCart(lists, userItems, arr) {
//   for (let i = 0; i < lists.length; i++) {
//     for (let j = 0; j < userItems.length; j++) {
//       if (lists[i].id === userItems[j].itemId) {
//         arr.push(lists[i]);
//       }
//     }
//   }
//   return arr;
// }

// const cart = findItemsInCart(lists, userItems, arr);

// console.log(cart);
