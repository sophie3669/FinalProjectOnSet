var SetLibrary = function(){    

}


//This function performs a Union between two sets
 SetLibrary.prototype.setUnion = function(originalset1, originalset2){
   var newSetUnion = new Set();
     	this.originalset1 = originalset1;
     	this.originalset2 = originalset2;
         newSetUnion = newSetUnion.add(this.originalset1).add(this.originalset2);      

           console.log(newSetUnion);
           console.log(newSetUnion.size);

          

     }


//Ths function checks for the ElementOf property of the set
SetLibrary.prototype.contentspresent = function(setString,setcontent){
       this.setcontent = setcontent;
       this.setString = setString;
       var newSetString = new Set(setString);
  
       console.log(newSetString.has(setcontent));
       

}



//This function Checks for the set Intersection and obtains the common elements

SetLibrary.prototype.setIntersection = function(set1,set2){
	 var newIntersect = new Set();
     this.set1 = new Set(set1);
	 this.set2 = new Set(set2);
   for (let i of this.set1)

    {

  	 
    if(this.set2.has(i)){
  	console.log(i);
      	

      
   newIntersect = newIntersect.add(i);
         

  };
     

   };

console.log(newIntersect);
  };


//this function checks for the Nullity of a set ie. if there are no common terms.
SetLibrary.prototype.nullSet = function(set1, set2){
   var newNullSet = new Set();
	this.set1 = new Set(set1);
    this.set2 = new Set(set2);


     console.log(this.set1);
     console.log(this.set2);

    for(let i of this.set2){

       if(this.set1.has(i))
        {
        	console.log(i);
      
      newNullSet.add(i);
   	  console.log("This is not a Null Set");
      console.log(newNullSet);
        }

   

       else
            {

        	if(newNullSet.size === 0){
               console.log("This is a Null Set");

        	}
    

      };
 
   };


  	

};


//This set function checks for the difference between two sets
//   "set1/set2"
SetLibrary.prototype.setdifference = function(set1, set2){
   
   
	this.set1 = new Set(set1);
    this.set2 = new Set(set2);

    var newDifferenceValue = new Set(
    	[...this.set1].filter(x => !this.set2.has(x)));
    console.log(newDifferenceValue);
     
}


//This set function checks for the symmetrical difference between 
//two sets "set1 and set2, finding there differences symmetrically i.e 
// "set1\set2" and "set2\set1" , then finding their union."
SetLibrary.prototype.symmetricDifference = function(set1, set2){

        
        
     	this.set1 = new Set(set1);
     	this.set2 =  new Set(set2);
     	console.log(this.set1);
        
          
       var setDifference1 = new Set(
       [...this.set1].filter(x => !this.set2.has(x)));
       console.log(setDifference1);
     
	    	
      var setDifference2 = new Set(

      [...this.set2].filter(x => !this.set1.has(x)));
      console.log(setDifference2);


     console.log(setDifference1.add(setDifference2));

}

//This function checks for all element present in its set but not contained in the universal set
SetLibrary.prototype.setComplement = function(Universal, set2){
 this.Universal = new Set(Universal);
 this.set2 = new Set(set2);
var complimentValue = new Set([...this.Universal].filter(x => !this.set2.has(x)));
 console.log(complimentValue);



}
 

 //This set function checks if the child set is a subset of the parents class.
 SetLibrary.prototype.subsetOfSet = function(parentSet, childset){
  
  this.parentSet = new Set(parentSet);
  this.childset = new Set(childset);
  var subsetResult = new Set();
  for (let i of this.childset)

    {

  	 
    if(this.parentSet.has(i)){
  	 subsetResult.add(i);
      	
    }
  

   if(subsetResult.has(this.childset))
   {
   console.log("The childset is a subset of the parentSet");

   }
      
   
   else
    {

   //	if(!subsetResult.has(this.childset)){

   		console.log("The childset is not a subset of the parentSet");
   	}
         

     //};
   };

};
  
SetLibrary.prototype.setEquality =  function(set1, set2){
this.set1 = set1;
this.set2 = set2;
   
   if(this.set1 == this.set2){
    console.log("The two sets are equal");

   }
   else
   {
   	console.log("The two sets are not equal");
   }


}
 





var Universal = [1,2,3,4,5,6,7,8,9];
var set1 = [1,2,9,8];
var set5 = [1,2,8,9];
var set2 = "mayor";
var set3 = [6,7,5,3,4];
var set4 = [1,2];

var setlist = new SetLibrary();
setlist.setUnion(set1,set2);
setlist.contentspresent(set1, 7);
setlist.setIntersection(set1, set3);
setlist.nullSet(set1, set3);
setlist.setdifference(set1,set4);
setlist.symmetricDifference(set1,set4);
setlist.setComplement(set5, set1);
setlist.subsetOfSet(set1, set2);
setlist.setEquality(set1, set5);