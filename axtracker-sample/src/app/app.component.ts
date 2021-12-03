import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'axtracker-sample';

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Aprojekt: integrációs tesztek írása', date: '2021-12-01' },
      { title: 'Bprojekt fejlesztés', date: '2021-12-02', backgroundColor: 'green'  },
      { title: 'Aprojekt: reszponzív megjelenés', date: '2021-12-03' },
      { title: 'Aprojekt: adatbázis táblakapcsolatainak felállítása', date: '2021-12-06' },
      { title: 'Aprojekt: felület elkészítése a tervek alapján', date: '2021-12-07' },
      { title: 'Bprojekt új felületi komponens elkészítése', date: '2021-12-08', backgroundColor: 'green' },
      { title: 'Aprojekt: api interface elkészítése', date: '2021-12-09' },
      { title: 'Aprojekt: felületi hibák javítása', date: '2021-12-10' },
    ]
  };
  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr);
  }
}
