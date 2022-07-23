import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LogInComponent } from "./Account/log-in/log-in.component";
import { CollectionComponent } from "./Component/collection/collection.component";
import { GetCollectionsComponent } from "./Component/GetCollections/get-collections/get-collections.component";
import { ResultComponent } from "./result/result.component";
import { UserComponent } from "./User/user.component";


let myroutes=[
    {
        path:"Create",component:ResultComponent
    
    },
    {
        path:"Login",component:LogInComponent
    },
    {
        path:"SignUp",component:UserComponent
    },
    {
        path:"CreateCollection",component:CollectionComponent
    },
    {
        path:"GetCollections",component:GetCollectionsComponent
    }
    
]

@NgModule({
    imports :[RouterModule.forRoot(myroutes)],
    exports :[RouterModule]
    
})

export class AppRoutingModule{

}