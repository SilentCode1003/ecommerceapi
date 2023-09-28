class MasterItemModel {
    constructor(itemcode, brand, description, status, createdby, createddate) {
        this.itemcode = itemcode;
        this.brand = brand;
        this.description = description;
        this.status = status;
        this.createdby = createdby;
        this.createddate = createddate;
    }
}

module.exports = {
    MasterItemModel
}