import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const dropdownElement = this.elementRef.nativeElement.querySelector('.dropdown-toggle');
    dropdownElement.addEventListener('mouseover', () => {
      new bootstrap.Dropdown(dropdownElement);
    });
  }
  ngOnInit(): void {
  }

}


