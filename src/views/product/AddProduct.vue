<template>
        <v-form v-model="valid" lazy-validation ref="form">
            <v-card ma-1>
                <v-layout row wrap pa-2>
                    <v-flex xs4 pa-1>
                        <v-text-field
                                v-model="product.name"
                                :rules="[v => !!v || 'Item is required']"
                                label="Name"
                                required>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs4 pa-1>
                        <v-text-field
                                v-model="product.price"
                                label="Price"
                                required>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs4 pa-1>
                        <v-text-field
                                v-model="product.quantity"
                                label="Quantity"
                                required>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 pa-1>
                        <v-btn flat block color="green" @click="addProduct">Добавить</v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-form>
</template>

<script>
    import ProductService from './ProductService'

    export default {
        name: "AddProduct",
        data() {
            return {
                valid: false,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],
                product: {id: '', name: '', price: '', quantity: ''}
            }
        },
        methods: {
            addProduct() {
                if (this.$refs.form.validate()) {
                    ProductService.addProductToList(this.product);
                }
            }
        }
    }
</script>

<style scoped>

</style>