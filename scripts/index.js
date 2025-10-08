let bagItems;
onLod();
function onLod(){
    let bagitemStr=localStorage.getItem('bagItems');
    bagItems=bagitemStr ? JSON.parse(bagitemStr):[];
displayItemsOnHomePage();
displaybagIcon();
}

function addToBag(itemid){
bagItems.push(itemid);
localStorage.setItem('bagItems',JSON.stringify(bagItems))
displaybagIcon();
}
function displaybagIcon(){
    let bagItemsCountElement =document.querySelector('.bag_item_count')
    if(bagItems.length>0){
        bagItemsCountElement.style.visibility='visible'

    bagItemsCountElement.innerHTML=bagItems.length
    }else{
        bagItemsCountElement.style.visibility='hidden'
    }
}


function displayItemsOnHomePage(){

let itemsContenerElement = document.querySelector('.Items_contener')
if(!itemsContenerElement )
{
     return;
}
let innerHTML='';
items.forEach(item=>{
innerHTML+=` <div class="Item_contener">
            <img class="item_image" src="${item.image}" alt="item image">
            <div class="rating">
                ${item.rating.stars}⭐ | ${item.rating.count}
            </div>
            <div>
                <div class="compay_name">${item. company}</div>
                <div class="item_name">${item.item_name} </div>
                <div class="price">
                    <span class="Current-Price">Rs ${item.current_price}</span>
                    <span class="origanal-price">Rs${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="add_bag" onclick="addToBag(${item.id});">Add To Bag</button>
            </div>
         </div>`
});

itemsContenerElement.innerHTML=innerHTML;
}
