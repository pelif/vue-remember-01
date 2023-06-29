const productDetails = {

    template: `
    <section style="background-color: #eee;">
      <div class="text-center container py-5">
        <h4 class="mt-4 mb-5"><strong>Our Fight Sticks</strong></h4>
        <div class="row">

          <div v-for="(product, index) in products" class="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div class="card w-100" style="height:50vh; float:left; margin-top:10px;">
              <div 
                class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" 
                data-mdb-ripple-color="light"
                style="height:40vh">
                <img :src="product.image" class="w-75 h-75" />
                <a href="#!">
                  <div class="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                      <h5><span class="badge bg-primary ms-2">New</span></h5>
                    </div>
                  </div>
                  <div class="hover-overlay">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                  </div>
                </a>
              </div>
              <div class="card-body">
                <a href="" class="text-reset">
                  <h5 class="card-title mb-3">{{ product.title }}</h5>
                </a>
                <a href="" class="text-reset">
                  <p>{{ product.description }}</p>
                </a>
                <h6 class="mb-3">{{ product.price }}</h6>
                
              </div>
              <div class="card-footer" style="height:15vh;">
                <button                           
                  @click.prevent="addCart(product)" 
                  :disabled="inCart(product)"
                  class="btn col-12"          
                  :class="{'btn-success' : !inCart(product), 'btn-secondary': inCart(product)}">
                    <span v-if="!inCart(product)">Add Cart</span>
                    <span v-else>In Cart</span>
                  </button>
              </div>
            </div>    
          </div>
        </div> 
      </div>
    </section>    
   `, 

    emits: ['add-prod-cart'], 

    props: {
        products: {
            type: Array, 
            required: true
        },         
        cart: {
          type: Array
        }
    }, 

    methods: {
        addCart (product) {          
          this.$emit('add-prod-cart', product)          
        }, 

        inCart (product) {
          return this.cart.indexOf(product) != -1           
        }
    }, 

    data() {
        return {
            example: 0,             
        }
    }
}

app.component('product-details', productDetails)