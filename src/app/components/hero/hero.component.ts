import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      paused: true
    });

    const textElement = document.querySelector('.animate-my-name');

    if (textElement && textElement.textContent) {
      const textContent = textElement.textContent;
      textElement.textContent = '';

      for (let i = 0; i < textContent.length; i++) {
        const char = textContent.charAt(i);
        const span = document.createElement('span');
        span.textContent = char;
        textElement.appendChild(span);

        tl.fromTo(
          span,
          0.2,
          {
            opacity: 0,
            ease: 'power2.inOut'
          },
          {
            opacity: 1,
            ease: 'power2.inOut'
          },
          i * 0.1
        );
      }

      tl.play();
      tl.from('.salam', { x: 1000, duration: 1 });
    }


    gsap.fromTo(
      '.bio-text',
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.bio',
          start: '23% 40%',
          end: '30% 30%',
          scrub: 0.6,


        },
      }
    );
    gsap.fromTo(
      '.animate-address',
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.bio',
          start: '23% 40%',
          end: '30% 30%',
          scrub: 0.6,
        },
      }
    );

  }

}
