<template>
    <div>
        <div class="alert alert-success" role="alert" v-if="message.success">
            {{ message.success }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="message.error">
            {{ message.error }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "notification-bar",
        props: ['message']
    }
</script>