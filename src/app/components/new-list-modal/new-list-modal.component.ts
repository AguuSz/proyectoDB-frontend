import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-new-list-modal',
  templateUrl: './new-list-modal.component.html',
  styleUrls: ['./new-list-modal.component.scss'],
})
export class NewListModalComponent implements OnInit {
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
