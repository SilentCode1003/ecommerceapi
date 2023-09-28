exports.Products = (data) => {
    let dataResult = [];
  
    data.forEach((key, item) => {
      dataResult.push({
        productid: key.p_productid,
        image: key.p_image,
        name: key.p_name,
        description: key.p_description,
        categoryid: key.p_categoryid,
        price: key.p_price,
        quantity: key.p_quantity,
        createdat: key.p_createdat,
        updatedat: key.p_updatedat,
      });
    });
  
  return dataResult;
};

exports.Categories = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      categoryid: key.c_categoryid,
      name: key.c_name,
    });
  });

return dataResult;
};

exports.Orders = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      orderid: key.o_orderid,
      customerid: key.o_customerid,
      status: key.o_status,
      orderdate: key.o_orderdate,
      totalamount: key.o_totalamount,
    });
  });

return dataResult;
};

exports.OrderItems = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      orderitemid: key.oi_orderitemid,
      orderid: key.oi_orderid,
      productid: key.oi_productid,
      quantity: key.oi_quantity,
      unitprice: key.oi_unitprice,
    });
  });

return dataResult;
};

exports.Customers = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      customerid: key.c_customerid,
      firstname: key.c_firstname,
      lastname: key.c_lastname,
      email: key.c_email,
      phone: key.c_phone,
      address: key.c_address,
    });
  });

return dataResult;
};

exports.Inventory_Items = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      inventoryitemid: key.ii_inventoryitemid,
      productid: key.ii_productid,
      serialnumber: key.ii_serialnumber,
      status: key.ii_status,
      purchasedate: key.ii_purchasedate,
      purchaseprice: key.ii_purchaseprice,
      location: key.ii_location,
      notes: key.ii_notes,
    });
  });

return dataResult;
};

exports.InventoryTransactions = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      it_transactionid: key.it_transactionid,
      transactiontype: key.it_transactiontype,
      productid: key.it_productid,
      inventoryitemid: key.it_inventoryitemid,
      quantity: key.it_quantity,
      transactiondate: key.it_transactiondate,
      notes: key.it_notes,
    });
  });

return dataResult;
};

exports.Sales_Reports = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      reportid: key.sr_reportid,
      reportdate: key.sr_reportdate,
      salestotal: key.sr_salestotal,
      revenuetotal: key.sr_revenuetotal,
    });
  });

return dataResult;
};

exports.Coupons = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      couponid: key.c_couponid,
      code: key.c_code,
      discountpercentage: key.c_discountpercentage,
      expirationdate: key.c_expirationdate,
      usagelimit: key.c_usagelimit,
    });
  });

return dataResult;
};

exports.ShippingMethods = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      shippingmethodid: key.sm_shippingmethodid,
      name: key.sm_name,
      cost: key.sm_cost,
    });
  });

return dataResult;
};

exports.TaxRates = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      taxrateid: key.tr_taxrateid,
      name: key.tr_name,
      rate: key.tr_rate,
      location: key.tr_location,
    });
  });

return dataResult;
};

exports.Pages = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      pageid: key.p_pageid,
      title: key.p_title,
      content: key.p_content,
      numclick: key.p_numclick,
      datepost: key.p_datepost,
    });
  });

return dataResult;
};

exports.BlogPosts = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      blogpostid: key.bp_blogpostid,
      title: key.bp_title,
      content: key.bp_content,
      publishdate: key.bp_publishdate,
    });
  });

return dataResult;
};

exports.Users = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      userid: key.u_userid,
      username: key.u_username,
      password: key.u_password,
      email: key.u_email,
    });
  });

return dataResult;
};

exports.Roles = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      roleid: key.r_roleid,
      name: key.r_name,
    });
  });

return dataResult;
};

exports.UserRoles = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
      userroleid: key.ur_userroleid,
      userid: key.ur_userid,
      roleid: key.ur_roleid,
    });
  });

return dataResult;
};