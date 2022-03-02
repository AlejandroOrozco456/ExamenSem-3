import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Universidad } from '../Interface/universidad';
import { UniversidadService } from '../services/universidad.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formulario = this.formBuilder.group({
    country:'',
  })
  country:string="Argentina";
  universidades : Universidad[]=[];

  constructor(private formBuilder : FormBuilder, private UniService:UniversidadService) {}
  onSubmit(){
    this.country=this.formulario.get('country')?.value;
    this.UniService.getCountry(this.country).subscribe((res:any)=>{
      this.universidades=res;
      console.log(this.universidades);
    })
  //this.usuarios=this.UsuarioService.getAll();
    this.limpiarForm();

}
limpiarForm(){
  this.formulario.reset()
}

}
