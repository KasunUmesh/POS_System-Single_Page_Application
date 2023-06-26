import { getCustomerDB } from "../db/CustomerDB.js";
import { getItemDB } from "../db/ItemDB.js";

export class OrderController {
  constructor() {
    $("#customerID").click(this.loadCustomerDetails.bind(this));
    $("#itemCode").click(this.loadItemDetails.bind(this));

    this.loadCustomers();
    this.loadItems();
  }

  loadCustomers() {
    let customers = getCustomerDB();
    let customerID = $("#customerID");
    customerID.empty();
    customerID.append($("<option selected>").text("Select Customer ID"));
    customers.forEach((customers) => {
      customerID.append(
        $("<option>")
          .val(JSON.stringify(customers))
          .text(customers._customer_id)
      );
    });
  }

  loadCustomerDetails() {
    let selected = $("#customerID").val();
    let selectedCustomer = JSON.parse(selected);

    $("#cusName").val(selectedCustomer._customer_name);
    $("#cusSalary").val(selectedCustomer._customer_salary);
    $("#cusAddress").val(selectedCustomer._customer_address);
  }

  loadItems() {
    let items = getItemDB();
    let itemCode = $("#itemCode");
    itemCode.empty();
    itemCode.append($("<option selected>").text("Select Item Code"));
    items.forEach((items) => {
      itemCode.append(
        $("<option>").val(JSON.stringify(items)).text(items._item_code)
      );
    });
  }

  loadItemDetails() {}
}

new OrderController();
