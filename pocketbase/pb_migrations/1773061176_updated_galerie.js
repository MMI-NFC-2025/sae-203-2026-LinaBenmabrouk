/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_254700154")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_223627941",
    "hidden": false,
    "id": "relation2658997648",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "galerie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_254700154")

  // remove field
  collection.fields.removeById("relation2658997648")

  return app.save(collection)
})
