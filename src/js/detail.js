const productsList=[
    {
        id:1,
        name:"Product A",
        type:"Snack",
        time:30,
    },
    {
        id:2,
        name:"Product B",
        type:"Snack",
        time:30,
    },
    {
        id:3,
        name:"Product C",
        type:"Snack",
        time:30,
    },
];

//Lấy ID trên URL
const id = new URLSearchParams(window.location.search).get(id);
function showProducts(products){
    //Kiểm tra xem có phải là 1 mảng hay không nếu không phải 1 mảng thì trả về giá trị Sai
    if(!Array.isArray(products) || products.length ==0)
    return false;
    
    let result="";

    //Tìm 1 phần từ trong mảng, nếu id trong URL = id trong mảng
    const product = products.find((item) => item.id==id);
    result`<h2>${products.name}</h2>` ;
    return result;
}
document.getElementById("detail").innerHTML=showProducts(productList);