class emp
{
  empid:number;
  empname:string;
  salary:number;
  constructor (id:number,name:string,sal:number)
  {
   this.empid=id;
   this.empname=name;
   this.salary=sal;
  }
  show():void
   {
     console.log("emp id:-"+this.empid);
     console.log("emp name:-"+this.empname);
     console.log("emp salary:-"+this.salary);
   }
}
let obj =new emp(123,"sunil kumar",34567);
obj.show();
obj.empid=23;
obj.empname="ajay kumar";
obj.salary=56789;
obj.show();