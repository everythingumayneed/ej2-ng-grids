import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AggregateColumnDirective, AggregateColumnsDirective } from './aggregate-columns.directive';
import { AggregateDirective, AggregatesDirective } from './aggregates.directive';
import { GridComponent, FilterService, PageService, SelectionService, SortService, GroupService, ReorderService, RowDDService, DetailRowService, ToolbarService, AggregateService, SearchService, VirtualScrollService, EditService, ResizeService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, FreezeService, ColumnMenuService } from './grid.component';
import { GridModule } from './grid.module';

/**
 * NgModule definition for the Grid component with providers.
 */
@NgModule({
    imports: [CommonModule, GridModule],
    exports: [
        GridModule
    ],
    providers:[
        FilterService,
        PageService,
        SelectionService,
        SortService,
        GroupService,
        ReorderService,
        RowDDService,
        DetailRowService,
        ToolbarService,
        AggregateService,
        SearchService,
        VirtualScrollService,
        EditService,
        ResizeService,
        ExcelExportService,
        PdfExportService,
        CommandColumnService,
        ContextMenuService,
        FreezeService,
        ColumnMenuService
    ]
})
export class GridAllModule { }