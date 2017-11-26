import './ng-polyfills';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import {enableProdMode} from "@angular/core";
import {bootloader} from "@angularclass/hmr";

declare const Reflect: any;

if (process.env.STATIC) {
    console.log("******************You are in Dev mode******************");
    platformBrowserDynamic().bootstrapModule(AppModule);
} else if (process.env.HMR) {
   console.log("******************You are in HMR mode******************");
    bootloader(main);
} else {
    console.log("******************You are in prod mode******************");

    enableProdMode();

    platformBrowserDynamic().bootstrapModule(AppModule);
}

export function main() {
    return platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then((modRef: any) => {
            return modRef
        })
        .catch(err => console.error(err));
}

