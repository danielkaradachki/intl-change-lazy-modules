import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CldrIntlService } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public number = 42.123;
    public date = new Date();

    constructor(@Inject(LOCALE_ID) public localeId: string, public intlService: CldrIntlService) {
    }

    public onLocaleChange(locale: string): void {
        this.localeId = locale;
        this.intlService.localeId = locale;
    }
}
