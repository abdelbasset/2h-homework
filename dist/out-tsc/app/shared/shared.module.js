import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            MaterialModule,
        ],
        exports: [
            CommonModule,
            FormsModule,
            MaterialModule,
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map