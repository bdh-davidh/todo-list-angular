export interface Todo {
  id: number;
  user_id: number;
  title: string;
  description: string;
  due_date: string;
  priority: 'high' | 'medium' | 'low';
  is_completed: boolean;
  category: string;
}
