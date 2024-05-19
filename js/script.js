(function () {
  const categories = [
    { id: 1, name: 'Hyundai' },
    { id: 2, name: 'Honda' },
    { id: 3, name: 'Shkoda' },
  ];

  const products = {
    1: [
      { id: 1, name: 'Двигун 1,4 DSI АКПП', description: 'В наявності' },
      { id: 2, name: 'Двигун 1,6 DSI АКПП', description: 'Очікується поставка' },
    ],
    2: [
      { id: 3, name: 'Двигун 1,8 Гібрид АКПП', description: 'В наявності' },
      { id: 4, name: 'Двигун 1,2 Бензин АКПП', description: 'Очікується поставка' },
    ],
    3: [
      { id: 5, name: 'Двигун 1,6 DSI АКПП', description: 'В наявності' },
      { id: 6, name: 'Двигун 1,4 DSI МКПП', description: 'Очікується поставка' },
    ],
  };

  const productList = document.getElementById('product-list');
  const productInfo = document.getElementById('product-details');
  const buyButton = document.getElementById('buy-button');

  const loadCategories = function () {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';
    categories.forEach((category) => {
      const li = document.createElement('li');
      li.textContent = category.name;
      li.onclick = () => loadProducts(category.id);
      categoryList.appendChild(li);
    });
  };

  const loadProducts = function (categoryId) {
    productList.innerHTML = '';
    productInfo.innerHTML = '';
    buyButton.style.display = 'none';

    products[categoryId].forEach((product) => {
      const li = document.createElement('li');
      li.textContent = product.name;
      li.onclick = () => showProductInfo(product);
      productList.appendChild(li);
    });
  };

  const showProductInfo = function (product) {
    productInfo.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
    buyButton.style.display = 'block';
    buyButton.onclick = () => buyProduct();
  };

  const buyProduct = function () {
    alert('Товар куплений');
    reset();
  };

  const reset = function () {
    productList.innerHTML = '';
    productInfo.innerHTML = '';
    buyButton.style.display = 'none';
  };

  loadCategories();
}());
