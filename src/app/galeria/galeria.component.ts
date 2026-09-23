import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Servicio } from '../servicio';
import { IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel],
})
export class GaleriaComponent  implements OnInit {
  
  public tituloSeccion: string = 'Galería de Imágenes Dinámica';
  public descripcion: string = 'Esta imagen se carga desde el directorio de assets mediante Property Binding';
  public rutaImagenLocal: string = 'assets/foto1.jpg';

  users:Usuario[]=[];
  constructor(private usersService:Servicio) {}

  async ngOnInit() {
    this.users=await this.usersService.getUsuarios();
  }

}
