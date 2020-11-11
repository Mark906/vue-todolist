var app = new Vue({
    el: '#root',
    data: {
        titolo: "TODOLIST!",
        list: ["Sveglia ore 8:00a.m.","Scrivere codice","Andare a correre","Fare la spesa","Riposare"],
        nuovo_item: ""
        },
        methods: {
            add_item(){
                // Se l'elemento tracciato via input in nuovo_item è diverso
                // da una stringa vuota, push del suo contenuto nella lista.
                if(this.nuovo_item != ""){
                    this.list.push(this.nuovo_item);
                    //Clear di nuovo_item.
                    this.nuovo_item = "";
                }
            },
            del_item(index){
                //Via 'splice(index,n)' rimuovo n to-do da 'list[]'.
                this.list.splice(index, 1);
            }
        }
    });
