import UpdateProductRequest from "../../types/product/UpdateProductRequest";
import CreateProductDto from "../../types/product/CreateProductRequest";
import axios, { AxiosError } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import Product from "../../types/product/Product";

// UPDATE
export const updateProductAsync = createAsyncThunk(
    "updateProduct",
    async ({ id, update }: UpdateProductRequest, { rejectWithValue }) => {
        try {
            const response = await axios.put<Product>(
                `https://api.escuelajs.co/api/v1/products/${id}`,
                update
            );
            return response.data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    }
);

//DELETE
export const deleteProductAsync = createAsyncThunk(
    "deleteProduct",
    async (productId: number, { rejectWithValue }) => {
        try {
            const response = await axios.delete(
                `https://api.escuelajs.co/api/v1/products/${productId}`
            );
            if (response.data) {
                throw new Error("Cannot delete this product1");
            }
            return productId;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    }
);

// CREATE
export const createProductAsync = createAsyncThunk(
    "createProduct",
    async (input: CreateProductDto, { rejectWithValue }) => {
        try {
            const response = await axios.post<Product>(
                `https://api.escuelajs.co/api/v1/products/`,
                input
            );
            const createdProduct: Product = response.data;
            return createdProduct;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    }
);

// GET A SINGLE PRODUCT
export const fetchSingleProduct = createAsyncThunk<
    Product,
    number,
    { rejectValue: string }
>("fetchProductByCategories", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(
            `https://api.escuelajs.co/api/v1/categories/${id}`
        );
        const category = response.data;
        return category;
    } catch (e) {
        const error = e as AxiosError;
        return rejectWithValue(error.message);
    }
});

// GET ALL
export const fetchAllProductsAsync = createAsyncThunk(
    "fetchAllProductsAsync",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://api.escuelajs.co/api/v1/products`
            );
            const data: Product[] = response.data;
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    }
);
