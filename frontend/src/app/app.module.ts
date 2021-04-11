import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListModalComponent } from './components/new-list-modal/new-list-modal.component';
import { FormsModule } from '@angular/forms';
import { NewTaskModalComponent } from './components/new-task-modal/new-task-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListModalComponent,
    NewTaskModalComponent,
    UpdateModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
