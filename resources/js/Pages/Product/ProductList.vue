<template>
        <div>            
			<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 class="h2">Products</h1>
				<div class="btn-toolbar mb-2 mb-md-0">
					<div class="btn-group mr-2">						
						<button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="goToAddProduct()">Add</button>
					</div>
				</div>
			</div> <!-- -->
        	<notification-bar v-bind:message="message"></notification-bar>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Taxable</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
						<td>{{ product.price }}</td>
						<td>{{ product.taxable }}</td>                        
                        <td>
                            <router-link :to="{ name: 'ProductEdit', params: { id: product.id }}" class="btn btn-primary  btn-sm" >edit</router-link> |
							<button @click="(event) => { deleteProduct(event, product.id) }" class="btn btn-primary btn-sm" >delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
			
        </div>
</template>
<script>
	import NotificationBar from '@/Shared/NotificationBar';	

    export default {
        components: {
            NotificationBar
        },
		data: function(){
			return	{	
				products: [],
				meta:{
					current_page: 0,
					last_page: 0,
					next_page_url: '',
					per_page: 0,
					total: 0
				},
                message: {
                    success: '',
                    error: ''
                },
				url: '/api/products'
			}
		},
		created: function () {
			this.loadProductes();
		},		
  		methods: {
			loadProductes(){
				// Make a request for all products
				axios
					.get(this.url)
					.then( (response) => {
						// handle success							
						this.products = response.data.products;
						this.meta = response.data.meta;
						this.url = this.meta.next_page_url;

					})
					.catch( (error) => {
						// handle error														
						this.message = {success: null, error: error.response.data.message };		
					})

			},
			goToAddProduct: function(event){				  
				  this.$router.push({name:'ProductAdd'});				  
			},
			deleteProduct: function(event, id){
				//
				if(!window.confirm('Are you sure?')){
					return;
				}
				
				axios
					.delete(`api/products/${id}`)
					.then( response => {
						//console.log('all done');
						let products = this.products;
						this.products = products.filter(product => { return product.id!=id; });
						this.message = {success: "Product deleted", error: null};

					})
					.catch( error => {
						///console.log(error.response);
						this.message = {success: null,error: error.response.data.message};
					})
			}			  
		}	  
    }
</script>
