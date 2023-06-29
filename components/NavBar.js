const navBar = {
    template: `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <input 
            class="form-check-input" 
            :checked="themeBlack"
            type="checkbox"                     
            name="themeBlack"
            id="themeBlack"
            @click="toggleTheme">
        <label                     
            class="form-check-label" 
            for="themeBlack">
            Escuro
        </label>
        <div class="container-fluid ml-4">
        <a class="navbar-brand" href="#">{{ logo }}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Fight Sticks</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Joysticks
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Qanba</a></li>
                <li><a class="dropdown-item" href="#">Sanwa</a></li>
                <li><a class="dropdown-item" href="#">Hori</a></li>
                <li><a class="dropdown-item" href="#">Seimitsu</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Custom</a></li>
                </ul>
            </li>            
            <li>
                <a @click.prevent="showProductsCart" href="#">
                    <img 
                        src="data:image/png;base64,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"
                        style="width:30px; height:30px;">
                        <span class="badge text-bg-secondary ms-1">{{ totalItemsCart }}</span>
                </a>                    
            </li>
            </ul>
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>
    `, 

    emits: ['toggle-theme', 'show-products-cart'], 

    props: {
        totalItemsCart: {
            type: Number, 
            required: true
        }
    }, 

    data() {
        return {
            logo: 'Arcade4U', 
            items: 0          
        }
    }, 

    methods: {
        toggleTheme() {
            this.$emit('toggle-theme')    
        }, 

        showProductsCart() {
            this.$emit('show-products-cart')
        }
    }

}

app.component('nav-bar', navBar)