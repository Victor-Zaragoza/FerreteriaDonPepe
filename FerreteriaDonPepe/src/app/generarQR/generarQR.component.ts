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
  public item=[""]
  public myitem : string="";
  public qrInfo :string="";

  constructor() { 
    this.level = "M";
    this.values = "";
    this.width = 200;
    this.myitem ="aqui lo del api";
    this.qrInfo = "";
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
