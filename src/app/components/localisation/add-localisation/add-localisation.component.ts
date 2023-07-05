import { Component } from '@angular/core';
import { HttpErrorResponse, } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalisationsService } from 'src/app/services/localisations.service';

@Component({
  selector: 'app-add-localisation',
  templateUrl: './add-localisation.component.html',
  styleUrls: ['./add-localisation.component.scss']
})
export class AddLocalisationComponent {

  localisationForm:any;
  message?:String;
  value:boolean=false;
  alert?:String;

  items = ['Item 1', 'Item 2', 'Item 3'];
  selectedItem?: string;

  constructor(
    private fb:FormBuilder,
    private routes:Router,
    private localisationServices:LocalisationsService
  ){
    this.localisationForm=this.fb.group(
      {
        pays:['',Validators.required],
        ville:['',Validators.required],
        departement:['',Validators.required]
      }
    )
  }

  ngOnInit(): void {
    this.message=""
  }

  onSubmit():void{
      this.value=true;
      this.localisationServices.add(this.localisationForm.value).subscribe((data:any)=>{
        this.message=data.message

        if (data.value) {
            this.alert="alert-success"
            this.resetForm()
            this.routes.navigate(['/localisation']);
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.alert="alert-danger"
          this.message=error.error.message;
        }else {
          console.error('An error occurred:', error.error);
        }
      },

      )
  }

  resetForm():void{
    this.localisationForm.reset()
  }
}
