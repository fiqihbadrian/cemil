
import type { Product } from "./types";
import { kripikProducts } from "./kripik";
import { stikProducts } from "./stik";

export const allProducts: Product[] = [...kripikProducts, ...stikProducts];