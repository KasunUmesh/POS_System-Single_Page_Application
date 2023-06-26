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
    let selected = $("#customerID").val();
    let selectedCustomer = JSON.parse(selected);

    $("#cusName").val(selectedCustomer._customer_name);
    $("#cusSalary").val(selectedCustomer._customer_salary);
    $("#cusAddress").val(selectedCustomer._customer_address);
  }
}

new OrderController();
