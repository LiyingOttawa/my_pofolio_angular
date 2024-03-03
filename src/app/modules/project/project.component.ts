import { Component } from '@angular/core';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})
export class ProjectComponent {
    x = 0;
    nextButtonClick() {
        this.x++;
    }

    previousButtonClick() {
        this.x--;
    }
}
