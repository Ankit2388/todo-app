
export interface Todo {
    id: number;
    title: string
    description: string
    is_completed: number
    created_at: string | Date
    updated_at: string | Date
    reminder_date: string | Date
    reminder_time: string | Date
}

export interface AddTodo extends Omit<Todo, 'id' | 'created_at' | 'updated_at'> { }
