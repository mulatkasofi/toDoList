import { RootStore } from "../types";
import { State } from "./tasks.types";

export const getSlice = (store: RootStore): State => store.tasks;
