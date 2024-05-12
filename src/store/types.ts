import { State } from "./tasks/tasks.types";

export interface RootStore {
  store: any;
  tasks: State;
}
