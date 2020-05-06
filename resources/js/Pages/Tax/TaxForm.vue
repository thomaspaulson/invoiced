<template>
    <form id="tax-form" @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="tax.title">            
            <div v-if="errors && errors.title" class="text-danger">{{ errors.title[0] }}</div>           
        </div>
        <div class="form-group">
            <label for="sort_order">Sort order</label>
            <input type="number" class="form-control" id="sort_order" placeholder="Sort order" v-model="tax.sort_order"> 
            <div v-if="errors && errors.sort_order" class="text-danger">{{ errors.sort_order[0] }}</div>           
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
export default {
    name: "tax-form",
    props: {
        tax: {},
        errors:{}
    }, 
    methods:{
        handleSubmit: function(){
             this.$emit('on-submit', this.tax);
        }
    }
}
</script>