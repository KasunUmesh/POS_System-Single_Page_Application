import { Item } from "../model/Item.js";
import { saveItemDB, getItemDB } from "../db/DB.js";

export class ItemController {
  constructor() {
    $("#btn_itemAdd").click(this.handleSaveItemValidation.bind(this));
    this.handleSaveItem.bind(this);
    this.handleLoadItem();
    this.handleClearInput();
  }

  handleSaveItemValidation() {
    var item_code = $("#item_code").val();
    var item_name = $("#item_name").val();
    var item_price = $("#item_price").val();
    var item_qty = $("#item_qty").val();

    const regexNumber = /^\d+$/;

    !regexNumber.test(item_code)
      ? alert("Invalid id")
      : !item_name
      ? alert("Invalid Name")
      : !item_price
      ? alert("Invalid Address")
      : !item_qty
      ? alert("Invalid Salary")
      : this.handleSaveItem();
  }

  handleSaveItem() {
    var item_code = $("#item_code").val();
    var item_name = $("#item_name").val();
    var item_price = $("#item_price").val();
    var item_qty = $("#item_qty").val();

    let new_item = new Item(item_code, item_name, item_price, item_qty);

    saveItemDB(new_item);

    this.handleLoadItem();
    this.handleClearInput();
  }

  handleLoadItem() {
    let item_data_arr = getItemDB();

    $("#tbl_item").empty();

    item_data_arr.map((result, index) => {
      var row =
        "<tr class='row-data'>" +
        "<td>" +
        result._item_code +
        "</td>" +
        "<td>" +
        result._item_name +
        "</td>" +
        "<td>" +
        result._item_price +
        "</td>" +
        "<td>" +
        result._item_qty +
        "</td>" +
        "</tr>";
      $("#tbl_item").append(row);
    });
  }

  handleClearInput() {
    $("#item_code").val("");
    $("#item_name").val("");
    $("#item_price").val("");
    $("#item_qty").val("");
  }
}

new ItemController();
