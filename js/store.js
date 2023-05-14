var parent = document.getElementById("product_Grid");


loadCarsdata();

document.getElementById("loadcarsdata").addEventListener("click", loadCarsdata);
function loadCarsdata() {





for (var i = 0; i < dataCar.length; i++) {


    console.log("html");
    var row = document.createElement("tr");
    row.innerHTML = '<div class="showcase">	<div class="showcase-banner">	  <img src="Cars/'+dataCar[i].CarImage+'" alt="Mens Winter Leathers Jackets" width="300" class="product-img default">	<img src="Cars/'+dataCar[i].CarImage+'" alt="Mens Winter Leathers Jackets" width="300"	class="product-img hover">	</div>	<div class="showcase-content">	  <a href="#" class="showcase-category">'+dataCar[i].CarName +'</a>	  <a href="#">		<h3 class="showcase-title">'+dataCar[i].CarEngine+'</h3>	  </a>	  <div class="showcase-rating">		<ion-icon name="star"></ion-icon>		<ion-icon name="star"></ion-icon>		<ion-icon name="star"></ion-icon>		<ion-icon name="star-outline"></ion-icon>		<ion-icon name="star-outline"></ion-icon>	  </div>	  <div class="price-box">		<p class="price">'+dataCar[i].CarPrice+' INR </p>		  </div>	</div>  </div>';
    parent.appendChild(row);
}
}