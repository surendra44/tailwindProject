import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomFn]'
})
export class ZoomFnDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { }
 
  @HostListener('mouseover', ['$event']) onMouseOver(event:any){
    console.log(event,'from directive')
    // magnify(imgID:any, zoom:any) {
    //   var img:any, glass: HTMLElement, w: number, h: number, bw: number;
    //   img = document.getElementById(imgID.id);
    // // img = myimage
    // // console.log(img)
    //   /* Create magnifier glass: */
    //   glass = document.createElement("DIV");
    //   glass.setAttribute("class", "img-magnifier-glass");
    // // console.log(glass)
    //   /* Insert magnifier glass: */
    //   img.parentElement.insertBefore(glass, img);
    
    //   /* Set background properties for the magnifier glass: */
    //   glass.style.backgroundImage = "url('" + img.src + "')";
    //   glass.style.backgroundRepeat = "no-repeat";
    //   glass.style.border = "1px solid black";
    //   glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    //   bw = 3;
    //   w = glass.offsetWidth / 2;
    //   h = glass.offsetHeight / 2;
    //   console.log(glass.style,'glass1')
    //   /* Execute a function when someone moves the magnifier glass over the image: */
    //   glass.addEventListener("mousemove", moveMagnifier);
    //   img.addEventListener("mousemove", moveMagnifier);
    //   function moveMagnifier(e: any) {
    //     var pos, x, y;
    //     /* Prevent any other actions that may occur when moving over the image */
    //     e.preventDefault();
    //     /* Get the cursor's x and y positions: */
    //     pos = getCursorPos(e);
    //     x = pos.x;
    //     y = pos.y;
    //     /* Prevent the magnifier glass from being positioned outside the image: */
    //     if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    //     if (x < w / zoom) {x = w / zoom;}
    //     if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    //     if (y < h / zoom) {y = h / zoom;}
    //     /* Set the position of the magnifier glass: */
    //     glass.style.left = (x - w) + "px";
    //     glass.style.top = (y - h) + "px";
    //     /* Display what the magnifier glass "sees": */
    //     glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    //     console.log(glass.style,'glass2')
    //   }
    
    //   function getCursorPos(e: any) {
    //     var a, x = 0, y = 0;
    //     e = e || window.event;
    //     /* Get the x and y positions of the image: */
    //     a = img.getBoundingClientRect();
    //     /* Calculate the cursor's x and y coordinates, relative to the image: */
    //     x = e.pageX - a.left;
    //     y = e.pageY - a.top;
    //     /* Consider any page scrolling: */
    //     x = x - window.pageXOffset;
    //     y = y - window.pageYOffset;
    //     return {x : x, y : y};
    //   }
    // }
  }
}
// magnify(imgID:any, zoom:any) {
//   var img:any, glass: HTMLElement, w: number, h: number, bw: number;
//   img = document.getElementById(imgID.id);
// // img = myimage
// // console.log(img)
//   /* Create magnifier glass: */
//   glass = document.createElement("DIV");
//   glass.setAttribute("class", "img-magnifier-glass");
// // console.log(glass)
//   /* Insert magnifier glass: */
//   img.parentElement.insertBefore(glass, img);

//   /* Set background properties for the magnifier glass: */
//   glass.style.backgroundImage = "url('" + img.src + "')";
//   glass.style.backgroundRepeat = "no-repeat";
//   glass.style.border = "1px solid black";
//   glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
//   bw = 3;
//   w = glass.offsetWidth / 2;
//   h = glass.offsetHeight / 2;
//   console.log(glass.style,'glass1')
//   /* Execute a function when someone moves the magnifier glass over the image: */
//   glass.addEventListener("mousemove", moveMagnifier);
//   img.addEventListener("mousemove", moveMagnifier);
//   function moveMagnifier(e: any) {
//     var pos, x, y;
//     /* Prevent any other actions that may occur when moving over the image */
//     e.preventDefault();
//     /* Get the cursor's x and y positions: */
//     pos = getCursorPos(e);
//     x = pos.x;
//     y = pos.y;
//     /* Prevent the magnifier glass from being positioned outside the image: */
//     if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
//     if (x < w / zoom) {x = w / zoom;}
//     if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
//     if (y < h / zoom) {y = h / zoom;}
//     /* Set the position of the magnifier glass: */
//     glass.style.left = (x - w) + "px";
//     glass.style.top = (y - h) + "px";
//     /* Display what the magnifier glass "sees": */
//     glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
//     console.log(glass.style,'glass2')
//   }

//   function getCursorPos(e: any) {
//     var a, x = 0, y = 0;
//     e = e || window.event;
//     /* Get the x and y positions of the image: */
//     a = img.getBoundingClientRect();
//     /* Calculate the cursor's x and y coordinates, relative to the image: */
//     x = e.pageX - a.left;
//     y = e.pageY - a.top;
//     /* Consider any page scrolling: */
//     x = x - window.pageXOffset;
//     y = y - window.pageYOffset;
//     return {x : x, y : y};
//   }
// }