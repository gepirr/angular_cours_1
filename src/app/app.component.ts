import { ChangeDetectionStrategy, Component, VERSION } from "@angular/core";
import { Observable } from "rxjs";
import { PipoService } from "./pipo.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  a = 0;
  b = 0;
  //recuperer son Observable
  obs: Observable<number>;
  //on veut utiliser PipoService
  constructor(pipo: PipoService) {
    this.obs = pipo.obsCompteur;
    //initialiser obs avec l'Observable qui est dans Pipo
  }

  get listMots(): string[] {
    console.log("split!");
    return this.name.split("").map(m => m.toUpperCase());
  }
}
