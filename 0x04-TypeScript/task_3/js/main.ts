/// <reference path="./crud.d.ts" />
/// <reference path="./interface.ts" />
import * as CRUD from "./crud.js";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
