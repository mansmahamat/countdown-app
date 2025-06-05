import { Component, Input, OnDestroy, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CountdownService } from "../../core/services/countdown.service"
import confetti from 'canvas-confetti'

@Component({
    selector: 'app-countdown',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.css'],
  })
  export class CountdownComponent implements OnInit, OnDestroy {
    @Input() targetDate!: Date
    timeLeft = ''
    private timerId: any
    private confettiTriggered = false
  
    constructor(private countdownService: CountdownService) {}
  
    ngOnInit() {
      this.timerId = setInterval(() => {
        this.timeLeft = this.countdownService.getTimeDiff(this.targetDate)
        this.checkForConfetti()
      }, 1000)
    }

    private checkForConfetti() {
      if (this.confettiTriggered) return

      const now = new Date().getTime()
      const end = this.targetDate.getTime()
      const diff = end - now

      if (diff <= 2000) {
        this.confettiTriggered = true
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      }
    }
  
    ngOnDestroy() {
      clearInterval(this.timerId)
    }
  }
  