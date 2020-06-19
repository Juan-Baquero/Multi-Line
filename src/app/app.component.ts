import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3'; 
import { DataService } from './data.service';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None, 
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'HeatMap';
  //-----Declarar variables utilizadas.
  hostElement; // Native element hosting the SVG container
  svg; // Top level SVG element
  g; // SVG Group element
  data;
  viewBoxHeight;
  viewBoxWidth;
  margin;
  width;
  height;
  public contenido;

  @ViewChild('popover', { static: false }) public popover: NgbPopover;
 

    constructor(public service: DataService, private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
  }
  
  ngOnInit(){
     //Obtener datos
     this.data = this.service.getData();
     this.createChart()
  }

  createChart(){
    this.removeExistingChartFromParent()
    this.setChartDimension()
    this.initProperties()

    //Crear Rectangulo prueba
    this.svg.append("rect")
      .attr("class", "prueba")
      .attr("transform", `translate(50,50)`)
      .attr("fill", "black")
      .attr("pointer-events", "all")
      .attr("width", 30)
      .attr("height", 30)
      .attr("cursor", "pointer")
      .on("click",()=>{this.showPopOver(this.data)});

      
  }//FinCreateChart

  private removeExistingChartFromParent() {
    // !!!!Caution!!!
    // Make sure not to do;
    //     d3.select('svg').remove();
    // That will clear all other SVG elements in the DOM
    d3.select(this.hostElement).select('svg').remove();
  }//Fin removeexistingChart

  private setChartDimension() {
    // Se hace responsive el svg  setChartDimension()
    this.viewBoxHeight = 410;
    this.viewBoxWidth = 900;
    this.svg = d3.select(this.hostElement).append('svg')
    .attr('width', this.viewBoxWidth )
      .attr('height', this.viewBoxHeight)
    //Responsive
      /*.attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 ' + this.viewBoxWidth + ' ' + this.viewBoxHeight);*/
    //-----------------------------------------------------------------------
    // Agregar elemento grafico   
    this.g = this.svg.append("g")
      .attr("transform", "translate(0,0)");
  }//Fin setChart

  private initProperties() {

    //---Inicializar propiedades
    this.margin = ({ top: 50, right: 30, bottom: 0, left: 280})
    this.width = this.viewBoxWidth;
    this.height = this.viewBoxHeight;

  }//Fin init
  private showPopOver(data) {
    // console.log("." + this.filterName(name))
  // console.log(new ElementRef (d3.selectAll(".prueba")))
   

    this.contenido = data;

    this.popover._elementRef = new ElementRef(d3.selectAll(".prueba").node());//"." + this.filterName(data.name)).node());
    // console.log(this.popover.isOpen())
    if (this.popover.isOpen()) this.popover.close;
    else this.popover.open();
    //setTimeout(() => {this.popover.open();},1000)

//console.log(this.popover)
  }//Fin showPopOver

}
