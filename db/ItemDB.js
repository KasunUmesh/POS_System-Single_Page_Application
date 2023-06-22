const data = "ITEM";

// Items Function
export function saveItemDB(new_item) {
  let pre_data = localStorage.getItem(data);
  let item_arr = JSON.parse(pre_data) || [];
  if (item_arr) {
    item_arr.push(new_item);
    localStorage.setItem(data, JSON.stringify(item_arr));

    return true;
  }
}

export function getItemDB() {
  let pre_data = localStorage.getItem(data);
  return JSON.parse(pre_data) || [];
}
