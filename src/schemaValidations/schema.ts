// Enums
export enum Role {
	BUYER = 'BUYER',
	SELLER = 'SELLER',
	ADMIN = 'ADMIN',
}

// User Interface
export interface User {
	id: number;
	firstName?: string | null;
	lastName?: string | null;
	email?: string;
	password?: string;
	phone?: string | null;
	address?: string | null;
	isActive?: boolean;
	role?: Role;
	createdAt?: Date;
	updatedAt?: Date;
	session?: Session[];
	orders?: OrderDetail[];
	Product?: Product[];
	CartItem?: CartItem[];
}

// Session Interface
export interface Session {
	token?: string;
	userId?: number;
	user?: User;
	expiresAt?: Date;
	createdAt?: Date;
}

// CartItem Interface
export interface CartItem {
	id?: number;
	userId?: number;
	productId?: number;
	quantity?: number;
	createdAt?: Date;
	updatedAt?: Date;
	user?: User;
	product?: Product;
}

// Product Interface
export interface Product {
	id?: number;
	name?: string;
	description?: string | null;
	price?: number;
	userId?: number;
	quantity?: number;
	image?: string | null;
	createdAt?: Date;
	updatedAt?: Date;
	user?: User;
	cartItems?: CartItem[];
	orderItems?: OrderItem[];
	categories?: CategoryProduct[];
}

// OrderDetail Interface
export interface OrderDetail {
	id?: number;
	userId?: number;
	total?: number;
	createdAt?: Date;
	updatedAt?: Date;
	user?: User;
	items?: OrderItem[];
}

// OrderItem Interface
export interface OrderItem {
	id?: number;
	orderId?: number;
	productId?: number;
	quantity?: number;
	unitPrice?: number;
	createdAt?: Date;
	updatedAt?: Date;
	order?: OrderDetail;
	product?: Product;
}

// Category Interface
export interface Category {
	id?: number;
	name?: string;
	isActive?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
	products?: CategoryProduct[];
}

// CategoryProduct Interface
export interface CategoryProduct {
	id?: number;
	productId?: number;
	categoryId?: number;
	product?: Product;
	category?: Category;
}
