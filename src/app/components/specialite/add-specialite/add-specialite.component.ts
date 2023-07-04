import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SpecialitesService } from 'src/app/services/specialites.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-specialite',
  templateUrl: './add-specialite.component.html',
  styleUrls: ['./add-specialite.component.scss']
})
export class AddSpecialiteComponent {

  addStudent:any;
  message?:String;
  value:boolean=false;
  alert:String="alert-danger";


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
      this.specServices.add(this.addStudent.value).subscribe((data:any)=>{
        this.message=data.message
        this.value=true;
        if (data.value) {
            this.alert="alert-success"
            this.resetForm()
        }else{
          this.resetForm()
        }


      })
  }

  resetForm():void{
    this.addStudent.reset()
  }
}
