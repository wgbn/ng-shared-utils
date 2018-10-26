import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'loading',
    template: `<div [style.textAlign]="'center'" [style.padding]="'1em 0'">
        <i class="fa {{icon}} fa-spin" [style.fontSize]="tamanho"></i>
    </div>`,
    styles: []
})
export class LoadingComponent implements OnInit {

    @Input() tamanho: string = '24px';
    @Input() icon: string = 'fa-cog';

    constructor() { }

    ngOnInit() { }

}
