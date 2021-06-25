function cartController() {

    return {
        index(req, res) {
            res.render('client/cart')
        },
        update(req, res) {
            // for the first time creating cart and creating structure of object body
            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                }


                //Check if item does not exist in cart

            }
            let cart = req.session.cart
                //console.log(req.body)
            if (!cart.items[req.body._id]) {
                cart.items[req.body._id] = {
                    item: req.body,
                    qty: 1
                }
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice = cart.totalPrice + req.body.price
            } else {
                cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
                cart.totalQty = cart.totalQty + 1
                cart.totalPrice = cart.totalPrice + req.body.price
            }
            return res.json({ totalQty: req.session.cart.totalQty })
        },
        reduceByOne(req, res) {
            // for the first time creating cart and creating structure of object body

            let cart = req.session.cart
                //console.log(req.body)
                //if (cart.items[req.body._id].qty <= 0) {
                //delete cart.items[req.body._id]

            //}
            if (!cart.items[req.body._id]) {
                cart.items[req.body._id] = {
                    item: req.body,
                    qty: 1
                }
                cart.totalQty = cart.totalQty - 1;
                cart.totalPrice = cart.totalPrice - req.body.price
            } else {
                cart.items[req.body._id].qty = cart.items[req.body._id].qty - 1
                cart.totalQty = cart.totalQty - 1
                cart.totalPrice = cart.totalPrice - req.body.price
            }
            //
            return res.json({ cart: req.session.cart })
        }

    }
}

module.exports = cartController