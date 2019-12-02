import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VeicleService } from '../../app/veicle.service'

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  veicle;
  newveicleFlag = false;
  deleteveicleFlag = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private veiculoService: VeicleService,
    private alertCtrl: AlertController) {
    this.veicle = this.navParams.get("veiculoParam");
    if (!this.veicle) {
      this.veicle = {
        id: "",
        name: "",
        model: "",
        color: "",
        licensePlate: ""
      };
      this.newveicleFlag = true;
    }
    console.log("nav - param", this.veicle);
  }

  onTrash() {
    let confirm = this.alertCtrl.create({
      title: "Delete?",
      message: `Are you sure you want to delete this veicle: "${this.veicle.model}"?`,
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Confirm",
          handler: () => {
            this.deleteveicleFlag = true;
            this.veiculoService.removeveicle(this.veicle);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  ionViewWillLeave() {
    if (this.newveicleFlag) {
      if (this.veicle.name != "" && this.veicle.model != "" && this.veicle.color != "" && this.veicle.licensePlate != "")
        this.veiculoService.addveicle(this.veicle);
    }
    else if (!this.deleteveicleFlag) {
      this.veiculoService.editveicle(this.veicle);
    }
  }

}
