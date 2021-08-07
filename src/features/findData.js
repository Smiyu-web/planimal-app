export function getUsersItemInCart(lists, id) {
  return lists.filter((data) => data.userId === id);
}
export function getItemsInCart(allItemlists, itemList) {
  return allItemlists.filter(
    (data) => data._id === itemList.map((item) => item.itemId)
  );
}

export function findItem(lists, id) {
  return lists.find((data) => data.itemId === id);
}

export function getDataById(lists, id) {
  return lists.find((data) => data._id === id);
}
