import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[noLink]'
})
export class NoLinkDirective {

    constructor(el: ElementRef) {
        setTimeout(() => {
            el.nativeElement.addEventListener('click', e => e.preventDefault());
        }, 50);
    }

}
