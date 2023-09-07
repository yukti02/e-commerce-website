document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            id: 1,
            name: "Air Max 1 Bronze",
            description: "Statuesque or subtle, shiny or subdued—whatever form it takes, Bronze is a timeless choice.",
            price: 13995.00,
            imageUrl: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/c920011b-5599-4923-b1e8-caec9996d6bb/air-max-1-bronze-dz4549-110-release-date.jpg",
        },
        {
            id: 2,
            name: "Women's Air Adjust Force",
            description: "Coming in hot and ready for the season, the clandestine hoops shoe is here to refresh your outfit.",
            price: 15995.00,
            imageUrl: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/8392d6d1-ea42-440b-bb20-d04d138c1d6e/women-s-air-adjust-force-khaki-and-light-bone-dz1844-200-release-date.jpg",
        },
        {
            id: 3,
            name: "Air Flight Huarache",
            description: "Nobody does basketball like us, and that means no one brings 'em back like we do. The Air Flight Huarache is back.",
            price: 12295.00,
            imageUrl: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/24cad07c-d6c3-4303-bbb5-dfabc500826c/air-flight-huarache-light-smoke-grey-and-noble-red-fd0189-001-release-date.jpg",
        }
    ];

    const offerProducts = [
        {
            name: "Nike Heritage",
            description: "Make a statement at your next big event with the Nike Hip Pack.",
            price: 2295.00,
            discountedPrice: 2177.00,
            imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1c00de0c-80d8-494c-925c-f9a5593ff519/heritage-hip-pack-4ddb2v.png",
        },
        {
            name: "Nike Dri-FIT DNA",
            description: "Made for play, with lightweight, breathable fabric and a roomy fit.",
            price: 3295.00,
            discountedPrice: 3127.00,
            imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43e5e270-2142-4347-a2fb-d533e2197956/dri-fit-dna-20cm-basketball-shorts-ppFGbr.png",
        },
        {
            name: "Nike Go FlyEase",
            description: "These kicks feature Nike's revolutionary FlyEase technology, making a breeze.",
            price: 11895.00,
            discountedPrice: 11297.00,
            imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/247616b5-1d3b-4777-abbb-d5e08a924b78/go-flyease-easy-on-off-shoes-3svRCL.png",
        },
    ];

    function generateProductCards(productArray) {
        const productCardsRow = document.getElementById("productCardsRow");
        productCardsRow.innerHTML = "";

        productArray.forEach((product) => {
            const col = document.createElement("div");
            col.classList.add("col-md-4", "mb-4");
            col.innerHTML = `
            <div class="card flex-fill">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Rs. ${product.price.toFixed(2)}</p>
                    <a href="#" class="btn btn-dark">Add to Cart</a>
                </div>
            </div>
        `;
            productCardsRow.appendChild(col);
        });
    }

    generateProductCards(products);

    function generateOfferCards(offerArray) {
        const offerCardsRow = document.getElementById("offerCardsRow");
        offerCardsRow.innerHTML = "";

        offerArray.forEach((product) => {
            const col = document.createElement("div");
            col.classList.add("col-md-4", "mb-4");
            col.innerHTML = `
                <div class="card">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">
                            <del>Rs. ${product.price.toFixed(2)}</del> 
                            <span class="text-danger">Rs. ${product.discountedPrice.toFixed(2)}</span>
                        </p>
                        <a href="#" class="btn btn-dark">Add to Cart</a>
                    </div>
                </div>
            `;
            offerCardsRow.appendChild(col);
        });
    }

    // Call the function to generate and display offer cards
    generateOfferCards(offerProducts);

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const productCardsRow = document.getElementById("productCardsRow");
    const noResultsMessage = document.getElementById("noResultsMessage");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();

        const filteredProducts = products.filter((product) => {
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
        });

        if (filteredProducts.length > 0) {
            generateProductCards(filteredProducts);
            noResultsMessage.style.display = "none";
        } else {
            productCardsRow.innerHTML = "";
            noResultsMessage.style.display = "block";
        }
    });

});
