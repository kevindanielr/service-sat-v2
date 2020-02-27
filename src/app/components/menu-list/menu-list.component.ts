import {Component, Input, OnInit} from '@angular/core';
import {MenuList} from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {

  @Input() menu: MenuList[] = [];
  constructor() { }

  ngOnInit() {}

}
