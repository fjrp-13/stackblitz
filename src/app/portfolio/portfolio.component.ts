import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() {
    //this.loadScripts();
  }

  ngOnInit(): void {
  }
  // // Method to dynamically load JavaScript 
  // loadScripts() { 
  //   // This array contains all the files/CDNs 
  //   const dynamicScripts = [ 
  //    '../../assets/js/portfolio.js'
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
