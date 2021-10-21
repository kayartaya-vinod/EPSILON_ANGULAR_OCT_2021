import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgswitchDemoComponent } from './components/ngswitch-demo/ngswitch-demo.component';
import { CustomDirectiveDemoComponent } from './components/custom-directive-demo/custom-directive-demo.component';
import { BoxDirective } from './directives/box.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgswitchDemoComponent,
    CustomDirectiveDemoComponent,
    BoxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
