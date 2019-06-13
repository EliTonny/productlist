const products = [{ title: 'Black Chair', description: 'Nice black chair', price: '19.99', externalImageLarge:'https://www.ikea.com/us/en/images/products/adde-chair-black__0728277_PE736167_S4.JPG' },
                  { title: 'White Chair', description: 'Nice white chair', price: '19.99', externalImageLarge: 'https://www.ikea.com/us/en/images/products/adde-chair-white__0728280_PE736170_S4.JPG' },
                  { title: 'Black Table', description: 'Nice black table', price: '49.99', externalImageLarge: 'https://www.ikea.com/us/en/images/products/tarendo-table-black__0241636_PE381441_S4.JPG' },
                  { title: 'White Table', description: 'Nice white table', price: '49.99', externalImageLarge: 'https://www.ikea.com/us/en/images/products/linnmon-adils-table-white__0184578_PE336274_S4.JPG' },
                  { title: 'Brown Wardrobe', description: 'Nice brown wardrobe', price: '69.99', externalImageLarge: 'https://www.ikea.com/us/en/images/products/trysil-wardrobe-w-sliding-doors-drawers-brown__0452603_PE601522_S4.JPG' }
                ];

exports.getProducts = (req, res, next) => {
    /*res.status(200).json({
      posts: [{ title: 'Product1', description: 'Product one' },
              { title: 'Product2', description: 'Product two' },
              { title: 'Product3', description: 'Product three' }]
    });*/

    res.status(200).json({
        response: { "numberOfProducts" : 5,
                    "start": 0,
                    products: products}        
      });  
  };
  
  exports.getProductsByTitle = (req, res, next) => {
    const prodTitle = req.params.title;
    const resProduct = [];
    products.forEach(product => {
    if( product.title.toLowerCase().indexOf(prodTitle.toLowerCase()) >= 0 || prodTitle.length() <= 0) {
        resProduct.push(product);
      }
    });
    res.status(200).json({
        response: { "numberOfProducts" : 5,
                    "start": 0,
                    products: resProduct}        
      });  
  };
