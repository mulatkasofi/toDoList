export interface State {
  tasks: ITasks[];
  query: string;
}

export interface ITasks {
  id: string;
  title: string;
  text: string;
  isDone: boolean;
}
