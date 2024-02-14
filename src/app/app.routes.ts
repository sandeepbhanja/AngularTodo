import { Routes } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: 'newTask', component: NewTaskComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'tasks', component: TasksComponent },
    { path: '**', component: LoginComponent}
];
