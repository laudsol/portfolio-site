// "use strict";
//
// function whatsThis () {
//   // console.log(this);
//
//   whatIsThis();
//   function whatIsThis(){
//     console.log(this);
//   }
// }
// whatsThis();
//
//
// var myObj = {
//   myProp: true,
//   getThis: function(){
//     console.log(this.myProp);
//   }
// }
//
// myObj.getThis();
//
// function Pizza(ingredients,size){
//   this.ingredients= ingredients;
//   this.size = size;
//   console.log(this)
// }
//
// var worstPizza = new Pizza (['ham', 'carrots'],'large');
// var normalPizza = new Pizza (['olives'],'small');
//
// var shelbyPizza = {};
// Pizza.call(shelbyPizza,'[Pinaeapple,Jalapeno]','large');

//
// var Pizza = (ingredients,size) => {
//   console.log(this);
//   this.ingredients= ingredients;
//   this.size = size;
//   console.log(this);
// }
//
// myPizza = {
//   isItTrue: true,
//   checkThisOut: () => console.log(this)}

// function test(){
//   setTimeout(function(){
//     console.log(this);
//   },1000)
// }
//
// test();

myObj = {
  someData: 'BruceWayne',getSomeData: () => {
    setTimeout(() => console.log(this),1000)
  }
}

myObj.setSomeData();
