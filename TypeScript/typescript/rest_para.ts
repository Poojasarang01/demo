function namelist(city:string, ...names:string[]):void{
  console.log("city name :-"+city);
  for (let i=0;i<names.length;i++)
    console.log(names[i]);
}
namelist("indore","abhay","akshay","avikant","nitin");