import { Component, OnInit, Input , Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router'
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareService } from '../../services/share.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: []
})
export class SigninDialogComponent implements OnInit {
  private username: string
  private password: string
  private rptPwd: string
  private email: string
  private message: string
  constructor(public dialogRef: MatDialogRef<SigninDialogComponent>, public dataService:ShareService) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async checkSignin(){
    if(this.password!=this.rptPwd){
      this.message='password not same'
      return
    } 
    let res= await this.dataService.signin(this.username,this.password,this.email)
    if(res.data.err!=0){
      this.message=res.data.info
    }
    else{
      alert('success')
      this.dialogRef.close()
    }
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: []
})
export class LogoutDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, private dataService:ShareService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  toLogout(){
    this.dataService.logout()
    this.dialogRef.close(true)

  }

}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: []
})
export class LoginDialogComponent implements OnInit {
  private username: string
  private password: string
  private message: string
  private isLogin:boolean
  @Output() login = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, public dataService:ShareService,@Inject(MAT_DIALOG_DATA) public data: boolean) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  async checkLogin(){
    console.log(this.username,this.password)
    let res=await this.dataService.login(this.username,this.password)
    if(res.data.err!=0){
      this.message=res.data.info
    }
    else{
      alert('success')
      //this.data=true
      this.dialogRef.close(true)
    }

  }
  ngOnInit() {
  }

}


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})
export class MainNavComponent implements OnInit {
  private isLogin
  constructor(private router:Router, public dialog: MatDialog,public dataService:ShareService) {}

  async ngOnInit() {
    this.isLogin=await this.dataService.getSession()

  }
  toAdmin(){
    this.router.navigateByUrl('admin')
  }
  toHome(){
    this.router.navigateByUrl('home')
  }
  toAbout(){
    this.router.navigateByUrl('about')
  }
  toNewEditor(){
    this.router.navigateByUrl('article/add')
  }
  toLogin(){
    const dialogRef=this.dialog.open(LoginDialogComponent)//,{data:{state:this.isLogin}})
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result)
      this.isLogin = result;
      //console.log(this.isLogin);
    });
  }
  toSignin(){
    this.dialog.open(SigninDialogComponent)
  }
  toLogout(){
    const dialogRef=this.dialog.open(LogoutDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result==true){
        this.isLogin=this.dataService.getSession()
        this.ngOnInit()
      }
    });

  }
}
