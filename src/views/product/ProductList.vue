<template>
    <v-layout row wrap>
        <v-container>
            <v-flex xs12>
                <v-btn block color="primary"
                       @click="showAddForm = (showAddForm === 'Добавить продукт' ? 'Закрыть' : 'Добавить продукт')">
                    {{showAddForm}}
                </v-btn>
            </v-flex>
            <v-flex xs12>
                <!--После закрытия не убивать компонент-->
                <!--<keep-alive>-->
                    <component :is="componentAddProduct"></component>
                <!--</keep-alive>-->
            </v-flex>
        </v-container>

        <v-flex xs7 class="productList">
            <v-layout row wrap>
                <v-flex xs4 v-for="product in productList" class="product">
                    <product-item :product="product"></product-item>
                </v-flex>
            </v-layout>
        </v-flex>

        <v-flex xs5 class="productDetail">
            <product-detail></product-detail>
        </v-flex>
    </v-layout>
</template>

<script>
    import '../../plugins/vuetify'
    import ProductDetail from "./ProductDetail";
    import ProductService from './ProductService'
    import ProductItem from "./ProductItem";
    import AddProduct from "./AddProduct";

    let btnName = 'Добавить продукт';
    export default {
        name: "ProductList",
        components: {AddProduct, ProductDetail, ProductItem},
        data() {
            return {
                productList: {},
                showAddForm: btnName
            }
        },
        computed: {
            componentAddProduct() {
                return this.showAddForm === btnName ? '' : 'AddProduct';
            }
        },
        created() {
            this.productList = ProductService.productList
        }
    }
</script>

<style scoped>

    .addProductForm {
        margin: 15px 0;
    }

    .productList {
        padding: 15px;
    }

    .productList .row {
        /*background: #fff;*/
        /*padding: 15px;*/
    }

    .productDetail {
        /*background: #fff;*/
        padding: 19px;
    }

    .product {
        padding: 4px;
    }
</style>