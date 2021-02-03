import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare function typedEffect(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    //this.loadScripts();
  }

  ngOnInit(): void {
    (function ($) {
      typedEffect();
    })(jQuery);
  }

  // Method to dynamically load JavaScript 
  // loadScripts() { 
  //   // This array contains all the files/CDNs 
  //   const dynamicScripts = [ 
  //      '../../assets/js/home.js'
  //   ]; 
  //   for (let i = 0; i < dynamicScripts.length; i++) { 
  //     const node = document.createElement('script'); 
  //     node.src = dynamicScripts[i]; 
  //     node.type = 'text/javascript'; 
  //     node.async = false; 
  //     document.getElementsByTagName('head')[0].appendChild(node); 
  //   }
  // }
}

