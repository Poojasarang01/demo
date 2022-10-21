interface person
{
  name:string;
  address:string;
  pid:number;
  print_detail();
}
class student implements  person
{
	name:string;
  address:string;
  pid:number;
  constructor(name:string,address:string,pid:number)
  {	  
	this.name=name;
	this.address=address;
	this.pid=pid;	
  }
  print_detail():void{
	console.log("id:- "+this.pid);  
	console.log("name:- "+this.name);  
	console.log("address:- "+this.address);  
  }
	show=()=>{
		
		console.log("Arrow function in class");
	}
}
let obj = new student("sunil sharma","vijay nagar indore",123);
obj.print_detail();
obj.show();