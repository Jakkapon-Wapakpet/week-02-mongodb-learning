use("chrome-burger-db-jsd13");

// Clear existing data to avoid duplicate key errors
db.orders.deleteMany({});

// Insert mock data for Orders collection
db.orders.insertMany([
  {
    "_id": ObjectId("65f400000000000000000001"),
    "order_date": new Date("2024-03-15T12:30:00Z"),
    "total_price": 19.98,
    "staff_id": ObjectId("65f100000000000000000001"),
    "items": [
      {
        "menu_item_id": ObjectId("65f300000000000000000001"),
        "name": "Classic Burger",
        "price": 9.99,
        "quantity": 2
      }
    ]
  }
]);

// Find all orders and show staff details using aggregation pipeline
db.orders.aggregate([
  {
    $lookup: {
      from: "staff",
      localField: "staff_id",
      foreignField: "_id",
      as: "staff_info"
    }
  },
  {
    $unwind: "$staff_info"
  }
]);