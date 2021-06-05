interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ...
}

interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

// 2. 특정 삼품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: ShoppingItem) {

}

type UpdateProduct = Partial<Product>

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {

}

interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2
// type UserProfileUpdaate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]; // mapped type
// }

// #3
type UserProfileUpdaate = {
    [p in keyof UserProfile]?: UserProfile[p]; // mapped type
}

// #4
type Subset<T> = { // Partial
    [p in keyof T]?: T[p]; // mapped type
}