Page({
  "data": {
    "selected": false,
    "leftCount": 2,
    "search": "",
    "todos": [{
        "name": "a",
        "completed": false
      },
      {
        "name": "b",
        "completed": true
      },
      {
        "name": "c",
        "completed": false
      },
    ]
  },
  handleAdd: function (e) {
    if (this.data.search) {
      this.data.todos.push({
        "name": this.data.search,
        "completed": false
      })

      this.setData({
        leftCount: this.data.leftCount + 1,
        todos: this.data.todos
      })
    }
  },
  handleDel: function (e) {
    let index = e.currentTarget.dataset.index;
    if (this.data.todos[index].completed === false) {
      this.data.leftCount -= 1
    }

    this.data.todos.splice(index, 1);
    this.setData({
      leftCount: this.data.leftCount,
      todos: this.data.todos
    })

  },
  handleInputChange: function (e) {
    this.setData({
      search: e.detail.value
    });
  },
  handleChangeStatus: function (e) {
    let index = e.currentTarget.dataset.index;
    let status = this.data.todos[index].completed;
    this.data.todos[index].completed = !status;

    let leftCount = this.data.leftCount;
    if (this.data.todos[index].completed) {
      leftCount -= 1;
    } else {
      leftCount += 1;
    }

    this.setData({
      todos: this.data.todos,
      leftCount: leftCount
    });

  },
  handleToggleAll: function (e) {
    let length = this.data.todos.length;

    let status = this.data.selected ? false : true;
 
    for (let i = 0; i < length; i++) {
      this.data.todos[i].completed = status;
    }

    let count  = status?0:length;

    this.setData({
      todos: this.data.todos,
      selected: status,
      leftCount:count
    });
  },

  handleClearCompleted:function(e){
    let length = this.data.todos.length;
    let data = [];

    for (let i = 0; i < length; i++) {
      if (!this.data.todos[i].completed ){
        data.push(this.data.todos[i]);
      }
    }

    this.setData({
      todos: data,
    });
  }
})