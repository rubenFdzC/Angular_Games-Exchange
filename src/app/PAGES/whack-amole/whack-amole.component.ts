import { Component} from '@angular/core';

@Component({
  selector: 'app-whack-amole',
  templateUrl: './whack-amole.component.html',
  styleUrls: ['./whack-amole.component.scss']
})
export class WhackAMoleComponent {
  score: number = 0;
  timeLeft: number = 60;
  intervalId: any;
  moles: boolean[] = Array(9).fill(false);
  activeMoleIndex: number = -1;
  constructor() { }

  startGame() {
    this.score = 0;
    this.timeLeft = 30;
    this.moles.fill(false);
    this.intervalId = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft == 0) {
        clearInterval(this.intervalId);
        alert(`Game over! Final score: ${this.score}`);
      }
    }, 1000);
    this.showMole();
  }

  showMole() {
    const index = Math.floor(Math.random() * 9);
    this.moles[index] = true;
    this.activeMoleIndex = index;
    setTimeout(() => {
      this.moles[index] = false;
      if (this.timeLeft > 0) {
        this.showMole();
      }
    }, Math.floor(Math.random() * 1000) + 500);
  }

  onMoleHit(index: number) {
    if (this.moles[index]) {
      this.score++;
      this.moles[index] = false;
    }
  }
}
