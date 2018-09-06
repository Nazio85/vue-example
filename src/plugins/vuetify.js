import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    theme: {
        primary: colors.green.darken2,
        secondary: colors.green.darken4,
        accent: '#82B1FF',
        error: colors.red,
        info: '#2196F3',
        success: colors.green.accent1,
        warning: '#FFC107',
        pari: '#145351'
    }
});
