/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "opbj36vi1lspy9b",
    "created": "2024-04-11 12:17:27.455Z",
    "updated": "2024-04-11 12:17:27.455Z",
    "name": "Nom",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pir8a5wf",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("opbj36vi1lspy9b");

  return dao.deleteCollection(collection);
})
