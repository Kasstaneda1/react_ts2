export interface InputProps {
  id: string;
  name: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date";
  placeholder?: string;
  label?: string;
}
