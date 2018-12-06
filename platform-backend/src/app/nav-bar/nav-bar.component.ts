import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.nav-item').on('click', function(){
      $('.nav-item').each(function(){
        $(this).removeClass('active');
      })

      $(this).addClass('active');
    })
  }

}
