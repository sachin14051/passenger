import { ElementRef, Pipe, PipeTransform, Renderer2 } from "@angular/core";

@Pipe({
    name: "child"
})


export class DatePipe implements PipeTransform{
    transform(value: ElementRef,rendere:Renderer2) {

      return 
    }
    
}