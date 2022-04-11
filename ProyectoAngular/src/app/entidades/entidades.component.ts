import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../entidades.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {
  title = 'Seleccione la(s) entidades que desee consultar:';
  masterSelected:boolean;
  checkedList:any;
  entidadesSeleccionadas: Array<any> = [];
  entidades: any;
  id:any;
  page:any;
  

    constructor(public EntidadesService: EntidadesService,public dialog: MatDialog) { 
    this.masterSelected = false;
    this.getCheckedItemList();
  }
  checkUncheckAll() {
    for (var i = 0; i < this.entidadesSeleccionadas.length; i++) {
      this.entidadesSeleccionadas[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.entidadesSeleccionadas.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.entidadesSeleccionadas.length; i++) {
      if(this.entidadesSeleccionadas[i].isSelected)
      this.checkedList.push(this.entidadesSeleccionadas[i]);
    }
    console.log(this.checkedList)
  }

  ngOnInit() {
    this.EntidadesService.getEntidad().subscribe(data=>{
      this.entidades = data;
      this.page="";
      for(let elem of data.data){
        const obj:any = 
        {
        'id': elem['id'],
        'email': elem['email'],
        'first_name': elem['first_name'],
        'last_name': elem['last_name'],
        'avatar' : elem['avatar'],
        'checked': false}
        this.entidadesSeleccionadas.push(obj);
      }
    });
  }

  Delete():void{
  }
 
}
@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})
export class Modal {
}