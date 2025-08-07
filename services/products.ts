'use server';

import { ProductInput } from '@/lib/validations/productSchema';
import { apiBaseUrl } from './baseUrl';
import { revalidatePath } from 'next/cache';

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
    revalidatePath('/products');

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
  console.log('🚀 ~ updateProduct ~ id:', id, product);
  try {
    const response = await fetch(`${apiBaseUrl}/v1/products/${id}`, {
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

// GET product
export const getProduct = async ({
  categorySlug = '',
  search = '',
  offset = 0,
  limit = 10,
}) => {
  const url = new URL(`${apiBaseUrl}/v1/products`);
  url.searchParams.set('categorySlug', categorySlug);
  url.searchParams.set('title', search);
  url.searchParams.set('offset', String(offset));
  url.searchParams.set('limit', String(limit));

  try {
    const response = await fetch(url.toString(), {
      headers: { 'Content-Type': 'application/json' },
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
export const getTotalProduct = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/v1/products`, {
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

// get single product
export const getSingleProduct = async ({
  productId,
}: {
  productId: string;
}) => {
  try {
    const response = await fetch(`${apiBaseUrl}/v1/products/${productId}`, {
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

export const deleteProduct = async (productId: number) => {
  try {
    const response = await fetch(`${apiBaseUrl}/v1/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        data: null,
        error: data?.message || 'Failed to delete product.',
      };
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    console.error('❌ Error deleting product:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};
