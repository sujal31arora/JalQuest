package com.jalquest.Jalquest.services;

import com.jalquest.Jalquest.models.Task;
import com.jalquest.Jalquest.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // Get all tasks
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Get task by ID
    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
    }


    // Add new task
    public Task addTask(Task task) {
        return taskRepository.save(task);
    }

    // Update an existing task
    public Task updateTask(Long id, Task updatedTask) {
        return taskRepository.findById(id).map(task -> {
            task.setTitle(updatedTask.getTitle());
            return taskRepository.save(task);
        }).orElse(null);
    }

    // Delete a task by ID
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
