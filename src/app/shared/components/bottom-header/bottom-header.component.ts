import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent implements OnInit {

  isMenuOpened: boolean;
  isProductsMenuOpened: boolean;

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  displayProductsMenu(isOpen) {
    this.isProductsMenuOpened = isOpen;
  }

  displaySmallProductsMenu() {
    this.isProductsMenuOpened = !this.isProductsMenuOpened;
  }

}
