import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-task-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent implements OnInit {
  @Output()
  onClose = new EventEmitter();

  @Input()
  newTitle: string = '';

  constructor() {}

  ngOnInit(): void {}

  saveTitle() {
    this.onClose.emit(this.newTitle);
  }

  cancel() {
    this.onClose.emit(null);
  }
}
