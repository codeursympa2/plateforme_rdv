import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalisationsService } from 'src/app/services/localisations.service';

@Component({
  selector: 'app-list-localisation',
  templateUrl: './list-localisation.component.html',
  styleUrls: ['./list-localisation.component.scss']
})
export class ListLocalisationComponent {
  localisations:any;

  constructor(
    private localisationServices:LocalisationsService,
    private router:Router
  ) {

  }

  ngOnInit(): void {

    this.loadLocalisatiions();
  }

  loadLocalisatiions(){
    this.localisationServices.get().subscribe(
      (data:any)=>{
       console.log(data);
       this.localisations=data.reverse();
      }
    )
  }

  confirmDelete(localisation:any){
    if (window.confirm("Voulez vous vraiment supprimer cette localisation ?")) {
      this.localisationServices.delete(localisation).subscribe(
        (data:any)=>{
            console.log(data);
            this.loadLocalisatiions()
        }
        )
    }
  }
}
