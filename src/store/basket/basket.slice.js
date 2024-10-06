import { createSlice } from "@reduxjs/toolkit";

// Загружаем состояние из localStorage
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("basket");
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (error) {
        console.error("Ошибка при загрузке состояния из localStorage:", error);
        return [];
    }
};

const initialState = loadStateFromLocalStorage();

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
            // Сохраняем текущее состояние в localStorage
            localStorage.setItem("basket", JSON.stringify(state));
        },

        removeFromBasket: (state, { payload: itemId }) => {
            const existingItemIndex = state.findIndex((item) => item.id === itemId);
            if (existingItemIndex !== -1) {
                const existingItem = state[existingItemIndex];
                if (existingItem.quantity > 1) {
                    // Если количество больше 1, уменьшаем его
                    existingItem.quantity -= 1;
                } else {
                    // Если количество 1, удаляем товар
                    state.splice(existingItemIndex, 1);
                }
                // Сохраняем текущее состояние в localStorage
                localStorage.setItem("basket", JSON.stringify(state));
            }
        },

        clearBasket: () => {
            localStorage.removeItem("basket"); // Очищаем localStorage
            return [];
        }
    }
});

export const { actions, reducer } = basketSlice;
export const { addToBasket, removeFromBasket, clearBasket } = actions;
