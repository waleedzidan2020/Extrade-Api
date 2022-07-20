export class LoginViewModel{
 
    Email:string ="";
    Password:string ="";
    RememberMe:boolean=false;
    
}

export class LoginResultViewModel {
 

    token:any;
    returnUrl ="";
    rememberMe:string="";
    message="";
    iD="";
  
    
    
    }


    export class RegisterView{
        nameEn:string="";
        nameAr:string="";
        email:string="";
        password:string="";
        country:string="";
        city:string="";
        street:string="";
        Phones:string[]=[];
        uploadedimg:string="";
      }
      