import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpecialitesService } from 'src/app/services/specialites.service';

@Component({
  selector: 'app-list-specialites',
  templateUrl: './list-specialites.component.html',
  styleUrls: ['./list-specialites.component.scss']
})
export class ListSpecialitesComponent {

  specialites:any;

  constructor(
    private specialisationServices:SpecialitesService,
    private router:Router
  ) {

  }

  ngOnInit(): void {

    this.loadSpecialites();
  }

  loadSpecialites(){
    this.specialisationServices.get().subscribe(
      (data:any)=>{
       console.log(data);
       this.specialites=data.reverse();
      }
    )
  }
}
