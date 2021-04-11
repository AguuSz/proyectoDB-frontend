import { Injectable } from '@angular/core';
import { List } from 'src/models/list.model';
import { Task } from 'src/models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webRequestService: WebRequestService) {}

  getLists() {
    return this.webRequestService.get('lists');
  }

  getTasks(listId: string) {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  createList(title: string) {
    // Enviar una peticion para crear una lista
    return this.webRequestService.post('lists', {
      title,
    });
  }

  createTask(listId: string, title: string) {
    return this.webRequestService.post(`lists/${listId}/tasks`, {
      title,
    });
  }

  deleteList(listId: string) {
    return this.webRequestService.delete(`lists/${listId}`);
  }

  deleteTask(listId: string, taskId: string) {
    return this.webRequestService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  updateList(listId: string, payload: Object) {
    return this.webRequestService.put(`lists/${listId}`, payload);
  }

  updateTask(listId: string, taskId: string, payload: Task) {
    return this.webRequestService.put(
      `lists/${listId}/tasks/${taskId}`,
      payload
    );
  }
}
