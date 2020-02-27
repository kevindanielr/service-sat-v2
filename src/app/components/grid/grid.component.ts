import { GridMenu } from '../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

  @Input() menu: GridMenu[] = [];

  constructor() { }

  ngOnInit() { }

}
