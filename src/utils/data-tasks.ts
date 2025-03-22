export type Status = 'todo' | 'in-progress' | 'done';

export type Task = {
  title: string;
  id: string;
  status: Status;
  points?: number;
};

export const statuses: Status[] = ['todo', 'in-progress', 'done'];

export const tasks: Array<Task> = [
  {
    title: 'Market Research',
    id: 'BUS-1',
    status: 'done',
    points: 5,
  },
  {
    title: 'Competitor analysis',
    id: 'BUS-2',
    status: 'done',
    points: 0,
  },
  {
    title: 'Develop Business Strategy',
    id: 'BUS-3',
    status: 'todo',
    points: 8,
  },
  {
    title: 'Identify potential partners',
    id: 'BUS-4',
    status: 'todo',
    points: 5,
  },
  {
    title: 'Negotiate partnerships',
    id: 'BUS-5',
    status: 'todo',
    points: 3,
  },
  {
    title: 'Develop marketing plane',
    id: 'BUS-6',
    status: 'todo',
    points: 5,
  },
  {
    title: 'Implement marketing plane',
    id: 'BUS-7',
    status: 'in-progress',
    points: 8,
  },
  {
    title: 'Evaluate business performance',
    id: 'BUS-8',
    status: 'in-progress',
    points: 5,
  },
];
