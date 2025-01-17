import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  taskTitle = '';
  taskSummary = '';
  taskDueDate = '';

  @Input({ required: true }) userId!: string;

  @Output() close = new EventEmitter<void>();

  private taskService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.taskTitle,
        summary: this.taskSummary,
        dueDate: this.taskDueDate,
      },
      this.userId
    );

    this.close.emit();
  }
}
