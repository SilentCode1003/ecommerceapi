const mysql = require("mysql");
require("dotenv").config();
const model = require("../model/eccomercemodel");

const connection = mysql.createConnection({
  host: process.env._HOST_ADMIN,
  user: process.env._USER_ADMIN,
  password: process.env._PASSWORD_ADMIN,
  database: process.env._DATABASE_ADMIN,
  port: 3307,
});

exports.CheckConnection = () => {
  connection.connect((err) => {
    if (err) {
      console.error("Error connection to MYSQL databases: ", err);
      return;
    }
    console.log("MySQL database connection established successfully!");
  });
};

exports.Select = (sql, table, callback) => {
  try {
    connection.connect((err) => {
      return err;
    });
    connection.query(sql, (error, results, fields) => {
      // console.log(results);

      if (error) {
        callback(error, null);
      }

      if (table == "Products") {
        callback(null, model.products(results));
      }

      if (table == "Categories") {
        callback(null, model.Categories(results));
      }

      if (table == "Orders") {
        callback(null, model.Orders(results));
      }

      if (table == "OrderItems") {
        callback(null, model.OrderItems(results));
      }

      if (table == "Customers") {
        callback(null, model.Payments(results));
      }

      if (table == "InventoryItems") {
        callback(null, model.Customers(results));
      }

      if (table == "InventoryTransactions") {
        callback(null, model.Suppliers(results));
      }

      if (table == "InventoryTransactions") {
        callback(null, model.InventoryTransactions(results));
      }

      if (table == "SalesReports") {
        callback(null, model.Sales(results));
      }

      if (table == "Coupons") {
        callback(null, model.Cuopons(results));
      }

      if (table == "ShippingMethods") {
        callback(null, model.CuoponProducts(results));
      }

      if (table == "TaxRates") {
        callback(null, model.ShippingMethods(results));
      }

      if (table == "Pages") {
        callback(null, model.TaxRates(results));
      }

      if (table == "BlogPosts") {
        callback(null, model.TaxSettings(results));
      }

      if (table == "Users") {
        callback(null, model.ShippingSettings(results));
      }

      if (table == "Roles") {
        callback(null, model.Content(results));
      }

      if (table == "UserRoles") {
        callback(null, model.Authors(results));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Insert = (stmt, todos, callback) => {
  try {
    connection.connect((err) => {
      return err;
    });
    // console.log(statement: ${stmt} data: ${todos});

    connection.query(stmt, [todos], (err, results, fields) => {
      if (err) {
        callback(err, null);
      }
      // callback(null, Row inserted: ${results});
      callback(null, `Row inserted: ${results.affectedRows}`);
      // console.log(Row inserted: ${results.affectedRows});
    });
  } catch (error) {
    callback(error, null);
  }
};

exports.InsertTable = (tablename, data, callback) => {
  if (tablename == "Products") {
    let sql = `INSERT INTO Products(
      p_name,
      p_description,
      p_categoryid,
      p_price,
      p_quantity,
      p_createdat,
      p_updatedat,
      p_image) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Categories") {
    let sql = `INSERT INTO Categories(
      c_name) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Orders") {
    let sql = `INSERT INTO Orders(
      o_customerid,
      o_status,
      o_orderdate,
      o_totalamount) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Order_Items") {
    let sql = `INSERT  INTO OrderItems(
      oi_orderid
      oi_productid
      oi_quantity
      oi_unitprice) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Customers") {
    let sql = `INSERT INTO Customers(
      c_firstname,
      c_lastname,
      c_email,
      c_phone,
      c_address) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Inventory_Items") {
    let sql = `INSERT INTO Inventory_Items(
      ii_productid,
      ii_serialnumber,
      ii_status,
      ii_purchasedate,
      ii_purchaseprice,
      ii_location,
      ii_notes) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Inventory_Transactions") {
    let sql = `INSERT INTO InventoryTransactions(
      it_transactiontype,
      it_productid,
      it_inventoryitemid,
      it_quantity,
      it_transactiondate,
      it_notes) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Sales_Reports") {
    let sql = `INSERT INTO Sales_Reports(
      sr_reportdate,
      sr_salestotal,
      sr_revenuetotal) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Coupons") {
    let sql = `INSERT INTO Coupons(
      c_code,
      c_discountpercentage,
      c_expirationdate,
      c_usagelimit) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Shipping_Methods") {
    let sql = `INSERT INTO Shipping_Methods(
      sm_name,
      sm_cost) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Tax_Rates") {
    let sql = `INSERT INTO Tax_Rates(
      tr_name,
      tr_rate,
      tr_location) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Pages") {
    let sql = `INSERT INTO Pages(
      p_title,
      p_content,
      p_numclick,
      p_datepost) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Blog_Posts") {
    let sql = `INSERT INTO Blog_Posts(
      bp_title,
      bp_content,
      bp_publishdate) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Users") {
    let sql = `INSERT INTO Users(
      u_username,
      u_password,
      u_email) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "Roles") {
    let sql = `INSERT INTO Roles(
      r_name) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "User_Roles") {
    let sql = `INSERT INTO UserRoles(
      ur_userid,
      ur_roleid) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }
};

exports.Update = async (sql, callback) => {
  try {
    connection.query(sql, (error, results, fields) => {
      if (error) {
        callback(error, null);
      }
      // console.log('Rows affected:', results.affectedRows);

      callback(null, `Rows affected: ${results.affectedRows}`);
    });
  } catch (error) {
    callback(error, null);
  }
};

exports.UpdateMultiple = async (sql, data, callback) => {
  try {
    connection.query(sql, data, (error, results, fields) => {
      if (error) {
        callback(error, null);
      }
      // console.log('Rows affected:', results.affectedRows);

      callback(null, `Rows affected: ${results.affectedRows}`);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.SelectResult = (sql, callback) => {
  try {
    connection.connect((err) => {
      return err;
    });
    connection.query(sql, (error, results, fields) => {
      // console.log(results);

      if (error) {
        callback(error, null);
      }

      callback(null, results);
    });
  } catch (error) {
    console.log(error);
  }
};
