import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
})
export class ZoomRangePageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  public zoom:number = 10;
  public map?:Map;
  public currentLngLat = new LngLat(-75.69214184383607, -11.427420114646665)

  ngAfterViewInit(): void {
    // console.log(this.divMap);
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListeners();
  }


  mapListeners(){
    if (!this.map)throw 'Mapa NO Inicializado';

    this.map.on('zoom',(ev)=>{
      console.log(ev);
      this.zoom = this.map!.getZoom();
    })

    this.map.on('zoomend',(ev)=>{
      console.log(ev);
      if(this.map!.getZoom()<18) return;
      this.map!.zoomTo(18);
    })

    this.map.on('move',()=>{
      this.currentLngLat=this.map!.getCenter();
      console.log(this.currentLngLat);
    })
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value:string){
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom)
  }
}

