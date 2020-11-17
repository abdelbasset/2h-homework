import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    NgModule({
        imports: [MatButtonModule, MatTooltipModule],
        exports: [MatButtonModule, MatTooltipModule]
    })
], MaterialModule);
export { MaterialModule };
//# sourceMappingURL=material.module.js.map