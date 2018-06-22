import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions,Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string='http://localhost:50719/api/auth/'
  userToken:any;
  constructor(private http:Http) { }

login(model:any){ 
  console.log(model);
  const header =new Headers({'Content-type':'application/json'});
  const options =new RequestOptions({headers:header})
  return this.http.post(this.baseUrl + 'login',model, options).subscribe((response:Response)=>{
    const user=response.json();
   if(user){
   localStorage.setItem('token',user.tokenString);
   this.userToken=user.tokenString;
  };
  
},(error)=>{
  console.log(error);
});
}
}
