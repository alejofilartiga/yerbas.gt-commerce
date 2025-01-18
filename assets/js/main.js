document.addEventListener('DOMContentLoaded', () => {
    const products = {
        canarias: [
            {
                id: 1,
                name: "Canarias Tradicional",
                price: 5000,
                img: './assets/js/products/canarias/cantrad.png'
            },
            {
                id: 2,
                name: "Canarias Serena",
                price: 7000,
                img: './assets/js/products/canarias/cansere.png'
            },
            {
                id: 3,
                name: "Canarias Te Rojo",
                price: 9000,
                img: './assets/js/products/canarias/canrojo.png'
            },
            {
                id: 4,
                name: "Canarias Especial",
                price: 8000,
                img: './assets/js/products/canarias/canespe.png'
            },
            {
                id: 5,
                name: "Termo Canarias",
                price: 4000,
                img: './assets/js/products/canarias/canter.png'
            },
            {
                id: 6,
                name: "Canarias Te Verde",
                price: 7600,
                img: './assets/js/products/canarias/canver.png'
            }
        ],
        reiverde: [
            {
                id: 7,
                name: "Rei Verde Clasica",
                price: 7290,
                img: './assets/js/products/rei/reiclasi.png'
            },
            {
                id: 8,
                name: "Rei Verde Compuesta",
                price: 7500,
                img: './assets/js/products/rei/reicomp.png'
            },
            {
                id: 9,
                name: "Rei Verde Palo",
                price: 7800,
                img: './assets/js/products/rei/reipalo.png'
            },
            {
                id: 10,
                name: "Rei Verde Premium",
                price: 8000,
                img: './assets/js/products/rei/reipre.png'
            },
            {
                id: 11,
                name: "Rei Verde Tradicional",
                price: 8200,
                img: './assets/js/products/rei/reitrad.png'
            }
        ],
        otras: [
            {
                id: 12,
                name: "Baldo",
                price: 6000,
                img: './assets/js/products/otros/baldo.png'
            },
            {
                id: 13,
                name: "Sara Clasica",
                price: 6500,
                img: './assets/js/products/otros/saraclas.png'
            },
            {
                id: 14,
                name: "Sara Azul",
                price: 6700,
                img: './assets/js/products/otros/sarazul.png'
            },
            {
                id: 15,
                name: "Taragui",
                price: 7000,
                img: './assets/js/products/otros/taragui.png'
            }
        ]
    };

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });

    const productContainer = document.querySelector('.product-container');
    const categoryButtons = document.querySelectorAll('.categories-container button');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        const cartButton = document.querySelector('.btn-cart');
        cartButton.dataset.quantity = cart.length;
    };

    const addToCart = (product, size = '') => {
        if (product.name !== "Termo Canarias" && !size) {
            alert('Por favor, elige un peso antes de agregar al carrito.');
            return;
        }
        const productWithSize = { ...product, size };
        cart.push(productWithSize);
        updateCart();
    };

    const renderProducts = (category) => {
        productContainer.innerHTML = '';
        const selectedProducts = category && category !== 'todo' ? products[category] : Object.values(products).flat();

        selectedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('card');
            productCard.innerHTML = `
                <div class="image_container">
                    <img src="${product.img}" class="image" alt="${product.name}">
                </div>
                <div class="title">
                    <span>${product.name}</span>
                </div>
                ${product.name !== "Termo Canarias" ? `
                <div class="size">
                    <span>Peso</span>
                    <ul class="list-size">
                        <li class="item-list"><button class="item-list-button" data-size="500gr">500gr</button></li>
                        <li class="item-list"><button class="item-list-button" data-size="1kg">1kg</button></li>
                    </ul>
                </div>` : ''}
                <div class="action">
                    <div class="price">
                        <span>$${product.price}</span>
                    </div>
                    <button class="cart-button" data-id="${product.id}">
                        <svg class="cart-icon" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                        <span>Add to cart</span>
                    </button>
                </div>
            `;
            productContainer.appendChild(productCard);
        });

        document.querySelectorAll('.item-list-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const sizeButtons = e.target.closest('.list-size').querySelectorAll('.item-list-button');
                sizeButtons.forEach(btn => btn.classList.remove('selected'));
                e.target.classList.add('selected');
            });
        });

        document.querySelectorAll('.cart-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.closest('.cart-button').dataset.id;
                const product = selectedProducts.find(p => p.id == productId);
                if (product.name === "Termo Canarias") {
                    addToCart(product);
                } else {
                    const sizeButtons = e.target.closest('.card').querySelectorAll('.item-list-button');
                    let selectedSize = '';
                    sizeButtons.forEach(btn => {
                        if (btn.classList.contains('selected')) {
                            selectedSize = btn.dataset.size;
                        }
                    });
                    addToCart(product, selectedSize);
                }
            });
        });
    };

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent.toLowerCase().replace(' ', '');
            renderProducts(category);
        });
    });

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');
    document.body.appendChild(cartContainer);

    const renderCart = () => {
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
        } else {
            cart.forEach(product => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <img src="${product.img}" alt="${product.name}">
                    <span>${product.name}${product.size ? ' - ' + product.size : ''}</span>
                    <span>$${product.price}</span>
                `;
                cartContainer.appendChild(cartItem);
            });

            const cartActions = document.createElement('div');
            cartActions.classList.add('cart-actions');
            cartActions.innerHTML = `
                <button class="buy-button">Comprar</button>
                <button class="clear-button">Vaciar carrito</button>
            `;
            cartContainer.appendChild(cartActions);

            document.querySelector('.buy-button').addEventListener('click', () => {
                alert('Compra realizada con éxito!');
                cart.length = 0;
                updateCart();
                renderCart();
            });

            document.querySelector('.clear-button').addEventListener('click', () => {
                cart.length = 0;
                updateCart();
                renderCart();
            });
        }
    };

    const cartButton = document.querySelector('.btn-cart');
    cartButton.addEventListener('click', () => {
        cartContainer.classList.toggle('visible');
        renderCart();
    });

    renderProducts('todo');
    updateCart();

    const sendButton = document.getElementById('send-button');
    const resetButton = document.getElementById('reset-btn');
    const errorMessage = document.getElementById('error-message');

    sendButton.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('mail').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            errorMessage.textContent = 'Todos los campos son obligatorios.';
        } else {
            errorMessage.textContent = 'Mensaje enviado con éxito!';
            errorMessage.style.color = 'green';
        
        }
    });

    resetButton.addEventListener('click', () => {
        document.getElementById('name').value = '';
        document.getElementById('mail').value = '';
        document.getElementById('message').value = '';
        errorMessage.textContent = '';
        errorMessage.style.color = 'red';
    });
});
