<template>
    <v-card ma-1>
        <v-card-title>
            <div>
                <h4>Name: {{product.name}}</h4><br/>
                <p>Price: {{product.price}} руб.</p><br/>
                <p>Кол-во: {{product.quantity}} кг.</p>
            </div>
        </v-card-title>

        <v-card-actions>
            <v-btn flat block color="green" @click="showDetail()">Open</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import ProductService from "./ProductService";

    export default {
        name: "ProductItem",
        props: {
            product: {
                type:Object,
                required:true
            }
        },
        methods: {
            showDetail() {
                ProductService.selectedProduct(this.product.id)
            }
        }

    }
</script>

<style scoped>

</style>