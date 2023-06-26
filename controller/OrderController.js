import { getCustomerDB } from "../db/CustomerDB.js";

export class OrderController {
  constructor() {
    $("#customerID").click(this.loadCustomerDetails.bind(this));

    this.loadCustomers();
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
    console.log("working");
  }
}

new OrderController();
