import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() {
    // this.loadScripts();
  }

  ngOnInit(): void {
  }

  // Method to dynamically load JavaScript 
  loadScripts() { 
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
       '../../assets/js/skills.js'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    }
  }
}
