import { Customer } from "../model/Customer.js";
import { saveCustomerDB, getCustomerDB } from "../db/DB.js";

export class CustomerController {
  constructor() {
    $("#btn_add").click(this.handleSaveCustomerValidation.bind(this));
    this.handleSaveCustomer.bind(this);
    this.handelLoadCustomer();
    this.handelClearInput();
    this.handelLoadDateTextField();
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

  handelLoadDateTextField() {
    $("#tbl_Customer").on("click", ".row-data", function () {
      let customer_id = $(this).children("td:eq(0)").text();
      let customer_name = $(this).children("td:eq(1)").text();
      let customer_address = $(this).children("td:eq(2)").text();
      let customer_salary = $(this).children("td:eq(3)").text();

      $("#customer_id").val(customer_id);
      $("#customer_name").val(customer_name);
      $("#customer_address").val(customer_address);
      $("#customer_salary").val(customer_salary);
    });
    this.handelClearInput();
  }
}

new CustomerController();