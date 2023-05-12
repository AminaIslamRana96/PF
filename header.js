document.getElementById("header").innerHTML =
  `<link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
<!-- navigation -->

<div class="container-fluid navigation-bg">
   <div class="container">
   <nav class="navbar navbar-default navbar-fixed-top navbar-expand-lg navigation-bg">
   <div class="container-fluid">
     <img src="images/logo.webp" alt="" srcset="" />
    
     <div class="collapse navbar-collapse ml-4" id="navbarToggleExternalContent">    
       <ul
         class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
         style="--bs-scroll-height: 100px"
       >
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="index.html"
             >Home</a
           >
         </li>
         <li class="nav-item dropdown">
           <a class="nav-link" href="product.html">Products</a>
           <div class="dropdown-content">
           <a href="#">Eyes</a>
           <a href="#">Face</a>
           <a href="#">Lips</a>
         </div>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="AboutUs.html">About Us</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="contact.html">Contact</a>
         </li>
       </ul>
       
       <form class="d-flex align-self">
         <input
           class="form-control me-2"
           type="search"
           placeholder="Search Product"
           aria-label="Search"
         />
         <button class="btn btn-color btn-outline-dark " type="submit">
           Search
         </button>
        
       </form>
       </div>
       <div class="cart-modal-overlay">
       <div class="cart-modal">
         <i id="close-btn" class="fas fa-times"></i>
               <h1 class="cart-is-empty">Cart is empty</h1>
 
         <div class="product-rows"></div>
         <div class="total">
            <h1 class="cart-total">TOTAL</h1>
           <span class="total-price">$0</span>
           <button class="purchase-btn">PURCHASE</button>
         </div>
       </div>
     </div>
     <div class="cart-btn">
     <i id="cart" class="fas fa-shopping-cart"></i>
       
       <span class ="cart-quantity">0</span>
     </div>
      
       <button
       class="navbar-toggler navbar-light pull-right"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarToggleExternalContent" 
       aria-controls="navbarToggleExternalContent"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span class="navbar-toggler-icon"></span>
     </button>
     
   </div>
  </nav>
       </div>
</div>
`
