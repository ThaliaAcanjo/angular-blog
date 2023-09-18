import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista:{id: string; title: string; description: string; photoCover: string;}[]= dataFake;

  constructor() {}

  ngOnInit(): void {
  }
}
