import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { NamesComponent } from './components/names/names.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AgePipe } from './pipes/age.pipe';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieTableComponent } from './components/movie-table/movie-table.component';

@NgModule({
  declarations: [
    // list of all components, pipes and directives that belong to this module
    AppComponent,
    CounterComponent,
    NamesComponent,
    EmployeeListComponent,
    MovieSearchComponent,
    MovieTableComponent,
    FullnamePipe,
    AgePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, CounterComponent]
})
export class AppModule { }
