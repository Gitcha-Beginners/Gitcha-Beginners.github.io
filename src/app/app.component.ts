import { Component } from '@angular/core';

@Component({
  selector: 'amte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gitcha-Beginners';

  goPage(index) {
    if (index === 1) {
      location.href = 'http://www.naver.com';
    } else if (index === 2) {
      location.href = 'http://www.google.com';
    } else if (index === 3) {
      location.href = 'http://www.daum.com';
    }
  }
}
