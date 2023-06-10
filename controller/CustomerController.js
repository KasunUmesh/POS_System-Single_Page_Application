import { Customer } from "../model/Customer.js";
import { saveCustomerDB, getCustomerDB } from "../db/DB.js";

export class CustomerController {
  constructor() {
    $("#btn_add").click(this.handleSaveCustomerValidation.bind(this));
    this.handleSaveCustomer.bind(this);
    this.handelLoadCustomer();
    this.handelClearInput();
  }

  handleSaveCustomerValidation() {
    var customer_id = $("#customer_id").val();
    var customer_name = $("#customer_name").val();
    var customer_address = $("#customer_address").val();
    var customer_salary = $("#customer_salary").val();

    const regexNumber = /^\d+$/;

    !regexNumber.test(customer_id)
      ? alert("Invalid id")
      : !customer_name
      ? alert("Invalid Name")
      : !customer_address
      ? alert("Invalid Address")
      : !customer_salary
      ? alert("Invalid Salary")
      : this.handleSaveCustomer();
  }

  handleSaveCustomer() {
    var customer_id = $("#customer_id").val();
    var customer_name = $("#customer_name").val();
    var customer_address = $("#customer_address").val();
    var customer_salary = $("#customer_salary").val();

    let new_customer = new Customer(
      customer_id,
      customer_name,
      customer_address,
      customer_salary
    );

    saveCustomerDB(new_customer);

    this.handelLoadCustomer();
    this.handelClearInput();
  }

  handelLoadCustomer() {
    let customer_data_arr = getCustomerDB();

    $("#tbl_Customer").empty();

    customer_data_arr.map((result, index) => {
      var row =
        "<tr class='row-data'>" +
        "<td>" +
        result._customer_id +
        "</td>" +
        "<td>" +
        result._customer_name +
        "</td>" +
        "<td>" +
        result._customer_address +
        "</td>" +
        "<td>" +
        result._customer_salary +
        "</td>" +
        "</tr>";
      $("#tbl_Customer").append(row);
    });
  }

  handelClearInput() {
    $("#customer_id").val("");
    $("#customer_name").val("");
    $("#customer_address").val("");
    $("#customer_salary").val("");
  }
}

new CustomerController();
