import { Component, ElementRef, OnInit, ViewChild,HostListener } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { ApiServiceService } from '../appServices/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'tailwindProject';
  imageArray:any=[]
  nextPage:any;
  previousPage:any;
  progressRef: NgProgressRef;
  btnDisabled:boolean = true;
  errorText:any;
  myurl:any;
  myzoom:any;
  mltstyle={
    background:'',
    backgroundRepeat:'',
    backgroundSize:'',
    left:'',
    top:'',
    backgroundPosition:''
  }

  @ViewChild('myimage') img!:ElementRef
  @ViewChild('magdiv') magdiv!:ElementRef
  constructor(private apiService:ApiServiceService,private progress: NgProgress){
    this.progressRef = progress.ref('myProgress');
  }
    ngOnInit(): void {
      
    }
   magnify(imgID:any, zoom:any) {
      var img:any, glass: HTMLElement, w: number, h: number, bw: number;
      img = document.getElementById(imgID.id);
    // img = myimage
    // console.log(img)
      /* Create magnifier glass: */
      glass = document.createElement("DIV");
      glass.setAttribute("class", "img-magnifier-glass");
    // console.log(glass)
      /* Insert magnifier glass: */
      img.parentElement.insertBefore(glass, img);
    
      /* Set background properties for the magnifier glass: */
      glass.style.backgroundImage = "url('img.src')";
      glass.style.backgroundRepeat = "no-repeat";
      glass.style.border = "1px solid black";
      glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
      bw = 3;
      w = glass.offsetWidth / 2;
      h = glass.offsetHeight / 2;
      // console.log(glass.style)
      /* Execute a function when someone moves the magnifier glass over the image: */
      glass.addEventListener("mousemove", moveMagnifier);
      img.addEventListener("mousemove", moveMagnifier);
      function moveMagnifier(e: any) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        // e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /* Prevent the magnifier glass from being positioned outside the image: */
        // if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
        // if (x < w / zoom) {x = w / zoom;}
        // if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
        // if (y < h / zoom) {y = h / zoom;}
        /* Set the position of the magnifier glass: */
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /* Display what the magnifier glass "sees": */
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        // console.log(glass.style)
      }
    
      function getCursorPos(e: any) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
      }
    }
  getImage(item:any){
    this.progressRef.start();
    this.previousPage = false
    this.apiService.getImages(item.value).subscribe((res)=>{
      console.log(res)
      this.errorText = false
      this.progressRef.complete();
      this.imageArray = res.photos
      this.myurl=this.imageArray[0].src.original
      console.log(this.myurl)
      this.nextPage = res.next_page
      console.log(this.imageArray.length)
    if(this.imageArray.length===0){
      this.errorText="Could Not Find What You'r looking for..."
    }
    },
    (err)=>{
      console.log(err)
      this.errorText = err.error.code
      this.progressRef.complete();
    })
  }
previous(){
this.progressRef.start();
console.log(this.previousPage)
if(!this.previousPage){
  this.errorText = "Could Not Find What You'r looking for..."
  this.progressRef.complete();
}else{
this.apiService.getPreviousImages(this.previousPage).subscribe((res=>{
  console.log(res)
  this.errorText = false
  this.progressRef.complete();
  this.imageArray = res.photos
  this.nextPage = res.next_page
  this.previousPage = res.prev_page
}),
(error)=>{
  console.log(error)
  this.errorText = error.error.code
  this.progressRef.complete();
})
}
}
next(){
  this.progressRef.start();
  this.btnDisabled = false
  console.log(this.nextPage)
  if(!this.nextPage){
    this.errorText = "Could Not Find What You'r looking for..."
    this.progressRef.complete();
  }else{
  this.apiService.getNextImages(this.nextPage).subscribe((res)=>{
    console.log(res)
    this.errorText = false
    this.progressRef.complete();
    this.imageArray = res.photos
    this.nextPage = res.next_page
    this.previousPage = res.prev_page
    console.log(this.imageArray.length)
    if(this.imageArray.length===0){
      this.errorText=" That's it , please search something else..."
    }
  },
  (error)=>{
    console.log(error)
    this.errorText = error.error.code
    this.progressRef.complete();
  })
}
}

}
function Hostlistner(arg0: string) {
  throw new Error('Function not implemented.');
}

