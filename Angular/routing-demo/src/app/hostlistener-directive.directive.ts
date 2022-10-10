import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHostlistenerDirective]'
})
export class HostlistenerDirectiveDirective {



  constructor(public eleref: ElementRef, private _renderer: Renderer2) { }

    @HostListener('mouseover') onmouseover(){
      this.eleref.nativeElement.style.color = 'white'
    }

    @HostListener('mouseout') onmouseout(){
      this.eleref.nativeElement.style.color = 'black'
    }

    @HostListener('mouseenter') onHover(){
      this._renderer.setStyle(this.eleref.nativeElement, 'transition', '5s');
      this._renderer.setStyle(this.eleref.nativeElement, 'background-color', 'brown')
    }
    @HostListener('mouseleave') onLeave(){
      this._renderer.setStyle(this.eleref.nativeElement, 'transition', '5s');
      this._renderer.setStyle(this.eleref.nativeElement, 'background-color', '#dbd7d2')
    }

 
}

