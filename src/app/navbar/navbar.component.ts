import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private modalDialog: NgbModal) { }

  ngOnInit() {
  }


  open(content, operation: string) {
    const options: NgbModalOptions = {
      size: 'lg'
    };
    if (operation === 'nuevo') {
     
    }
    this.modalDialog.open(content, options)
    .result
    .then((result => {
     
    }), (result => {

    }));
  }



}
