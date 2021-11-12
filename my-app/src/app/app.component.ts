import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  public createCookie5Sec() {
    document.cookie = "test";
  }

  public showCookie() {
    alert(document.cookie);
  }
}
