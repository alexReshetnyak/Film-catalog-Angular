import { Component, HostBinding } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ng-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent {
    public test: Date = new Date();
}
