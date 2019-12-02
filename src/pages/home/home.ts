import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VeicleService } from '../../app/veicle.service'
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  veicles;
  constructor(public navCtrl: NavController, private veiculoService: VeicleService, db: AngularFireDatabase) {
    //console.log(db);
    //this.veicles = veiculoService.veicles;
  }

  onItemClick(veicle) {
    //console.log("item-click", note)
    this.navCtrl.push('DetailsPage', {
      veiculoParam: veicle
    })
  }

  ngOnInit() {
    this.veicles = this.veiculoService.fetchveicles();
  }

  onAddClick() {
    this.navCtrl.push('DetailsPage');
  }
}
