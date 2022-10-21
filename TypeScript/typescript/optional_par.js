function per_detail(id, name, jobprofile, sal) {
    console.log("Person id:- " + id);
    console.log("Person Name:- " + name);
    console.log("Person job profile:- " + jobprofile);
    if (sal != undefined)
        console.log("Person sal:- " + sal);
}
per_detail(101, "sunil kumar", "job", 123456);
per_detail(1012, "anil kumar", "job");
per_detail(202210111234, "sunita", "student");
