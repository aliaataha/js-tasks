const cardContainer=document.querySelector(".container")
// console.log(cardContainer)
const cards=[
             {id:1,
                title:"Perfected Strategies for you",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo velit placeat.",
                image:["resourses/assets/images/img1.jpg","resourses/assets/images/adidas.png"]
            }
        ]
for(let i=0;i<3;i++)
{
    cardContainer.innerHTML +=` <div class="card">
                <div class="card-images">
                    <div class="img-left">
                          <img src="${cards[0].image[0]}">
                    </div>
                    <div class="img-right">
                        <img src="${cards[0].image[1]}">
                    </div>
                </div>
                <div class="card-description">
                    <h2>${cards[0].title}</h2>
                    <p>${cards[0].description}</p>
                </div>
            </div>`
}