import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
  
export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch('https://snetmyapp.herokuapp.com/case2');
		if (resp.ok) {

			const res = await resp.json();
			const todos=res.offerList
 
			return { todos };
		}
	}
);


export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
 
	extraReducers: {
		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		}
		
	},
});
 



export const { addTodo, toggleComplete, deleteTodo,CategoryTodo } = todoSlice.actions;
 
export default todoSlice.reducer;
