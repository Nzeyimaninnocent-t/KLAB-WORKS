/*2.const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ],
*/




 const FilteredItems = items.filter((item) => {
    return item.price <= 100
});
const FilteredItem = items.filter((item) => {
    return item.price <= 200
});
const FilteredIt = items.filter((item) => {
    return item.price <= 10
});

