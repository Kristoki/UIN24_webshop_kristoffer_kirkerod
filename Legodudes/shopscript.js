


//
// <article class="product-card">
// <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL">
// <a href="#KATEGORISIDE">Nijago</a>
// <h3>Dragon Zane</h3>
// <p>Kr. 89,-</p>
// <button>Legg til i hanldekurv</button>
// </article>
//


console.log(products)


let producHTML = ""

window.onload = function(){

    products.map((product, index) => producHTML += `           
                    <article class="product-card">
                    <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL">
                    <a href="#KATEGORISIDE">Nijago</a>
                    <h3>${product.title}</h3>
                    <p>Kr. ${product.price},-</p>
                    <button>Legg til i hanldekurv</button>
                    </article>`)


    prodList = document.getElementById("main").innerHTML = producHTML
}


