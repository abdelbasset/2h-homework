import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BackendService } from "./backend.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    DragDropModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
