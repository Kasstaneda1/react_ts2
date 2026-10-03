import { createContext } from "react";

import { type BlogContextData } from "./types";

export const BlogContext = createContext<BlogContextData>({
  message: "",
});
