
export class CollectionViewModel{
    Success:boolean=false;
    Message:string='';
    Data:any;
}
export class CollectionEditViewModel{
    NameAr:string="";
    NameEN:string="";
    MarketerID=localStorage.getItem("id");

}