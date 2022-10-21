class Shape
{
  private shapename;
   constructor (sname:string)
   {
     this.shapename=sname;
   }
   public printShapename():void{
     console.log("Shape name:-"+this.shapename);
   }
}
class Square extends Shape
{
   side:number;
     constructor(sname:string, side:number)
	 {
		 super(sname);
		 this.side=side;
	 }
	 square_area():void{
		 console.log("area of ");
		 this.printShapename();
		 console.log("area:- ");
		 console.log(this.side*this.side);
		 
	 }
}
let obj = new Square("square",10);
obj.square_area();