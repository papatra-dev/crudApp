import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {EmployeService} from "../shared/employe.service";
 // pour le toast qui affichera le message de succes
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss'],
  providers : [EmployeService] ,
})
export class EmployeComponent implements OnInit {



 constructor(public employeService : EmployeService ) { }

  ngOnInit() : void {
    this.resetForm();
  }


  resetForm(form?: NgForm){
    if (form)
      form.reset();

      this.employeService.selectedEmploye = {
        _id: "",
      name: "" ,
      position: "",
      office: "",
      salary: null

    }
  }
  onSubmit(form : NgForm){
    return this.employeService.postEmploye(form.value).subscribe((res) =>{
      this.resetForm(form);
      M.toast({html : 'Saved succesfully', classes :'rounded'});

    });

  }
}



