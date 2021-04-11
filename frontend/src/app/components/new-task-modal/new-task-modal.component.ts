import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-task-modal',
  templateUrl: './new-task-modal.component.html',
  styleUrls: ['./new-task-modal.component.scss'],
})
export class NewTaskModalComponent implements OnInit {
  @Output()
  onClose = new EventEmitter();

  @Input()
  title: string = '';

  constructor() {}

  ngOnInit(): void {}

  saveTitle() {
    this.onClose.emit(this.title);
  }

  cancel() {
    this.onClose.emit(null);
  }
}
