import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    gsap.from(".about-me-text p", {
      y: 100,
      ease: "power4.out",
      duration: 1.8,
      skewY: 7,
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: ".about-me-text", // Element to trigger the animation
        start: "top center", // Animation starts when the top of the element reaches the center of the viewport
        end: "bottom center", // Animation ends when the bottom of the element reaches the center of the viewport
        scrub: true, // Smooth animation during scrolling
      }
    });
  }
}