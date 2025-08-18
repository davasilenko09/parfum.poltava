document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartElement = document.getElementById('cart');
  const cartList = cartElement.querySelector('ul');
  const closeCartBtn = document.getElementById('closeCart');

  // Кнопки "Купить"
  document.querySelectorAll('button[data-title]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.title;
      const price = btn.dataset.price;
      cart.push({ title, price });
      updateCart();
      cartElement.style.display = 'block';
    });
  });

  // Закрыть корзину
  closeCartBtn.addEventListener('click', () => {
    cartElement.style.display = 'none';
  });

  // Обновление списка корзины
  function updateCart() {
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.title} - ${item.price} грн <button onclick="removeItem(${index})">Удалить</button>`;
      cartList.appendChild(li);
    });
  }

  // Глобальная функция для удаления товара
  window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCart();
  };
});
