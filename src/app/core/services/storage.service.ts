import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' })
export class StorageService {
  save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  load<T>(key: string): T | null {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }
}
