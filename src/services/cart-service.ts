import { OrderDTO } from "../models/Order";
import * as cartRepository from "../localstorage/cart-repository"

export function saveCart(cart: OrderDTO) {
    cartRepository.save(cart);
}

export function getCart() : OrderDTO {
    return cartRepository.get();
}