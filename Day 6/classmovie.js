// class movie 
class movie {
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
        getdetails()
        {
        if(this.rating===undefined)
        {
           this.rating="PG"
           return (`${this.title} is a watchable flim produced by  ${this.studio} with a rating of ${this.rating}`)
        }
        else
        {
       
          return (`${this.title} is a watchable flim produced by  ${this.studio} with a rating of ${this.rating}`);
        }
  }
}

let movie1= new movie("veeram","Zee studios") 
let movie2= new movie("valimai","Seven media","PG15")  
let movie3= new movie("villan","Wonder flims")
let movie4= new movie("Casino Royale","Eon Productions","PG13")

let movie_arr =[movie1,movie2,movie3,movie4]
movie_arr.forEach((movies)=>console.log(`${movies.getdetails()}`))
