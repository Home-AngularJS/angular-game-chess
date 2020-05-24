import { Component, NgZone } from '@angular/core';

declare const annyang: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  voiceActiveSectionDisabled = true
  voiceActiveSectionError = false
  voiceActiveSectionSuccess = false
  voiceActiveSectionListening = false
  voiceText: any

  constructor(private ngZone: NgZone) { }

  initializeVoiceRecognitionCallback(): void {
    annyang.addCallback('error', (err) => {
      if (err.error === 'network') {
        this.voiceText = 'Internet is require'
        annyang.abort()
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true)
      } else if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true)
        annyang.abort()
      }
    })

    annyang.addCallback('soundstart', (res) => {
      this.ngZone.run(() => this.voiceActiveSectionListening = true)
    })

    annyang.addCallback('end', () => {
      if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true)
        annyang.abort()
      }
    })

    annyang.addCallback('result', (userSaid) => {
      this.ngZone.run(() => this.voiceActiveSectionError = false)
      const queryText: any = userSaid[0]
      annyang.abort()
      this.voiceText = queryText
      this.ngZone.run(() => this.voiceActiveSectionListening = false)
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true)
    });
  }

  startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false
    this.voiceActiveSectionError = false
    this.voiceActiveSectionSuccess = false
    this.voiceText = undefined

    if (annyang) {
      const commands = {
        'demo-annyang': () => { }
      }
      annyang.addCommands(commands)
      this.initializeVoiceRecognitionCallback()
      annyang.start({ autoRestart: false })
    }
  }

  closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true
    this.voiceActiveSectionError = false
    this.voiceActiveSectionSuccess = false
    this.voiceActiveSectionListening = false
    this.voiceText = undefined
    if (annyang) { annyang.abort() }
  }
}
