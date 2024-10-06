import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '@src/models';


type TodoData = {
    todo: Todo[];
};

const initialState: TodoData = {
    todo: [],
};

export const todoDataSlice = createSlice({
    initialState,
    name: 'todoData',
    reducers: {
        resetTodoData: () => initialState,
        setTodo: (state, { payload }: PayloadAction<Todo[] | []>) => {
            state.todo = payload;
        },
    },
});

export const {
    actions: { resetTodoData, setTodo },
    name: todoDataName,
    reducer: todoData,
} = todoDataSlice;
