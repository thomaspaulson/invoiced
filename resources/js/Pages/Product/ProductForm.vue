<template>
    <form id="product-form" @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" v-model="product.name">            
            <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>           
        </div>
        <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" id="price" placeholder="Price" v-model="product.price">            
            <div v-if="errors && errors.price" class="text-danger">{{ errors.price[0] }}</div>           
        </div>

        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="taxable" v-model="product.taxable">
            <label class="form-check-label" for="taxable">Taxable</label>
            <div v-if="errors && errors.taxable" class="text-danger">{{ errors.taxable[0] }}</div>           
        </div>        

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
export default {
    name: "product-form",
    props: {
        product: {},
        errors:{}
    }, 
    methods:{
        handleSubmit: function(){
             this.$emit('on-submit', this.product);
        }
    }
}
</script>