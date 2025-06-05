import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StorageService } from './core/services/storage.service'
import { EventFormComponent } from './features/event-form/event-form.component'
import { CountdownComponent } from './features/countdown/countdown.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EventFormComponent, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  eventName: string = ''
  eventDate!: Date

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    const stored = this.storage.load<{ name: string; date: string }>('event')
    if (stored) {
      this.eventName = stored.name
      this.eventDate = new Date(stored.date)
    }
  }

  onFormSubmit(data: { name: string; date: Date }) {
    this.eventName = data.name
    this.eventDate = data.date
    this.storage.save('event', data)
  }

  onFormReset() {
    this.eventName = ''
    this.eventDate = new Date()
    this.storage.save('event', null)
  }
}
