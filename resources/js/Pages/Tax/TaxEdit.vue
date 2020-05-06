<template>
        <div>
			<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 class="h2">Edit tax</h1>
				<div class="btn-toolbar mb-2 mb-md-0">
					<div class="btn-group mr-2">						
						<button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="goBack()">Go Back</button>
					</div>
				</div>
			</div> <!-- -->
            <notification-bar :message="message"></notification-bar>
            <tax-form @on-submit="onSubmit" :tax="tax" :errors="errors"></tax-form>
        </div>
</template>
<script>
    import NotificationBar from '@/Shared/NotificationBar';
    import TaxForm from './TaxForm.vue';

    export default {
        components: {
            NotificationBar,
            TaxForm
        },
        data:function(){            
            return  {
                tax:{
                    title: '',
                    sort_order  : ''
                },
                errors: {},
                message: {
                    success: '',
                    error: ''
                }                
            }
        },
        mounted() {            
            this.getTaxDetails();
        },
        methods: {
    		goBack: function(event){				  
			    this.$router.go(-1);				  
            }, 
            onSubmit: function(){
                const {id} = this.$route.params;
                axios
                    .put(`/api/taxes/${id}`, this.tax)
                    .then( response => {
                        //console.log(response);
                        this.message = {success: response.data.message, error: null};
                        this.errors={};
                        //this.reset();
                    })
                    .catch( error => {
                        //console.log(error.response);
                        this.message = {success: null, error: error.response.data.message};
                        this.errors = error.response.data.errors;

                    })
            },
            reset: function(){
                document.getElementById('tax-form').reset();
            },
            getTaxDetails(){
                const {id} = this.$route.params;
                axios
                    .get(`/api/taxes/${id}`)
                    .then(response => {
                        //console.log(response.data);
                        this.tax = response.data.tax;
                    })
                    .catch( error => {
                        //console.log(error.response);
                        this.message = {success: null,error: error.response.data.message};
                        this.errors = error.response.data.errors;

                    })

            }

        }
    }
</script>
