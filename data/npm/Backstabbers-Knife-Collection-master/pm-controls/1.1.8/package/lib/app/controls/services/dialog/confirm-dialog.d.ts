import { ChangeDetectorRef } from '@angular/core';
import { ModalDialog } from '../../../controls/components/modal/modal-dialog';
export declare class ConfirmDialog extends ModalDialog {
    changeDetectorRef: ChangeDetectorRef;
    constructor(changeDetectorRef: ChangeDetectorRef);
    Header: string;
    Content: string;
    static Show(header: string, content: string): ConfirmDialog;
    RaiseChange(): void;
}