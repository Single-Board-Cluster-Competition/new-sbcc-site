document.addEventListener("DOMContentLoaded", function () {
    setTimeout(createPopup, 2500);
});

function createPopup() {
    const popup = document.createElement("div");
    popup.id = "ad-popup";

    const closeButton = document.createElement("span");
    closeButton.id = "ad-popup-close";
    closeButton.textContent = "×";
    closeButton.addEventListener("click", () => popup.remove());

    const priceInfo = getLocalizedPrice();

    let variant = Math.random() < 0.5 ? "hot" : "cool";
    let content = getPopupContent(variant, priceInfo);

    popup.innerHTML = `
        
    `;
    popup.innerHTML = content;
    popup.appendChild(closeButton);
    document.body.appendChild(popup);

    requestAnimationFrame(() => {
        popup.classList.add("show");
    });

    setTimeout(() => {
        popup.style.pointerEvents = "auto";
        closeButton.addEventListener("click", () => popup.remove());
    }, 450); 

}

function getPopupContent(variant, priceInfo) {
    if (variant === "hot") {
        return `
            <h3>🔥 Hot Single Boards in your area!</h3>
            <p>All the heat! Only ${priceInfo}!</p>
            <img src="./assets/funny-haha/rpi5.png">
        `;
    }
    return `
        <h3>🔥 Hot Single Boards in your area!</h3>
        <p>All the heat! Only ${priceInfo}!</p>
        <img src="./assets/funny-haha/rpi5c.png">
    `;
}

function getLocalizedPrice() {
  const locale =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;

  const pricingMap = {
    US: { amount: 4.99, currency: "USD" },
    GB: { amount: 3.72, currency: "GBP" },
    CA: { amount: 6.49, currency: "CAD" },
    AU: { amount: 7.25, currency: "AUD" },
    EU: { amount: 4.59, currency: "EUR" }
  };

  const region = locale.split("-")[1] || "US";
  const price = pricingMap[region] || pricingMap.US;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: price.currency
  }).format(price.amount);
}
