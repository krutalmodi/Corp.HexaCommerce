export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    categoryId: number;
    productRating: number;
    showAddToCartButton: boolean;  
    isEnabled: boolean;
}
