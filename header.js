document.getElementById("header").innerHTML = 
`<link rel="stylesheet" href="style.css">
<!-- navigation -->

<div class="container-fluid navigation-bg">
   <div class="container">
   <nav class="navbar navbar-expand-lg navigation-bg">
   <div class="container-fluid">
     <img src="images/logo.webp" alt="" srcset="" />
     <button
       class="navbar-toggler"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarScroll"
       aria-controls="navbarScroll"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse ml-4" id="navbarScroll">
       <ul
         class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
         style="--bs-scroll-height: 100px"
       >
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="index.html"
             >Home</a
           >
         </li>
         <li class="nav-item">
           <a class="nav-link" href="product.html">Products</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="AboutUs.html">About Us</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="contact.html">Contact</a>
         </li>
         <li class="nav-item">
         
           
         </li>
       </ul>
       <form class="d-flex">
         <input
           class="form-control me-2"
           type="search"
           placeholder="Search Product"
           aria-label="Search"
         />
         <button class="btn btn-color btn-outline-dark" type="submit">
           Search
         </button>

         
         <div class="cart-modal-overlay">
    <div class="cart-modal">
      <i id="close-btn" class="fas fa-times"></i>
        <h1 class="cart-is-empty">Cart is empty</h1>
      
        <div class="product-rows">
        </div>
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
           
       </form>
     </div>
   </div>
  </nav>
       </div>
</div>
`
