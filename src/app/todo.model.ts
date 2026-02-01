export interface Todo {
  id: string;
  user_id: string;
  title: string;
  description: string;
  due_date: string;
  priority: 'high' | 'medium' | 'low';
  is_completed: boolean;
  category: 'work' | 'personal';
}
