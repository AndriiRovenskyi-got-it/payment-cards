import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  label = 'Leading cards';
  menuOptions = ['Cards'];
  footerOptions = [
    {
      option: 'Settings',
      optionImage: `assets/icons/Settings.svg`,
    },
    {
      option: 'Support',
      optionImage: `assets/icons/Support.svg`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
