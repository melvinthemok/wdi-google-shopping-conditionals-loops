var data = require('../products.json')

var items = data.items

var shoppingCount = 0
for (var i = 0; i < items.length; i++) {
  if ((items[i])['kind'] === 'shopping#product') {
  }
  shoppingCount += 1
}

console.log('The number of items that have \'kind\' of \'shopping#product\' is ' + shoppingCount + '; also see data.currentItemCount.')

/*
for (var j = 0; j < items.length; j++) {
  var product = items[j]['product']
  var inventories = product['inventories']
  for (var k = 0; k < inventories.length; k++) {
    if (inventories[k]['availability'] === 'backorder') {
      console.log(product['title'] + ' is the title of an item with \'backorder\' availability in \'inventories\'.')
    }
  }
}
*/
/*
for (var l = 0; o < items.length; o++) {
  var product = items[l]['product']
  if (product && product['images'] && product['images'].length > 1) {
    console.log(product['title'])
  }
}
*/
/*
var canonCount = 0
for (var m = 0; m < items.length; m++) {
  if (items[m]['product']['brand'] === 'Canon') {
    console.log(items[m])
    canonCount += 1
  }
}
console.log(canonCount)
*/
/*
var eBayCanonCount = 0
for (var n = 0; n < items.length; n++) {
  var product = items[n]['product']
  var author = product['author']
  var name = author['name']
  var brand = product['brand']
  if (name.includes('eBay') && brand === 'Canon') {
    console.log(items[n])
    eBayCanonCount += 1
  }
}
console.log(eBayCanonCount)
*/
/*
for (var o = 0; o < items.length; o++) {
  var product = items[o]['product']
  var brand = product['brand']
  console.log(brand)
  var inventories = product['inventories']
  for (var p = 0; p < inventories.length; p++) {
    var currency = inventories[p]['currency']
    var price = inventories[p]['price']
    console.log(currency + price)
  }
  var images = product['images']
  for (var q = 0; q < images.length; q++) {
    var link = images[q]['link']
    var status = images[q]['status']
    if (status === 'available') {
      console.log(link)
    }
  }
}
*/
