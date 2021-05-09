import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'sf-homepage',
  templateUrl: './home-page.component.html',
})

export class SFHomepageComponent implements OnInit {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  light: THREE.DirectionalLight;
  light2: THREE.DirectionalLight;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 3;
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.physicallyCorrectLights = true;
    this.renderer.toneMappingExposure = 1;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.light = new THREE.DirectionalLight(0xFFFFFF, 1);
    this.light.position.set(-1, 2, 4);
    this.scene.add( this.light );
    this.light2 = new THREE.DirectionalLight(0xFFFFFF, 1);
    this.light2.position.set(1, -2, -4);
    this.scene.add( this.light2 );

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.animate();
    this.camera.updateProjectionMatrix();
  }

  ngOnInit() { }

  render() {
    this.renderer.render(this.scene, this.camera);
    if (this.resizeRendererToDisplaySize()) {
      const canvas = this.renderer.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }
  }

  resizeRendererToDisplaySize() {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      this.renderer.setSize(width, height, false);
    }
    return needResize;
  }

  animate() { 
    this.render();
  }
}