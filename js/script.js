const app = new Vue ({
     
    el: '#root',

    data: {
           title : 'Benvenuto vue',
           changecolorclass : 'color-vue', 
           changecolorclassbtn : 'btn btn-primary',
    },

    methods: {
        changecolor: function () {
            if(this.changecolorclass === 'color-vue'){
                this.changecolorclass = 'color-js'
            } else{
                this.changecolorclass = 'color-vue'
            }
        }
    }
}
);