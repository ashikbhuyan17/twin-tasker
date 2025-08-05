'use server';

import { ProductInput } from '@/lib/validations/productSchema';
import { apiBaseUrl } from './baseUrl';

// CREATE product
export const createProduct = async (product: ProductInput) => {
  try {
    const response = await fetch(`${apiBaseUrl}/v1/products/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
      cache: 'no-store',
    });

    const data = await response.json();
    console.log('🚀 ~ createProduct ~ data:', data);

    if (!response.ok) {
      return {
        data: null,
        error: data?.message || 'Failed to create product.',
      };
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

// UPDATE product
export const updateProduct = async (id: number, product: ProductInput) => {
  try {
    const response = await fetch(`${apiBaseUrl}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        data: null,
        error: data?.message || 'Failed to update product.',
      };
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

// GET single product
export const getProduct = async (id: number) => {
  try {
    const response = await fetch(`${apiBaseUrl}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        data: null,
        error: data?.message || 'Failed to fetch product.',
      };
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/v1/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        data: null,
        error: data?.message || 'Failed to fetch categories.',
      };
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};
