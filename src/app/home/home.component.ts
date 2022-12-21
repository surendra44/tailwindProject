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

