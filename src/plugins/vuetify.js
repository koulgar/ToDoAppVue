import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: colors.teal.lighten1,
                secondary: colors.teal.lighten2,
                accent: colors.teal.lighten3,
                error: colors.teal.lighten4,
                info: colors.teal.teal,
            },
        },
    },
}

export default new Vuetify(opts);
