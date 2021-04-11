import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-list-modal',
  templateUrl: './update-list-modal.component.html',
  styleUrls: ['./update-list-modal.component.scss'],
})
export class UpdateListModalComponent implements OnInit {
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
