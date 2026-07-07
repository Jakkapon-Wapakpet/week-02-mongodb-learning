use("chrome-burger-db-jsd13");

// Clear existing data to avoid duplicate key errors
db.menu_items.deleteMany({});

// Insert mock data for Menu Items collection
db.menu_items.insertMany([
  {
    "_id": ObjectId("65f300000000000000000001"),
    "name": "Classic Burger",
    "description": "Classic beef burger with lettuce and tomato",
    "price": 9.99,
    "category": "Burgers",
    "recipe": [
      {
        "ingredient_id": ObjectId("65f200000000000000000001"),
        "quantity_needed": 1
      },
      {
        "ingredient_id": ObjectId("65f200000000000000000003"),
        "quantity_needed": 1
      }
    ]
  },
  {
    "_id": ObjectId("65f300000000000000000002"),
    "name": "Cheeseburger",
    "description": "Classic burger with cheddar cheese",
    "price": 10.99,
    "category": "Burgers",
    "recipe": [
      {
        "ingredient_id": ObjectId("65f200000000000000000001"),
        "quantity_needed": 1
      },
      {
        "ingredient_id": ObjectId("65f200000000000000000002"),
        "quantity_needed": 1
      }
    ]
  }
]);