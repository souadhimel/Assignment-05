// getElementsById in variable

const baseMemory = document.getElementById("base-memory");
const extraMemory = document.getElementById("extra-memory");
const baseStorage = document.getElementById("base-storage");
const addStorage = document.getElementById("add-storage");
const extraStorage = document.getElementById("extra-storage");
const baseCharge = document.getElementById("base-charge");
const addCharge = document.getElementById("add-charge");

const memoryTotalCost = document.getElementById("memory-total-cost");
const storageTotalCost = document.getElementById("storage-total-cost");
const deliveryTotalCost = document.getElementById("delivery-total-cost");
const grandTotalCost = document.getElementById("grand-total-cost");

const ultimateTotal = document.getElementById("ultimate-total");
const promoInput = document.getElementById("promo");
const promoApplyBtn = document.getElementById("promo-apply");

//all prices
const pricing = {
  eightGBMemoryPrice: 0,
  sixteenGBMemoryPrice: 180,
  baseSSDStoragePrice: 0,
  addSSDStoragePrice: 100,
  extraSSDStoragePrice: 180,
  baseDeliveryCharge: 0,
  addDeliveryCharge: 20,
  promoCode: "stevekaku",
};

const costs = {
  basePrice: 1299,
  memoryCost: 0,
  storageCost: 0,
  deliveryCost: 0,
  grandTotal: 1299,
  grandTotalAfterPromo: 1299,
};

function updateUi() {
  memoryTotalCost.innerText = costs.memoryCost;
  storageTotalCost.innerText = costs.storageCost;
  deliveryTotalCost.innerText = costs.deliveryCost;
  grandTotalCost.innerText = costs.grandTotal;
  ultimateTotal.innerText = costs.grandTotalAfterPromo;
  promoInput.disabled = false;
}

function calculateTotal() {
  const total =
    costs.basePrice + costs.memoryCost + costs.storageCost + costs.deliveryCost;

  costs.grandTotal = total;
  costs.grandTotalAfterPromo = total;

  updateUi();
}

function applyPromo() {
  const formattedPromoValue = promoInput.value.trim().toLowerCase();

  if (!formattedPromoValue || formattedPromoValue !== pricing.promoCode) {
    alert("Promo code not matched");
    return;
  }

  if (formattedPromoValue === pricing.promoCode) {
    costs.grandTotalAfterPromo = costs.grandTotal * (4 / 5);
    promoInput.value = "";
    promoInput.disabled = true;
  }
  updateUi();
}

// Memory section
baseMemory.addEventListener("click", function () {
  costs.memoryCost = pricing.eightGBMemoryPrice;
  calculateTotal();
});

extraMemory.addEventListener("click", function () {
  costs.memoryCost = pricing.sixteenGBMemoryPrice;
  calculateTotal();
});

// Storage section

baseStorage.addEventListener("click", function () {
  costs.storageCost = pricing.baseSSDStoragePrice;
  calculateTotal();
});

addStorage.addEventListener("click", function () {
  costs.storageCost = pricing.addSSDStoragePrice;
  calculateTotal();
});

extraStorage.addEventListener("click", function () {
  costs.storageCost = pricing.extraSSDStoragePrice;
  calculateTotal();
});

//Delivery section

baseCharge.addEventListener("click", function () {
  costs.deliveryCost = pricing.baseDeliveryCharge;
  calculateTotal();
});

addCharge.addEventListener("click", function () {
  costs.deliveryCost = pricing.addDeliveryCharge;
  calculateTotal();
});

//promoCode
promoApplyBtn.addEventListener("click", applyPromo);
