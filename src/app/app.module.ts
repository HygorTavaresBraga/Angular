import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //TWO WAY BINDING (NGMODEL);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmissorComponent } from './components/emissor/emissor.component';
import { ChangeNumComponent } from './components/change-num/change-num.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipeOperatorComponent } from './components/pipe-operator/pipe-operator.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DiretivasComponent,
    EventosComponent,
    EmissorComponent,
    ChangeNumComponent,
    ListRenderComponent,
    PipeOperatorComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
