import { Component, HostBinding } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent {
    public test: Date = new Date();
}
