import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.ms-burgerbtn').on('click', function(event){
		$(this).toggleClass('oppenned');
		event.stopPropagation();
	});
	$('body').on('click', function(event) {
		$('.ms-burgerbtn').removeClass('oppenned');
	});
  }

}