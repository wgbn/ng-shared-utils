import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Directive({
    selector: '[nsuMascara]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MascaraDirective,
        multi: true
    }]
})
export class MascaraDirective implements ControlValueAccessor {

    onTouched: any;
    onChange: any;

    @Input() cdoMascara: string;

    constructor(private el: ElementRef) { }

    @HostListener('keyup', ['$event'])
    onKeyUp($event: any) {
        if (this.cdoMascara) {
            let valor = $event.target.value.replace(/\D/g, '');

            // retorna caso pressionado backspace
            if ($event.keyCode === 8) {
                this.onChange(valor);
                return;
            }

            let pad = this.cdoMascara.replace(/\D/g, '').replace(/9/g, '_');
            if (valor.length <= pad.length) {
                this.onChange(valor);
            }

            $event.target.value = this.aplicarMascara(valor);
        }
    }

    @HostListener('blur', ['$event'])
    onBlur($event: any) {
        if ($event.target.value.length === this.cdoMascara.length) {
            return;
        }
        this.onChange('');
        // $event.target.value = '';
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    aplicarMascara(valor: string): string {
        valor = valor.replace(/\D/g, '');
        let pad = this.cdoMascara.replace(/\D/g, '').replace(/9/g, '_');
        let valorMask = valor + pad.substring(0, pad.length - valor.length);
        let valorMaskPos = 0;

        valor = '';
        for (let i = 0; i < this.cdoMascara.length; i++) {
            if (isNaN(parseInt(this.cdoMascara.charAt(i)))) {
                valor += this.cdoMascara.charAt(i);
            } else {
                valor += valorMask[valorMaskPos++];
            }
        }

        if (valor.indexOf('_') > -1) {
            valor = valor.substr(0, valor.indexOf('_'));
        }

        return valor;
    }

    writeValue(value: any): void {
        if (value) {
            this.el.nativeElement.value = this.aplicarMascara(value);
        }
    }

}
