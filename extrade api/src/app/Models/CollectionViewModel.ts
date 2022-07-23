
export class CollectionViewModel{
    Success:boolean=false;
    url:string="";
    Message:string='';
    Data:any;
}
export class CollectionEditViewModel{
    nameEn:string="";
    nameAr:string="";
    marketerID=localStorage.getItem('id');
}