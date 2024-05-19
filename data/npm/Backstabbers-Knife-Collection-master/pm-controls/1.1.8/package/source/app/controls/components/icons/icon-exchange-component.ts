import {
    Component,
    EventEmitter,
    TemplateRef,
    Input,
    Output
} from '@angular/core';
import { Icon } from '../../../objects/icon/icon';

@Component({
    selector: 'pm-icon-exchange',
    //templateUrl: './app/controls/components/svg/icon-exchange/icon-exchange.html'
    templateUrl: './icon-exchange.html',
    styles: [`
    :host { 
      display: flex;
      align-items: center;
    }
    `],
})
export class IconExchangeComponent extends Icon {
    OriginalHeight = 14;
    OriginalWidth = 14;

    get Height(): number {
        return this.OriginalHeight * this.IconSize;
    }

    get Width(): number {
        return this.OriginalWidth * this.IconSize;
    }
}