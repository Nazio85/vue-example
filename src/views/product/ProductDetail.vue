<template>
    <v-card ma-1>
        <v-card-title>
            <div>
                <h4 class="">Name: {{product.name}}</h4>
            </div>
        </v-card-title>
        <v-card-text>
            <div>
                <p>Price: {{product.price}} руб.</p>
                <p>Кол-во: {{product.quantity}} кг.</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    import ProductService from './ProductService'

    export default {
        name: "ProductDetail",
        data(){
            return{
                product:{}
            }
        }, created(){
            ProductService.$on('selectedProduct',  (product) => this.product = product);
        }
    }
</script>

<style scoped>

</style>