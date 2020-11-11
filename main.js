var app = new Vue({
    el: '#root',
    data: {
        titolo: "TODOLIST!",
        list: ["Sveglia ore 8:00a.m.","Scrivere codice","Andare a correre","Fare la spesa","Riposare"],
        nuovo_item: ""
        },
        methods: {
            add_item(){
                if(this.nuovo_item != ""){
                    this.list.push(this.nuovo_item);
                    this.nuovo_item = "";
                }
            },
            del_item(index){
                this.list.splice(index, 1);
            }
        }
    });
