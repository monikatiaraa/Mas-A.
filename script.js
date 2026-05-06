//*Ulasan*//
const productId = "produk-1";
<script>
function deleteReview(index) {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.splice(index, 1);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  displayReviews();
}

function displayReviews() {
  const reviewList = document.getElementById("reviewList");
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviewList.innerHTML = "";

  reviews.forEach((r, index) => {
    const stars = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);

    reviewList.innerHTML += `
      <div class="review-card">
        <div class="review-header">
          <div>
            <h3>${r.name}</h3>
            <small>${r.date}</small>
          </div>
          <button class="delete-btn" onclick="deleteReview(${index})">🗑️</button>
        </div>

        <div class="star-display">${stars}</div>
        <p>${r.comment}</p>
      </div>
    `;
  });
}
</script>

//*Keranjang*//
let qty = 0;
let harga = 20000;

function toggleCart(){
    document.getElementById("cart").classList.toggle("active");
    document.getElementById("overlay").style.display = "block";
}

function addToCart(){
    qty++;
    updateCart();
}

function updateCart(){
    let items = document.getElementById("cartItems");
    let empty = document.getElementById("emptyCart");
    let footer = document.getElementById("cartFooter");

    if(qty > 0){
        empty.style.display = "none";
        footer.style.display = "block";

        items.innerHTML = `
        <div class="item">
            <span>Scrunchie</span>
            <div class="qty">
                <button onclick="kurang()">-</button>
                <span>${qty}</span>
                <button onclick="tambah()">+</button>
            </div>
        </div>
        `;

        document.getElementById("total").innerText = qty * harga;
    } else {
        empty.style.display = "block";
        items.innerHTML = "";
    }
}

function tambah(){
    qty++;
    updateCart();
}

function kurang(){
    qty--;
    if(qty < 0) qty = 0;
    updateCart();
}

function checkout(){
    document.getElementById("checkoutPage").style.display = "block";
    document.getElementById("checkoutTotal").innerText = qty * harga;
}

function buatStruk(){
    let bayar = document.getElementById("bayar").value;
    let total = qty * harga;
    let kembali = bayar - total;

    document.getElementById("checkoutPage").style.display = "none";
    document.getElementById("struk").style.display = "block";

    document.getElementById("qtyStruk").innerText = qty;
    document.getElementById("totalStruk").innerText = total;
    document.getElementById("bayarStruk").innerText = bayar;
    document.getElementById("kembaliStruk").innerText = kembali;
}