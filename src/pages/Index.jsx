import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, IconButton, Box } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditTask = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const saveEditTask = () => {
    const updatedTasks = tasks.map((task, index) => (index === editIndex ? editTask : task));
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="green">
            Add Task
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {tasks.map((task, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              {editIndex === index ? (
                <Input
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
              ) : (
                <Text>{task}</Text>
              )}
              <HStack>
                {editIndex === index ? (
                  <Button onClick={saveEditTask} colorScheme="teal">
                    Save
                  </Button>
                ) : (
                  <IconButton
                    icon={<FaEdit />}
                    onClick={() => startEditTask(index)}
                    aria-label="Edit Task"
                  />
                )}
                <IconButton
                  icon={<FaTrash />}
                  onClick={() => deleteTask(index)}
                  aria-label="Delete Task"
                />
              </HStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;