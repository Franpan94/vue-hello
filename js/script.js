const app = new Vue ({
     
    el: '#root',

    data: {
           title : 'Benvenuto vue',
           changecolorclass : 'color-red', 

    },

    methods: {
        changecolor: function () {
            if(this.changecolorclass === 'color-red'){
                this.changecolorclass = 'color-blue'
            } else{
                this.changecolorclass = 'color-red'
            }
        }
    }
}
);