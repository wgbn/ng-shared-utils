import {Directive, Input} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../services/storage.service";

@Directive({
    selector: '[checkAccess]'
})
export class CheckAccessDirective {

    @Input('checkAccess') roles: string;

    constructor(router: Router) {
        let user: any = StorageService.getSession('user');

        setTimeout(() => {
            if (this.roles.indexOf(user.role.sigla) == -1) {
                router.navigate(['/']);
            }
        }, 10);
    }

}
