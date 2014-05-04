$( document ).ready(function() {
  // immediate function to remove from global namespace
  // TODO replace with namespace and pass in selector
  (function () {

      var cartObj = [

        {
          "id": "947C045C3C262CD2658F15596BAC1831/tL6Idg8ITsCbe8EnQ6bthQ",
          "messages": [],
          "offers": [
          {
            "id": "cross_sellF2uO_QdyQTuVPrkdv0SavA_any:Jn64-xgNR2qMveXL3yUIWA",
            "presentation": {
              "description": "orem ipsum dolor sit amet, consectetuer adipiscing elit. Sed eu ligula. Sed interdum, odio ut consectetuer imperdiet, elit velit tempor nisi, sit amet accumsan nulla velit ut tortor. Duis pretium ligula non orci interdum accumsan. Vestibulum varius lectus vel nisi. Pellentesque cursus, magna eu euismod vestibulum, nisl nulla pellentesque enim, et dictum dui risus at nibh. Nam id sapien nec pede sagittis euismod.",
              "display": "ABC Photo Organizer"
            },
            "price": {
              "presentation": "$24.95",
              "value": 24.95
            },
            "quantity": 0,
            "styleClass": ""
          }
          ],
          "order": {
           "coupons": "",
           "taxExemptionId": "",
           "currency": "USD",
           "items": [
           {
            "discount": {
              "presentation": "$0.00",
              "value": 0.0
            },
            "presentation": {
              "description": "orem ipsum dolor sit amet, consectetuer adipiscing elit. Sed eu ligula. Sed interdum, odio ut consectetuer imperdiet, elit velit tempor nisi, sit amet accumsan nulla velit ut tortor. Duis pretium ligula non orci interdum accumsan. Vestibulum varius lectus vel nisi. Pellentesque cursus, magna eu euismod vestibulum, nisl nulla pellentesque enim, et dictum dui risus at nibh. Nam id sapien nec pede sagittis euismod.",
              "display": "ABC Book Organizer",
              "image": "//dnkiumg6lohf.cloudfront.net/test/image/58ffd041-28e9-4604-914d-acc8e5efacc6",
              "summary": ""
            },
            "productName": "ABC Book Organizer",
            "quantity": 1,
            "subtotal": {
              "presentation": "$29.95",
              "value": 29.95
            },
            "total": {
              "presentation": "$29.95",
              "value": 29.95
            }
          }
          ],
          "taxRate": 0.0
        }
      }
    ];


    //cartObj.map(function (stuff) {
     console.log(cartObj[0].stuff.order.items[0]);
    //});
  }());
}); 
