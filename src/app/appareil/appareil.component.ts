import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(protected appareilService: AppareilService) {}

  ngOnInit() {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === this.appareilService.getStatusAllume()) {
      return 'green';
    } else if (this.appareilStatus === this.appareilService.getStatusEteint()) {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === this.appareilService.getStatusAllume()) {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === this.appareilService.getStatusEteint()) {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
