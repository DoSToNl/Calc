var app = new Vue({
	el: '#app',
	data: {
		stylesCSS: '',
		result: '',
		numbers: [1,2,3,4,5,6,7,8,9,0],
		operations: ['+','-','*','/'],
		items: [
			{title: 'Test1', desc: 'Test1'},
			{title: 'Test2', desc: 'Test2'},
			{title: 'Test3', desc: 'Test3'}
		]
	},
	methods: {
		input: function(char) {
			this.result = this.result.toString();
			this.result+=char;
		},
		reset: function() {
			this.result = '';
		},
		answer: function() {
			this.result = eval(this.result);
		}
	}
});