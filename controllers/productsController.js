const products = [{ title: 'Black Chair', description: 'Nice black chair', price: '19.99' },
                  { title: 'Grey Chair', description: 'Nice grey chair', price: '19.99' },
                  { title: 'Black Table', description: 'Nice black table', price: '49.99' },
                  { title: 'White Table', description: 'Nice white table', price: '49.99' },
                  { title: 'Yellow Wardrobe', description: 'Nice yellow wardrobe', price: '69.99' }
                ];

exports.getProducts = (req, res, next) => {
    /*res.status(200).json({
      posts: [{ title: 'Product1', description: 'Product one' },
              { title: 'Product2', description: 'Product two' },
              { title: 'Product3', description: 'Product three' }]
    });*/

    res.status(200).json({
        products: products
      });
  };
  
  exports.getProductsByTitle = (req, res, next) => {
    const prodTitle = req.params.title;
    const resProduct = [];
    products.forEach(product => {
    if( product.title.toLowerCase().indexOf(prodTitle.toLowerCase()) >= 0 ) {
        resProduct.push(product);
      }
    });
    res.status(200).json({
        products: resProduct
      }); 
  };
