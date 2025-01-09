//Example of array methods
//filter ,findIndex, indexof , map , every , sum ,reduce slice, splice
let username=usernameinput.value // this line can be use to check the username the one want to check in the database or array 
let customers=[{username:"Ayo",Password:"8288828281"},{username:"Ayobami",Password:"82888640281"},{username:"Adesewa",Password:"8288828281"}]
//to check if Ayo/any needed username is already existing we can use  the array method
let check =customers.findIndex(c=> c.username.toLowerCase()==username.toLowerCase());
//To check for index of Ayobami
let chec= customers.findIndex(c=>c.username=="Ayobami")
//if Ayobami exist, chec= index;
//if Ayobami does not exist, chec = -1
if (chec<0){
    //Ayobami does not exist
}else{
    //username Ayobami alre
}

