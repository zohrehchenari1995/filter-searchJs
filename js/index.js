const searchInput = document.querySelector("#search");
const productsDom = document.querySelector(".products__center");
const buttons = document.querySelectorAll(".button");


let allProductsData = [];

let filters = {
  searchItem: "",
};

document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/items")
    .then((res) => {
      allProductsData = res.data;
      // render products on dom
      renderProducts(res.data, filters);
    })
    .catch((err) => console.log(err));
});

function renderProducts(_products, _filter) {
  const filteredProducts = _products.filter((p) => {
    return p.title.toLowerCase().includes(_filter.searchItem.toLowerCase());
  });
  productsDom.innerHTML = "";
  console.log(filteredProducts);
  // render to Dom
  filteredProducts.forEach((item)=>{
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("product");
    productsDiv.innerHTML = `
       <div class="product__image">
                  <img src="${item.image}" alt="">
                </div>
                <div class="product__description">
                  <p class="product__title">${item.title}</p>
                  <p class="product__price">${item.price}میلیون تومان</p>
                </div>
    `
    // append to Dom
    productsDom.appendChild(productsDiv);
  })
}

searchInput.addEventListener("input",(e)=>{
  filters.searchItem = e.target.value;
  renderProducts(allProductsData,filters)
});

// filter based on group
buttons.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    const filter =e.target.dataset.filter
   console.log(filter);
   filters.searchItem = filter;
   renderProducts(allProductsData,filters)
  })
})