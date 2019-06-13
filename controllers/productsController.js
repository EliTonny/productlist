const products = [{ title: 'Black Chair', customerBenefits: 'Nice black chair', price: '19.99', externalImageLarge:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fimages%2Fproducts%2Fhenriksdal-chair-black__0516631_PE640461_S4.JPG&imgrefurl=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fcatalog%2Fproducts%2F40380951%2F&docid=KKFGx_BVmTAGAM&tbnid=Xr_Tu2bbQzup5M%3A&vet=10ahUKEwimlqva0-biAhUyHbkGHeX-CicQMwgqKAAwAA..i&w=500&h=500&safe=strict&bih=913&biw=1280&q=black%20chair&ved=0ahUKEwimlqva0-biAhUyHbkGHeX-CicQMwgqKAAwAA&iact=mrc&uact=8' },
                  { title: 'Grey Chair', description: 'Nice grey chair', price: '19.99', externalImageLarge: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.atlanticshopping.co.uk%2Fimages%2F20160513131611%2Fap%2Fresizeandpad%3A480%3A480%2F92870%2Faston-dining-chair-grey-velvet-dc4063-tag1.jpg&imgrefurl=https%3A%2F%2Fwww.atlanticshopping.co.uk%2Fchairs%2Faston-dining-chair-grey-velvet.html&docid=T8fxkA3_8kxA5M&tbnid=UxzFvbAqc51UFM%3A&vet=10ahUKEwjYjN_v0-biAhVFGLkGHZyBBGwQMwhEKAMwAw..i&w=480&h=480&safe=strict&bih=913&biw=1280&q=grey%20chair&ved=0ahUKEwjYjN_v0-biAhVFGLkGHZyBBGwQMwhEKAMwAw&iact=mrc&uact=8' },
                  { title: 'Black Table', description: 'Nice black table', price: '49.99', externalImageLarge: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ikea.com%2FPIAimages%2F22518_PE107397_S5.JPG&imgrefurl=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fcatalog%2Fproducts%2F20011408%2F&docid=1KBSDBqJzdZQ8M&tbnid=Ip2_WWjzWTqtDM%3A&vet=10ahUKEwiO0aH70-biAhW1CtQKHRxaBn8QMwg3KAIwAg..i&w=2000&h=2000&safe=strict&bih=913&biw=1280&q=black%20table&ved=0ahUKEwiO0aH70-biAhW1CtQKHRxaBn8QMwg3KAIwAg&iact=mrc&uact=8' },
                  { title: 'White Table', description: 'Nice white table', price: '49.99', externalImageLarge: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fimages%2Fproducts%2Flack-side-table-white__22519_PE107398_S4.jpg&imgrefurl=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fcatalog%2Fproducts%2F20011413%2F&docid=3M0xOvQPS1BTqM&tbnid=uYSEtMOHQai-HM%3A&vet=10ahUKEwjdx9GG1ObiAhX6I7kGHSRnBIkQMwhKKAAwAA..i&w=500&h=500&safe=strict&bih=913&biw=1280&q=white%20table&ved=0ahUKEwjdx9GG1ObiAhX6I7kGHSRnBIkQMwhKKAAwAA&iact=mrc&uact=8' },
                  { title: 'Yellow Wardrobe', description: 'Nice yellow wardrobe', price: '69.99', externalImageLarge: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F59944306%2Fresize-h310-w310%255Ecompr-r85%2F4119%2F41198367%2Fjabari-mid-century-modern-armoire.jpg&imgrefurl=https%3A%2F%2Fwww.wayfair.com%2Ffurniture%2Fsb1%2Fyellow-armoires-wardrobes-c45981-a166~455636.html&docid=kjrNKVOwGIIVIM&tbnid=wskQVlCdtfs2-M%3A&vet=10ahUKEwjRvoiQ1ObiAhWhH7kGHXMsCaMQMwhIKAcwBw..i&w=310&h=310&safe=strict&bih=913&biw=1280&q=yellow%20wardrobe&ved=0ahUKEwjRvoiQ1ObiAhWhH7kGHXMsCaMQMwhIKAcwBw&iact=mrc&uact=8' }
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
