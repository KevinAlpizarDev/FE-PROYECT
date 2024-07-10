

const URL = 'http://localhost:3001/products';

// Función para manejar errores de respuesta de la API
const handleResponse = async (response) => {
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Something went wrong');
    }
    return response.json();
};

// Función para obtener todos los productos
export const getProducts = async () => {
    try {
        const response = await fetch(URL);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Función para crear un nuevo producto
export const createProduct = async (productData) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });
        return handleResponse(response);
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

// Función para actualizar un producto existente
export const updateProduct = async (id, updatedProductData) => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProductData),
        });
        return handleResponse(response);
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

// Función para eliminar un producto
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
        });
        return handleResponse(response);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};




