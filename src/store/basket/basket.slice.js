import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        // Добавляем или увеличиваем количество товара
        addToBasket: (state, { payload: item }) => {
            const existingItem = state.find((r) => r.id === item.id);
            if (existingItem) {
                // Если товар уже есть, увеличиваем количество
                existingItem.quantity += 1;
            } else {
                // Если товара нет, добавляем его с количеством 1
                state.push({ ...item, quantity: 1 });
            }
        },
        // Уменьшаем количество или удаляем товар
        removeFromBasket: (state, { payload: itemId }) => {
            const existingItem = state.find((item) => item.id === itemId);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    // Если количество больше 1, уменьшаем его
                    existingItem.quantity -= 1;
                } else {
                    // Если количество 1, удаляем товар
                    return state.filter((item) => item.id !== itemId);
                }
            }
        },
        // Полностью удаляем товар из корзины
        deleteItem: (state, { payload: itemId }) => {
            return state.filter((item) => item.id !== itemId);
        },
        // Очищаем всю корзину
        clearBasket: () => {
            return [];
        }
    }
})

export const { actions, reducer } = basketSlice;
export const { addToBasket, removeFromBasket, deleteItem, clearBasket } = actions;
