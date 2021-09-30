# Read me


Product
id
title
price
descripition
category_id
image
qty

Category
name
description
image

Order
customer_id
status
created_at

/product
list all product 
GET
response
[
    <product_json>
    ,...
]
product_json
{
    "id": 1,
    "title": "milk",
    "price": 11.23,
    "description": "this is a white milk",
    "category":{
        "name": "daily product",
        "description": "is healthy",
        "image": link
    }
}

/product:id
retrieve product by id
GET
response
{
    "id": 1,
    "title": "milk",
    "price": 11.23,
    "description": "this is a white milk",
    "category":{
        "name": "daily product",
        "description": "is healthy",
        "image": link
    }
}

/category
list all category
GET
response 
[
    <category_json>
]
category_json
{
    "id": 1,
    "name": "daily product",
    "description": "is healthy",
    "image": link
}

/category:id
retrieve category by id
GET
response
{
    "id": 1,
    "name": "daily product",
    "description": "is healthy",
    "image": link
}

/order
POST
Create order
request body
{
    "user_id": 123,
    "order": [
        {
            "prouduct_id": 1,
            "qty": 2
        },
        ...
    ]
}
response
200 success
400 error

/order
List my order
GET
request body
{
    "user_id": 1
}
response body
[
    <order_details>
]
order_details
{
    "order_id": 1,
    "status" "Complete",
    "created_at": datetime
    "items": [
        <product_json>,
        ...
    ],
    "total_price": 100
}
product_json
{
    "id": 1,
    "title": "milk",
    "price": 11.23,
    "qty": 1
}

/order:id
retrieve order by id
GET
response
{
    "order_id": 1,
    "status" "Complete",
    "created_at": datetime
    "items": [
        <product_json>,
        ...
    ],
    "total_price": 100
}
product_json
{
    "id": 1,
    "title": "milk",
    "price": 11.23,
    "qty": 1
}

