# How to start development

1. Download and install [Node.js](https://nodejs.org/en/download/)
2. Install node modules from package.json with `npm i`
3. install Gulp and Webpack globally with `npm i webpack gulp -g`
4. Then for:
- server with page reload with any file change: `npm run serve`
- server with hot nodule replacement: `npm run hmr`
- production build (with aot): `npm run prod`
- production server (please make '_npm run prod_' before): `npm run prodServer`
- clean artifacts: `npm run clean`



 ### Localization
 ex.: ```{{'some word' | translate}}```
 
 ex.: ```<div translate>some word</div>```

 ex.: ```
        this.translateService.stream('Custom').subscribe((res: string) => {
             console.log(res);
         });
     ```
 
 For more information please follow the link:
 [ngx-translate](https://github.com/ngx-translate/core)
 



### Useful links
* [Installing Node.js and updating npm](https://docs.npmjs.com/getting-started/installing-node)
* [Getting started with Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [Webpack](https://webpack.js.org/)
