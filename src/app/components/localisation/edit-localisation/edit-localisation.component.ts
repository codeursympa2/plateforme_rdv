import { Component } from '@angular/core';
import { HttpErrorResponse,} from '@angular/common/http';
import { LocalisationsService } from 'src/app/services/localisations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-localisation',
  templateUrl: './edit-localisation.component.html',
  styleUrls: ['./edit-localisation.component.scss']
})
export class EditLocalisationComponent {

  localisation?:any;
  id?:String;
  localisationForm:any;

  value:boolean=false;
  alert?:String;
  message?:String;

  constructor(
    private localisationServicees:LocalisationsService,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
  ){
    this.localisationForm=this.fb.group(
      {
        pays:['',Validators.required,],
        ville:['',Validators.required,],
        departement:['',Validators.required,],
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
     await this.localisationServicees.getOne(id).subscribe(
        (data:any)=>{
          this.localisation=data;
          this.localisationForm.patchValue({
            pays:this.localisation.pays,
            ville:this.localisation.ville,
            departement:this.localisation.departement,
          });
        }
      )
  }

  onSubmit(){
      this.localisationServicees.update(this.id,this.localisationForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          this.router.navigate(['/localisation'])
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
