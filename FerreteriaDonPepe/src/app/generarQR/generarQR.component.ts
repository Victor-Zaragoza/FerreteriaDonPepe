import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generarQR',
  templateUrl: './generarQR.component.html',
  styleUrls: ['./generarQR.component.css']
})

export class GenerarQRComponent implements OnInit {

  public values: string = "";
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  public item=["FerreteriaFroog", "https://us-central1-ferreteria-c749b.cloudfunctions.net/app/api/articles", "https://us-central1-ferreteria-c749b.cloudfunctions.net/app/hello-world"];
  public myitem : string="";
  public qrInfo :string="";

  constructor() { 
    this.level = "M";
    this.values = "";
    this.width = 200;
    this.myitem ="";
    this.qrInfo = "";
    this.item=["https://us-central1-ferreteria-c749b.cloudfunctions.net/app/api/users", "https://us-central1-ferreteria-c749b.cloudfunctions.net/app/api/articles", "https://us-central1-ferreteria-c749b.cloudfunctions.net/app/hello-world"];
  }

  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrData(val: string) {
    this.values = val;
  }

  qrWidth(val: number) {
    this.width = val;
  }
  ngOnInit(): void {
  }
  aleatorio () {
    this.myitem = this.item [Math.floor(Math.random() * this.item.length)]
    this.qrInfo=this.myitem
    return(this.qrInfo) 
  }

}
