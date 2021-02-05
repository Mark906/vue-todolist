var app = new Vue({
    el: '#root',
    data: {
        isActive: false,
        titolo: "TODOLIST!",
        list: [

            {
                todo: "Sveglia ore 8:00a.m.",
                check_i: false
            },
            {
                todo: "Andare a correre.",
                check_i: false
            },
            {
                todo: "Fare colazione.",
                check_i: false
            },
            {
                todo: "Visitare un museo.",
                check_i: false
            },
            {
                todo: "Leggere.",
                check_i: false
            },
        ],
        nuovo_item: ""
        },
        methods: {
            add_item(element){
                // Se l'elemento tracciato via input in nuovo_item è diverso
                // da una stringa vuota, push del suo contenuto nella lista.
                if(element != ""){
                    this.list.push({
                        todo: element,
                        check_i: false
                    })

                    this.nuovo_item = "";
                }
            },
            del_item(index){
                //Via 'splice(index,n)' rimuovo n to-do da 'list[]'.
                this.list.splice(index, 1);
            },
            check_item(element){
                if(element.check_i == false){
                    element.check_i = true;
                } else {
                    element.check_i = false;
                }
            }
        }
    });
