import { CdkMenuTrigger } from '@angular/cdk/menu';
import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { TokenService } from '../Services/token.service';
import { usersItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Input()  collapsed=false;
@Input()   screenWidth=0;
canShowSearchAsOverlay=false;
SearchOverlay:any;
usersItems=usersItems;
public loggedIn :boolean | undefined ;

constructor(private Auth : AuthService,private router: Router, private Token :TokenService){}


@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.checkCanShowSearchAsOverlay(window.innerWidth);


}


ngOnInit():void{
  this.checkCanShowSearchAsOverlay(window.innerWidth);
  this.Auth.authStatus.subscribe(value=> this.loggedIn=value);
}


getHeadClass():string{
  let styleClass ='';
  if(this.collapsed && this.screenWidth>768){
    styleClass= 'head-trimmed';
  }else{
    styleClass= 'head-md-screen';
  }
  return styleClass;
}


  checkCanShowSearchAsOverlay(innerWith: number):void{
   if(innerWith < 845){
    this.canShowSearchAsOverlay=true;
   }else{
    this.canShowSearchAsOverlay=false;
   }
}

logout(event: MouseEvent){
  event.preventDefault();
  this.Token.remove();
  this.Auth.changeAuthStatus(false);
  this.router.navigateByUrl('/login');
}



}
