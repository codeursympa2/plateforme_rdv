import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SpecialitesService } from 'src/app/services/specialites.service';
import { Validators } from '@angular/forms';
import { HttpErrorResponse, HttpHeaderResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-specialite',
  templateUrl: './add-specialite.component.html',
  styleUrls: ['./add-specialite.component.scss']
})
export class AddSpecialiteComponent {

  addStudent:any;
  message?:String;
  value:boolean=false;
  alert?:String;


  constructor(
    private fb:FormBuilder,
    private routes:Router,
    private specServices:SpecialitesService
  ){
    this.addStudent=this.fb.group(
      {
        nom:['',Validators.required],
        taxe_plateforme:['',Validators.required]
      }
    )
  }

  ngOnInit(): void {
    this.message=""
  }

  onSubmit():void{
      this.value=true;
      this.specServices.add(this.addStudent.value).subscribe((data:any)=>{
        this.message=data.message

        if (data.value) {
            this.alert="alert-success"
            this.resetForm()
            this.routes.navigate(['/specialite']);
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
    this.addStudent.reset()
  }
}
