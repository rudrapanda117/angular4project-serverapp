import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';


import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { RenderHighlighterDirective } from './render-highlighter/render-highlighter.directive';
import { UnlessDirective } from './unless/unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    RenderHighlighterDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
