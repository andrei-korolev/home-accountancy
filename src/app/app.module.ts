import {ApplicationRef, NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule, HammerGestureConfig} from "@angular/platform-browser";
import {createInputTransfer, createNewHosts, removeNgStyles} from "@angularclass/hmr";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./modules/auth/auth.module";
import {AuthService} from "./common/services/auth.service";
import {UsersService} from "./common/services/users.service";

export class MyHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        'swipe': {velocity: 0.4, threshold: 20} // override default settings
    };
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,

        AuthModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        AuthService,
        UsersService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }
    hmrOnInit(store) {
        if (!store || !store.state) return;
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }
    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        store.disposeOldHosts = createNewHosts(cmpLocation);
        store.state = {data: 'yolo'};
        store.restoreInputValues  = createInputTransfer();
        removeNgStyles();
    }
    hmrAfterDestroy(store) {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
