import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialitesService } from 'src/app/services/specialites.service';
import { HttpErrorResponse,} from '@angular/common/http';


@Component({
  selector: 'app-edit-specialite',
  templateUrl: './edit-specialite.component.html',
  styleUrls: ['./edit-specialite.component.scss']
})
export class EditSpecialiteComponent {

  specialite?:any;
  id?:String;
  updateSpecialite:any;

  value:boolean=false;
  alert?:String;
  message?:String;

  constructor(
    private specialiteServices:SpecialitesService,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
  ){
    this.updateSpecialite=this.fb.group(
      {
        nom:['',Validators.required,],
        taxe_plateforme:['',Validators.required]
      }
    )
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getOne(this.id);

    });


  }

  async getOne(id:any){
     await this.specialiteServices.getOne(id).subscribe(
        (data:any)=>{
          this.specialite=data;
          this.updateSpecialite.patchValue({
            nom: this.specialite.nom,
            taxe_plateforme:this.specialite.taxe_plateforme.$numberDecimal
          });
        }
      )
  }

  onSubmit(){
      this.specialiteServices.update(this.id,this.updateSpecialite.value).subscribe(
        (data:any)=>{
          console.log(data);
          this.router.navigate(['/specialite'])
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.value=true;
            this.alert="alert-danger"
            this.message=error.error.message;
          }else {
            console.error('An error occurred:', error.error);
          }
        },
      )
  }
}
