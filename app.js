const myApp = {
    data() {
        return {
            title: 'Vue3 App Cart', 
            themeBlack: false,             
            styles: {
                backgroundColor: '#eaeaea', 
                color: '#222'  
            }, 
            showCart: false, 

            products: [
                {
                    title: 'Qanba Red and Black', 
                    description: 'QANBA N1 Black Pc Arcade Stick (Fighting Stick)', 
                    image: 'https://ueeshop.ly200-cdn.com/u_file/UPAS/UPAS588/2108/31/products/2-dbbb.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_240,w_240', 
                    price: '$ 39,00'
                }, 
                {
                    title: 'QANBA Q8 Silent Arcade Joystick (Fighting Stick)', 
                    description: 'QANBA Q8 Silent Arcade Joystick (Fighting Stick)', 
                    image: 'https://ueeshop.ly200-cdn.com/u_file/UPAS/UPAS588/2209/09/products/V823-1d1e.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_240,w_240', 
                    price: '$ 79,00'
                },
                {
                    title: 'QANBA Q3 Obsidian E-sports Professional Edition Arcade Stick（Fighting Stick）', 
                    description: 'QANBA Q3 Obsidian E-sports Professional Edition Arcade Stick（Fighting Stick）', 
                    image: 'https://ueeshop.ly200-cdn.com/u_file/UPAS/UPAS588/2109/07/products/Q3-2-4ff0.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500', 
                    price: '$ 65,00'
                },
                {
                    title: 'QANBA Q1 Arcade Stick(Fighting Stick) Black for Pc &Android', 
                    description: 'QANBA Q1 Arcade Stick(Fighting Stick) Black for Pc &Android', 
                    image: 'https://ueeshop.ly200-cdn.com/u_file/UPAS/UPAS588/2108/31/products/2-f7ba.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500', 
                    price: '$ 55,00'
                },
                {
                    title: 'Obsidian', 
                    description: 'Sanwa buttons and stick with square gate', 
                    image: 'https://ueeshop.ly200-cdn.com/u_file/UPAS/UPAS588/2108/19/products/Q3-7-584a-1c7c.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500', 
                    price: '$ 60,00'
                },
                
            ], 

            cart: [], 
        }
    },     

    methods: {

        toggleTheme() {
            this.themeBlack = !this.themeBlack
            if(this.themeBlack) {                
                this.styles.backgroundColor = '#333'; 
                this.styles.color = '#eaeaea';                     
            } else {
                this.styles.backgroundColor = '#eaeaea'; 
                this.styles.color = '#333';                 
            }            
        },  

        addCart(product) {
            this.cart.push(product)            
        }, 

        inCart(product) {
            return this.cart.indexOf(product) != -1
        }, 

        removeCart(product) {
            this.cart = this.cart.filter((prod, index) => product !== prod)
            console.log(this.cart)
        },  

        showProductsCart() {
            if(this.showCart) {
                this.showCart = false
            } else {
                this.showCart = true
            }
        }
       

    }
}

const app = Vue.createApp(myApp)