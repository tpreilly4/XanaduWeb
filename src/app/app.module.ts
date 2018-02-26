import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { HistoryComponent } from './history/history.component';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    HistoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
