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
  // Для впуклых углов в css
  // clip-path: polygon(0 0, 0 100%, 100% 100%, 53% 86%, 24% 73%, 11% 41%);

  // Для фона на половину
  // .main-header-banner-background:before {
  //   width: 100%;
  //   height: 80px;
  //   background: linear-gradient(258.56deg,#325DE9 31.66%,#548CF6 80.67%);
  //   content: '';
  //   position: absolute;
  //   display: block;
  // }
  //
  // .zindex {
  //   z-index: 2;
  // }
}
