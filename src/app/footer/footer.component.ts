import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../model/country.model';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
})

export class FooterComponent {
    @Input() country: Country;
    @Output() clickedButton: EventEmitter<number> = new EventEmitter();

    select(){
        console.log('estamos en el footer' + this.country.id.toString());
        this.clickedButton.emit(this.country.id);
    };
}
