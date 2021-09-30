import requests
import json

import pymongo

HOST_URL = "http://localhost:8000"
VIEW_ALL_PRODUCT_API = f"{HOST_URL}/api/product"
VIEW_ALL_CATEGORY_API = f"{HOST_URL}/api/category"

def view_all_product():
    headers = {
        'Content-Type': 'application/json'
    }
    response = requests.request("GET", VIEW_ALL_PRODUCT_API, headers=headers)
    return response

def retrieve_product(id):
    headers = {
        'Content-Type': 'application/json'
    }
    print(VIEW_ALL_PRODUCT_API+f"/{id}")
    response = requests.request("GET", VIEW_ALL_PRODUCT_API+f"/{id}", headers=headers)
    return response


def view_all_category():
    headers = {
        'Content-Type': 'application/json'
    }
    response = requests.request("GET", VIEW_ALL_CATEGORY_API, headers=headers)
    return response

def retrieve_category(id):
    headers = {
        'Content-Type': 'application/json'
    }
    print(VIEW_ALL_CATEGORY_API+f"/{id}")
    response = requests.request("GET", VIEW_ALL_CATEGORY_API+f"/{id}", headers=headers)
    return response


def test():
    result = view_all_product()
    print(result.json())
    result = retrieve_product(1)
    # print(result.json())


if __name__ == "__main__":
    test()
