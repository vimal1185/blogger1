import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {BlogpostModule} from './blogpost/blogpost.module';
import {CmspageModule} from './cmspage/cmspage.module';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { httpInterceptorProviders } from './http-interceptor/index';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoadingBarRouterModule,
    BlogpostModule,
    CmspageModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    
  ],
  providers: [Title,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
