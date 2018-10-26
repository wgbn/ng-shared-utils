import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[noLink]'
})
export class NoLinkDirective {

    constructor(el: ElementRef, renderer: Renderer2) {
        setTimeout(() => {
            el.nativeElement.addEventListener('click', e => e.preventDefault());
        }, 50);
    }

}
