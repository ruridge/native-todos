import { useState } from 'react';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-get-random-values'; // required crypto polyfill for naonid
import { nanoid } from 'nanoid';

import { Button } from '../components/button';
import { Text } from '../components/text';

const initialData: Task[] = [
  {
    id: nanoid(),
    title: 'Buy movie tickets for Friday',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'Make a React Native tutorial',
    completed: false,
  },
];

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskItemProps = {
  task: Task;
  isEditing: boolean;
  onPress: (arg0: string) => void;
  onBlur: (arg0: null) => void;
};
function TaskItem({ task, isEditing, onPress, onBlur }: TaskItemProps) {
  if (isEditing) {
    return <TextInput value={task.title} onBlur={() => onBlur(null)} />;
  } else {
    return (
      <Pressable
        onPress={() => onPress(task.id)}
        className="border p-4 dark:border-white"
      >
        <Text>{task.title}</Text>
      </Pressable>
    );
  }
}
type TaskListProps = {
  children: ReactNode;
};
function TaskList({ children }: TaskListProps) {
  const handleAddTask = () => {};

  return (
    <ScrollView className="p-4">
      <Text size="xl">Tasks:</Text>
      {children}
    </ScrollView>
  );
}

export function HomeScreen() {
  const [tasks, setTasks] = useState(initialData);
  const [editing, setEditing] = useState(null);
  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      className="h-full w-full flex-1 items-center justify-between"
    >
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            isEditing={task.id === editing}
            onPress={setEditing}
            onBlur={setEditing}
          />
        ))}
      </TaskList>
      <Button label="Add Task" onPress={() => setEditing(null)} />
    </SafeAreaView>
  );
}
