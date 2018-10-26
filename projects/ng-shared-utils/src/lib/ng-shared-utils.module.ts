import {NgModule} from '@angular/core';
import {NoLinkDirective} from './directives/no-link.directive';
import {MascaraDirective} from './directives/mascara.directive';
import {CheckRoleDirective} from './directives/check-role.directive';
import {CheckAccessDirective} from './directives/check-access.directive';
import {LoadingComponent} from './components/loading/loading.component';
import {PageLoaderComponent} from './components/page-loader/page-loader.component';

@NgModule({
    imports: [],
    declarations: [
        NoLinkDirective,
        MascaraDirective,
        CheckRoleDirective,
        CheckAccessDirective,
        LoadingComponent,
        PageLoaderComponent
    ],
    exports: [
        NoLinkDirective,
        MascaraDirective,
        CheckRoleDirective,
        CheckAccessDirective,
        LoadingComponent,
        PageLoaderComponent
    ]
})
export class NgSharedUtilsModule {}
