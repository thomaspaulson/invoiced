<template>
        <div>            
			<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 class="h2">Taxes</h1>
				<div class="btn-toolbar mb-2 mb-md-0">
					<div class="btn-group mr-2">						
						<button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="goToAddTax()">Add</button>
					</div>
				</div>
			</div> <!-- -->
        	<notification-bar v-bind:message="message"></notification-bar>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>                        
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tax in taxes" :key="tax.id">
                        <td>{{ tax.id }}</td>
                        <td>{{ tax.title }}</td>                        
                        <td>
                            <router-link :to="{ name: 'TaxEdit', params: { id: tax.id }}" class="btn btn-primary  btn-sm" >edit</router-link> |
							<button @click="(event) => { deleteTax(event, tax.id) }" class="btn btn-primary btn-sm" >delete</button>
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
				taxes: [],
                message: {
                    success: '',
                    error: ''
                }
			}
		},
		created: function () {
			this.loadTaxes();
		},		
  		methods: {
			loadTaxes(){
				// Make a request for all taxes
				axios
					.get('/api/taxes')
					.then( (response) => {
						// handle success							
						this.taxes = response.data.taxes;

					})
					.catch( (error) => {
						// handle error														
						this.message = {success: null, error: error.response.data.message };		
					})

			},
			goToAddTax: function(event){				  
				  this.$router.push({name:'TaxAdd'});				  
			},
			deleteTax: function(event, id){
				//
				if(!window.confirm('Are you sure?')){
					return;
				}
				
				axios
					.delete(`api/taxes/${id}`)
					.then( response => {
						//console.log('all done');
						let taxes = this.taxes;
						this.taxes = taxes.filter(tax => { return tax.id!=id; });
						this.message = {success: "Tax deleted", error: null};

					})
					.catch( error => {
						///console.log(error.response);
						this.message = {success: null,error: error.response.data.message};
					})
			}			  
		}	  
    }
</script>
