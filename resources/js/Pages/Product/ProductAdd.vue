<template>
        <div>
			<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 class="h2">Add product</h1>
				<div class="btn-toolbar mb-2 mb-md-0">
					<div class="btn-group mr-2">						
						<button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="goBack()">Go Back</button>
					</div>
				</div>
			</div> <!-- -->
            <notification-bar :message="message"></notification-bar>
            <product-form @on-submit="onSubmit" :product="product" :errors="errors"></product-form>
        </div>
</template>
<script>
    import NotificationBar from '@/Shared/NotificationBar';
    import ProductForm from './ProductForm.vue';

    export default {
        components: {
            NotificationBar,
            ProductForm
        },
        data:function(){            
            return  {
                product:{
                    name: '',
                    taxable: true,
                    price  : '',
                    taxes: []
                },
                errors: {},
                message: {
                    success: '',
                    error: ''
                }                
            }
        },
        methods: {
    		goBack: function(event){				  
			    this.$router.go(-1);				  
            }, 
            onSubmit: function(){
                axios
                    .post(`/api/products`, this.product)
                    .then( response => {
                        //console.log(response);
                        this.message = {success: response.data.message, error: null};
                        this.errors={};
                        this.reset();
                    })
                    .catch( error => {
                        //console.log(error.response);
                        this.message = {success: null, error: error.response.data.message};
                        this.errors = error.response.data.errors;

                    })
            },
            reset: function(){
                document.getElementById('product-form').reset();
            }
        }
    }
</script>
