let customerObjArray = new Array();
let itemObjArray = new Array();

// Customer Function
export function saveCustomerDB(new_customer) {
  customerObjArray.push(new_customer);
}

export function getCustomerDB() {
  return customerObjArray;
}

// Items Function
export function saveItemDB(new_item) {
  itemObjArray.push(new_item);
  console.log(itemObjArray);
}

export function getItemDB() {
  return itemObjArray;
}
