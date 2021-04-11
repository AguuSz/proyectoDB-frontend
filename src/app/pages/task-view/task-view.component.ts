import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { List } from 'src/models/list.model';
import { Task } from 'src/models/task.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  newListTitle: string = '';
  newTaskTitle: string = '';

  showNewListModal: boolean = false;
  showNewTaskModal: boolean = false;
  showUpdateListModal: boolean = false;
  showUpdateModal: boolean = false;

  lists: List[] = [];
  tasks: Task[] = [];

  currentListItemID: string;
  currentTask: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentListItemID = params.listId;
      this.taskService.getTasks(params.listId).subscribe((tasks: any) => {
        this.tasks = tasks;
      });
    });
    this.getLists();
  }

  public onShowListModal() {
    this.showNewListModal = true;
  }

  public onShowTaskModal() {
    this.showNewTaskModal = true;
  }

  public onShowUpdateListModal() {
    this.showUpdateListModal = true;
  }

  public onShowUpdateTaskModal(task: Task) {
    this.currentTask = task;
    this.showUpdateModal = true;
  }

  public createNewList(title) {
    this.showNewListModal = false; // hide modal
    if (!title) {
      return;
    }
    this.newListTitle = title;
    this.taskService.createList(title).subscribe((response: any) => {
      this.getLists();
    });
  }

  public createNewTask(title) {
    this.showNewTaskModal = false; // hide modal
    if (!title) {
      return;
    }
    this.newTaskTitle = title;
    this.taskService
      .createTask(this.currentListItemID, title)
      .subscribe((response: any) => {
        this.getTasks();
      });
  }

  private getLists() {
    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  private getTasks() {
    this.taskService
      .getTasks(this.currentListItemID)
      .subscribe((tasks: any[]) => {
        this.tasks = tasks;
      });
  }

  public deleteTask(task: Task) {
    this.taskService
      .deleteTask(this.currentListItemID, task._id)
      .subscribe(() => {
        this.toastr.info('Se ha eliminado correctamente la tarea!');
        this.getTasks();
      });
  }

  public deleteList() {
    this.taskService.deleteList(this.currentListItemID).subscribe(() => {
      this.toastr.info('Se ha eliminado correctamente la lista!');
      this.getLists();
    });
  }

  public markAsDone(task: Task) {
    task.completed = true;
    this.taskService
      .updateTask(this.currentListItemID, task._id, task)
      .subscribe(() => {});
  }

  public updateTaskTitle(newTitle: string) {
    this.showUpdateModal = false; // hide modal
    if (!newTitle) {
      return;
    }

    this.currentTask.title = newTitle;

    this.taskService
      .updateTask(
        this.currentListItemID,
        this.currentTask._id,
        this.currentTask
      )
      .subscribe(() => {
        this.toastr.info('Se ha actualizado correctamente la tarea!');
      });
  }

  public updateListTitle(newTitle: string) {
    this.showUpdateListModal = false; // hide modal
    if (!newTitle) {
      return;
    }

    const updatedList: any = {
      title: newTitle,
    };

    this.taskService
      .updateList(this.currentListItemID, updatedList)
      .subscribe(() => {
        this.getLists();
        this.toastr.info('Se ha actualizado correctamente la lista!');
      });
  }

  public testing() {}
}
