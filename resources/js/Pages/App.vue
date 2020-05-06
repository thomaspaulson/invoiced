<template>
    <div>
        <header-nav></header-nav>
        <div class="container-fluid">
            <div class="row">
                <side-bar></side-bar>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderNav from './HeaderNav';
    import Sidebar from './Sidebar';
    export default {
        components: {
            HeaderNav,
            Sidebar
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


