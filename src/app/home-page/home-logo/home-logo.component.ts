import {
  Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

@Component({
  selector: 'sf-home-logo',
  templateUrl: './home-logo.component.html'
})

export class SFHomeLogoComponent implements OnInit {
  @Input() scene: THREE.Scene = null;

  @Input() renderer: THREE.WebGLRenderer = null;

  @Output() render: EventEmitter<any> = new EventEmitter();

  @ViewChild('homeLogo', { static: false }) homeLogo: ElementRef<HTMLElement>;

  ngOnInit() {
    setTimeout(() => this.displayLogo(), 500);
  }

  displayLogo() {
    this.homeLogo.nativeElement.appendChild(this.renderer.domElement);
    var objLoader = new STLLoader();
    objLoader.load('../../../assets/objects/home-logo/home-logo.stl', (object) => {
      const material = new THREE.MeshStandardMaterial( {
        color: 0xffffff,
        metalness: 1.0,
        roughness: 1.0
      } );
      const mesh = new THREE.Mesh(object, material);
      mesh.scale.set(0.015, 0.015, 0.015);
      this.scene.add(mesh);
      mesh.rotation.x = -1.5;
      setInterval(() => {
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.02;
        this.render.emit();
      }, 100);
    }, (xhr) => {}, (error) => {
      console.log('An error happened: ', error);
    });
  }
}