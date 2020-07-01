var app = new Vue({
	el: '#app',
	data: {
		massage: 'Hello world',
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
		changeText () {
			this.massage = 'New text!'
		},
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
var app2 = new Vue({
	el: '#app2',
	data: {
		toggle: '',
		check:'',			
		items: [
			{title: 'Test1', desc: 'Test1'},
			{title: 'Test2', desc: 'Test2'},
			{title: 'Test3', desc: 'Test3'}
		]
	},
	methods: {
		addItem: function() {
			var input = document.getElementById('listsTitle');
			var input2 = document.getElementById('listsDesc');
			if(input.value !== '') {
				this.items.push({
					title:input.value,
					desc:input2.value
				})
				input.value = "";
				input2.value = "";
			}
		},
		deleteItem: function(index) {
			this.items.splice(index, 1);
		},
		checkfunction: function() {
			var checkbox = document.getElementByClass('checkbox');
			if(checkbox.value == true) {
				this.check = 'check'
			} 
		}
	}
})