const productList = [
	{
		id: 1,
		name: "Product A",
		img: "",
		type: "Snack",
		time: 30,
	},
	{
		id: 2,
		name: "Product B",
		img: "",
		type: "Snack",
		time: 30,
	},
	{
		id: 3,
		name: "Product B",
		img: "",
		type: "Snack",
		time: 30,
	},
];


function showProduct(products) {
	//Kiểm tra
	if (!Array.isArray(products) || products.length == 0) return false;
	//Xử lý mảng;
	let result = "";
	for (let i = 0; i < products.length; i++) {
		const product = products[i];
		//Kết quả
		result += `
<div>
        <div class="product-img">
            <a href="">
                <img src="${product.img}" alt="" />
            </a>
        </div>
        <div class="product-content">
            <h3><a href="">${product.name}</a></h3>
            <div class="flex">
                <span>${product.time} times</span>
                <span>${product.type}</span>
            </div>
        </div>
    </div>
`;
	}
	return result;
}
document.getElementById("products").innerHTML = showProduct(productList);