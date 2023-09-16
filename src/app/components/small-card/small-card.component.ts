import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() Id = "0"
  @Input() cardTitle = "";
  @Input() photoCover = "";

  constructor() { }

  ngOnInit(): void {
  }

}
