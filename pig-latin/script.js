function pigLatin(str) {
    str = str.toLowerCase();
    let d = /[aeiou]/gi;
    let nstr = "";
  
    // Check if the input is empty or a single letter
    if (!str || str.length === 1) {
      return "Input can't be translated.";
      // console.log("")
    }
  
    let vindex = str.indexOf(str.match(d)[0]);
  
    console.log(str.match(d)); 
   
    if (str[0].match(d)) {
      nstr=str+"way"
      console.log(nstr);
      
    } else 
     if (str.match(d) === null) {
      nstr = str + "ay";
       
      console.log("dud");
    }else {
      // let index=(str.indexOf(str.match(d)));
      nstr = str.substr(vindex) + str.substr(0, vindex) + "ay";
  
      console.log(nstr);
    }
   return nstr;
    }
  
  pigLatin("apple");