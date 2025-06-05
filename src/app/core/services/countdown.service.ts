import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class CountdownService {
  getTimeDiff(targetDate: Date): string {
    const now = new Date().getTime()
    const end = targetDate.getTime()
    const diff = end - now

    if (diff <= 0) return 'Event has passed!'

    const s = Math.floor((diff / 1000) % 60)
    const m = Math.floor((diff / 1000 / 60) % 60)
    const h = Math.floor((diff / 1000 / 60 / 60) % 24)
    const d = Math.floor(diff / (1000 * 60 * 60 * 24))

    return `${d} days, ${h} h, ${m} m, ${s} s`
  }
}
