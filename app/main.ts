import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { HTTP_PROVIDERS } from '@angular/http';
// import { appRouterProviders } from './app.routes';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
