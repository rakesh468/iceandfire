 document.body.innerHTML=`<section class="getbook"></section>
 ` ;

 async function getallbooks(){
 const data= await fetch("https://www.anapioficeandfire.com/api/books",
 {method:"GET"}
 )
 const users=await data.json();
const container=document.querySelector(".getbook")

container.innerHTML
 users.forEach(user=> {
     container.innerHTML+=`
  <section class="book">
  <div class="design">
  <p class="details"><span class="material-icons">book</span><b>${user.name}</b></p>
   <p class="details"><span class="material-icons">person_pin</span><b>Author :${user.authors}</b></p>
   <p class="details"><span class="material-icons">pin</span><b>ISBN :${user.isbn}</b></p>
   <p class="details"><span class="material-icons">store</span><b>Publishers :${user.publisher}</b></p>
   <p class="details"><span class="material-icons">new_releases</span><b>Released :${user.released}</b></p>
   <p class="details"><span class="material-icons">auto_stories</span><b>No:of Pages :${user.numberOfPages}</b></p>
   <p class="details"><span class="material-icons">person</span><b>Characters:${user.characters[0]}</b></p>
  </div>
  </section>
    `;
});
console.log(users);
}
getallbooks();


