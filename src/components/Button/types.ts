export interface ButtonProps {
  name: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
}