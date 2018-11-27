// Create two objects with their own properties (similar to the 
// boat object we created in Night School)
// The first object should contain...
// no less than 4 key-value pairs
// a setter
// a getter
// The second object can contain anything you want, but it should be 
// creative (have fun with it)
// Loop through the values for each object

let story1 = {
    _Title:"Lord Loss", 
    _Genre:"Fiction",
    _subGenre: "Horror", 
    _Author:"Darren Shan", 
    _dateReleased:"June 12, 2005",
    _pageCount: 224, 
    _Isbn: 9783426635506,
    set pCt (newPCt){
        if (typeof newPCt != "number"){
            console.log('NAN');
        }
        else{
            this._pageCount = newPCt;
        }
    },
    get pCt (){
        return this._pageCount;
    }
}
let story2 = {
    _Title:"Hell's Heroes",
    _Genre:"Fiction",
    _subGenre: "Horror",
    _Author:"Darren Shan", 
    _dateReleased:"October 1, 2010",
    _pageCount: 224, 
    _Isbn: 9780007260348,

    set isbn (newIsbn){
        if (typeof newIsbn != "number"){
            console.log('NAN');
        }
        else{
            this._Isbn = newIsbn;
        }
    },
    get isbn (){
        return this._Isbn;
    }

}

let story1_values = Object.values(story1);
let story1_keys = Object.keys(story1);
let story2_values = Object.values(story2);
let story2_keys = Object.keys(story2);

story1_values.forEach(v => {
    console.log(v);
});
story2_values.forEach(va => {
    console.log(va);
});