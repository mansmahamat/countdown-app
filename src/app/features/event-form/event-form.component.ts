import { Output, Component, EventEmitter, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-event-form',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.css'],
  })
  export class EventFormComponent implements OnChanges {
    @Input() eventName: string = ''
    @Input() eventDate: Date | undefined
    @Output() formSubmitted = new EventEmitter<{ name: string; date: Date }>()
    
    name = ''
    date: string = ''

    ngOnChanges(changes: SimpleChanges) {
      if (changes['eventName'] && this.eventName) {
        this.name = this.eventName
        setTimeout(() => this.fitInputText('title'), 0)
      }
      if (changes['eventDate'] && this.eventDate) {
        this.date = this.formatDateForInput(this.eventDate)
      }
    }

    private formatDateForInput(date: Date): string {
      const d = new Date(date)
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      const hours = String(d.getHours()).padStart(2, '0')
      const minutes = String(d.getMinutes()).padStart(2, '0')
      return `${year}-${month}-${day}T${hours}:${minutes}`
    }

    private fitInputText(inputId: string) {
      const input = document.getElementById(inputId) as HTMLInputElement
      if (!input || !input.value.trim()) return

      let fontSize = 24
      input.style.fontSize = `${fontSize}px`

      while (input.scrollWidth > input.clientWidth && fontSize > 10) {
        fontSize -= 1
        input.style.fontSize = `${fontSize}px`
      }
    }
  
    onInputChange() {
      this.fitInputText('title')
      
      if (this.name.trim() && this.date) {
        const submittedDate = new Date(this.date)
        if (!isNaN(submittedDate.getTime())) {
          this.formSubmitted.emit({
            name: this.name.trim(),
            date: submittedDate,
          })
        }
      }
    }
  }
  