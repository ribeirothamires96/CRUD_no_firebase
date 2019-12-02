import { AngularFireDatabase } from 'angularfire2/database'
import { Injectable } from '@angular/core';
@Injectable()
export class VeicleService {
    constructor(private db: AngularFireDatabase) {

    }

    veicles = [
        {
            id: '1',
            name: 'Corsinha',
            model: 'Chevrolet',
            color: 'Silver',
            licensePlate: 'HAH-7462'
        },
        {
            id: '2',
            name: 'Gol',
            model: 'Volkswagen',
            color: 'Red',
            licensePlate: 'AAA-5475'
        }
    ]

    removeveicle(veicle) {
        this.db.object("/veicles/" + veicle.$key).remove()
            .then(
                x => console.log("veicle deleted successfully")
            ).
            catch(error => {
                console.log("Could not delete veicle");
                alert("Could not delete veicle")
            });
    }

    addveicle(veicle) {
        this.db.list("/veicles/").push({
            name: veicle.name,
            model: veicle.model,
            color: veicle.color,
            licensePlate: veicle.licensePlate
        });
    }

    fetchveicles() {
        return this.db.list("/veicles/");
    }

    editveicle(veicle) {
        this.db.object("/veicles/" + veicle.$key).update({
            name: veicle.name,
            model: veicle.model,
            color: veicle.color,
            licensePlate: veicle.licensePlate
        });
    }
}