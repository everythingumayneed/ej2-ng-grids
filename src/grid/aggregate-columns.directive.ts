import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';
import { Template } from '@syncfusion/ej2-ng-base';


let input: string[] = ['columnName', 'customAggregate', 'field', 'footerTemplate', 'format', 'groupCaptionTemplate', 'groupFooterTemplate', 'type'];

/**
 * `e-aggregate->e-column` directive represent a aggregate column of the Angular Grid. 
 * ```html
 * <ej-grid [dataSource]='data' allowPaging='true' allowSorting='true'> 
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ej-grid>
 * ```
 */
@Directive({
    selector: 'e-aggregate>e-columns>e-column',
    inputs: input,
    queries: {

    }
})
export class AggregateColumnDirective extends ComplexBase<AggregateColumnDirective> {


    /** 
     * Defines the aggregate type of a particular column. 
     * To use multiple aggregates for single column, specify the `type` as array. 
     * Types of aggregate are, 
     * * sum 
     * * average 
     * * max 
     * * min 
     * * count 
     * * truecount 
     * * falsecount 
     * * custom 
     * > Specify the `type` value as `custom` to use custom aggregation.
     * @default null
     */
    public type: any;
    /** 
     * Defines the column name to display the aggregate value. 
     * If `columnName` is not defined, then `field` name value will be assigned to the `columnName` property.
     * @default null
     */
    public columnName: any;
    /** 
     * Defines a function to calculate custom aggregate value. 
     * The `type` value should be set as `custom` to use custom aggregation. 
     * To use custom aggregate value in the template, we need to use the key as `${custom}`. 
     * * **Total aggregation** - the custom function will be called with whole data and the current `AggregateColumn` object. 
     * * **Group aggregation** - it will be called with current group details and the `AggregateColumn` object. 
     * 
     * @default null
     */
    public customAggregate: any;
    /** 
     * Defines the column name to perform aggregation.
     * @default null
     */
    public field: any;
    /** 
     * The format is applied to the calculated value before it is displayed. 
     * Gets the format from the user which can be standard or custom 
     * [`number`](http://ej2.syncfusion.com/documentation/base/intl.html#number-formatter-and-parser) 
     * and [`date`](http://ej2.syncfusion.com/documentation/base/intl.html#date-formatter-and-parser) formats.
     * @default null
     */
    public format: any;
    /** 
     * Defines the footer cell template as a string for the aggregate column. 
     * The `type` name must be used to access aggregate values inside the template. 
     * 
     * @default null
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Defines the group footer cell template as a string for the aggregate column. 
     * The `type` name must be used to access aggregate values inside the template. 
     * Additionally, the following fields can be accessed in the template. 
     * * **field**  - The current grouped field. 
     * * **key**    - The current grouped value. 
     * 
     * @default null
     */
    @ContentChild('groupFooterTemplate')
    @Template()
    public groupFooterTemplate: any;
    /** 
     * Defines the group caption cell template as a string for the aggregate column. 
     * The `type` name must be used to access aggregate values inside the template. 
     * Additionally, the following fields can be accessed in the template. 
     * * **field**  - The current grouped field name. 
     * * **key**    - The current grouped field value. 
     * 
     * @default null
     */
    @ContentChild('groupCaptionTemplate')
    @Template()
    public groupCaptionTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
    }
}

/**
 * AggregateColumn Array Directive
 * @private
 */
@Directive({
    selector: 'e-aggregate>e-columns',
    queries: {
        children: new ContentChildren(AggregateColumnDirective)
    },
})
export class AggregateColumnsDirective extends ArrayBase<AggregateColumnsDirective> {
    constructor() {
        super('columns');
    }
}