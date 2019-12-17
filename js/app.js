'use strict';

var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

// Registering a component in order to reuse it in all our Vuejs instances
Vue.component('hello', {
  template: '<h1>Hello!</h1>'
});

var vm1 = new Vue({
  // el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    },
    destroy: function() {
      this.$destroy();
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  },
  beforeCreate: function() {
    console.log('beforeCreate()');
  },
  created: function() {
    console.log('created()');
  },
  beforeMount: function() {
    console.log('beforeMount()');
  },
  mounted: function() {
    console.log('mounted()');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate()');
  },
  updated: function() {
    console.log('updated()');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy()');
  },
  destroyed: function() {
    console.log('destroyed()');
  }
});

vm1.$mount('#app1');

// console.log(vm1.$data === data);
// Overrides the DOM h1, and now does not have a react content any more
// vm1.$refs.heading.innerText = 'Something else';

setTimeout(() => { 
  vm1.title = 'Changed by Timer';
  vm1.show();
},  3000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!';
    }
  }
});


var vm3 = new Vue({
  template: '<h1>Hello!</h1>' // It will appear only once
});

// vm3.$mount('#app3');

vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);  // With pure vanilla.js