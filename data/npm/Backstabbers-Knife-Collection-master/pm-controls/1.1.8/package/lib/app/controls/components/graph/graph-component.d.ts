import { EventEmitter, ElementRef, OnChanges, SimpleChange } from '@angular/core';
import * as d3 from '../../../../bundles/d3-bundle';
import * as Immutable from 'immutable';
import { TimeSeries, TimeSeriesItem } from '../../../objects/time-series/time-series';
import { Margin } from '../../../objects/margin';
export declare class GraphComponent implements OnChanges {
    private el;
    lineData: Immutable.List<TimeSeries>;
    pointData: Immutable.List<TimeSeries>;
    height: number;
    width: number;
    includeLineDataPoints: boolean;
    includeHoverLine: boolean;
    hoverLineDisplay: (dataPoint: {
        "datePos": Date;
        "values": Immutable.Iterable<number, {
            "seriesName": string;
            "value": TimeSeriesItem;
        }>;
    }) => string;
    transitionDuration: number;
    hideBorder: boolean;
    yAxisTitle: string;
    ySecondAxisTitle: string;
    interpolationMethod: d3.CurveFactory;
    margin: Margin;
    xAxisTextRotation: string;
    yAxisSecondAxisDataFilter: any;
    AllowZoomX: boolean;
    AllowZoomY: boolean;
    xExtent: [Date, Date];
    IncludeDifference: boolean;
    disableWheelZoom: boolean;
    UseContinuousHoverLine: boolean;
    xDomain: [Date, Date];
    yDomain: [number, number];
    useTweenTransition: false;
    lineSizePx: string;
    pointSizeR: number;
    userColors: string[];
    UniqueId: string;
    TooltipItemChange: EventEmitter<any>;
    tooltipElementRef: ElementRef;
    private svg;
    private x;
    private y;
    private y2;
    private zoomedX;
    private zoomedY;
    private zoomedY2;
    private graphContainer;
    private color;
    private xAxis;
    private yAxis;
    private y2Axis;
    private line;
    private area;
    private differenceArea;
    private tooltip;
    private hoverLine;
    private isZoomButtonUpdate;
    private zoom;
    private flattenedItems;
    private flattenedPointItems;
    private flattenedItemsAxis2;
    private mutableData;
    private mutableDataAxis1;
    private mutableDataAxis2;
    private differenceData;
    private mutablePointData;
    private zoomPane;
    constructor(el: ElementRef);
    ngOnChanges(changeDetection: any): void;
    handleDataChange(dataChange: SimpleChange, pointChange: SimpleChange): void;
    drawGraph(): any;
    multiTimeFormat(date: any): string;
    setupZoomBehavior(): void;
    setupHoverLine(): void;
    private yAxisFilter(d);
    private yAxisMutableData();
    private yAxis2MutableData();
    updateHoverLine(el: any): void;
    removeHoverLine(): void;
    getValuesAtX(xCoord: number): {
        "datePos": Date;
        "values": Immutable.Iterable<number, {
            "seriesName": string;
            "value": TimeSeriesItem;
        }>;
    };
    drawBorder(): void;
    updateGraph(): void;
    zoomUpdate(includeTransitions?: boolean): void;
    setupZoomButtons(): void;
    zoomClick(isZoomIn: boolean, isZoomReset?: boolean): void;
    setupLegend(mutableData: TimeSeries[], mutablePointData: TimeSeries[]): void;
    updateAxis(includeTransitions?: boolean): void;
    updateDifferenceLines(differenceData: any): void;
    updateExistingDifferenceLines(lines: any, isAbove: boolean, includeTransitions: boolean): void;
    updateExistingLines(lines: any, includeTransitions: boolean, isYAxis2: boolean): void;
    updateLines(mutableData: TimeSeries[], isYAxis2: boolean): void;
    updateExistingDifference(clip: any, isAbove: boolean, includeTransitions: boolean): void;
    updateExistingLinePoints(circles: any, includeTransitions: boolean, isYAxis2: boolean): void;
    updateLinePoints(dataPoints: Array<[TimeSeriesItem, string]>, isYAxis2: boolean): void;
    pathTween(d1: any, precision: any, element: any): () => "" | ((t: any) => any);
}