/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8aiuqeekr60py09")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0tnl2cnm",
    "name": "Agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ikg6dwu2eo46pu6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8aiuqeekr60py09")

  // remove
  collection.schema.removeField("0tnl2cnm")

  return dao.saveCollection(collection)
})
