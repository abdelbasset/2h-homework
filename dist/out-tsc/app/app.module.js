import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule, DragDropModule],
        providers: [BackendService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map