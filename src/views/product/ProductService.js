import Vue from 'vue'
import _ from 'lodash'

export default new Vue({

    data(){
        return{
            productList:[
                {id:1, name: 'Chiken', price: 18, quantity:80},
                {id:2, name: 'Pork', price: 25, quantity:70},
                {id:3, name: 'Cow', price: 40, quantity:180},
                {id:3, name: 'Mix Meat', price: 20, quantity:30}
            ]
        }
    }, methods:{
        selectedProduct(id) {
            let product = _.find(this.productList, {id:id});
            this.$emit("selectedProduct", product);
        },
        addProductToList(product){
            alert(product);
            this.productList.put(product);
        }
    }
});