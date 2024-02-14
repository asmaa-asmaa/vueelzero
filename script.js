
var photos = [
    "http://placehold.it/400/F00/FFF",
    "http://placehold.it/400/00F/FFF",
    "http://placehold.it/400/080/FFF",
    "http://placehold.it/400/000/FFF",
    "http://placehold.it/400/AAA/FFF"

];

var questions = {
    "question one": {
        "open": false,
        "title": "one: what happen when bla bla bla",
        "reply": "you can do what you want"
    },
    "question two": {
        "open": false,
        "title": "two: what happen when bla bla bla",
        "reply": "you can do what you want"
    },
    "question three": {
        "open": false,
        "title": "three: what happen when bla bla bla",
        "reply": "you can do what you want"
    },
    "question four": {
        "open": false,
        "title": "four: what happen when bla bla bla",
        "reply": "you can do what you want"
    },
    "question five": {
        "open": false,
        "title": "five: what happen when bla bla bla",
        "reply": "you can do what you want"
    },
}

const {createApp} = Vue;




 createApp({
  
    data(){
        return {
            fieldType: "password",
            input: "",
            output: "",
            color: "#b71540",
            amount: 1,
            price: 50,

            userName: null,
            repos: null,
            formErrors: [],
            subject: null,
            message: null,
            maxChars: 10,

            tasks: [],
            taskText:"",

            name: "",
            email: "",
            phone: "",
            direction: "to right",
            colorOne: "#ff0000",
            colorTwo: "#ffff00",

            isSelected: false,

            activeTab: "1",

            photos: photos,
            selected: null,
            message: false,

            questions: questions,

            maxLength: 10,
            remainingChars: 10,
            message: null,
            reachZero: false,

            nname: true,
            namme: "osama",
            title: "<div class='rank'> noob</div>",
            imageSrc: "imgs/0/.jpg",
            imageAltText: "the alternate text",
            imageUrl: "http://www.google.com",
            counter: 0,
            findLanguage:"",
            languages: [
                "html",
                "css",
                "javascript"
            ],
            eg:0,
            sar:0,
            hour: 0,
            minute: 0,
            second: 0,

        }
    },
    methods: {
        switchField() {
            this.fieldType = this.fieldType === "password" ? "text" : "password";
        },
        convertToSlug(){
            var theSlug = this.input;
            theSlug = theSlug.toLowerCase();
            theSlug = theSlug.replace(/\s+/g, "-");
            theSlug = theSlug.replace(/&/g, "-and-");
            this.output = theSlug;
        },
        updateColor(event){
            this.color = event.target.getAttribute("data-color");

        },
        //getRepos() {
          //  return axios.get("https://api.github.com/users/" + this.userName + "/repos")
            //.then((response)=> this.repos = response.data)
            //.catch((error) => {
              //  console.log(error)})
        //}
        validateForm(e){
            this.formErrors = [];
            if(!this.userName){
                this.formErrors.push("username can not be empty");
            }
            if(!this.subject){
                this.formErrors.push("subject can not be empty");
            }
            if(!this.message){
                this.formErrors.push("message can not be empty");
            }

            if(this.userName & this.userName.length > this.maxChars ){
                this.formErrors.push("username can not be more than" + this.maxChars +"charachters");
            }
            if(!this.formErrors.length){
                return true;
            }
            e.preventDefault();

        },
        addTask() {
            this.tasks.push({words: this.taskText , done: false});
            this.taskText="";
        },

        deleteTask(index) {
            this.tasks.splice(index, 1)

        },
        deleteAll() {
            this.tasks = [];

        },
        toggle(event) {
            event.target.classList.toggle("selected")

        },
        toggleAdvanced(event, theClass){
            event.target.classList.toggle(theClass)

        },
        randomPhoto(imgs) {
            //return imgs[2];
            return imgs[Math.floor(Math.random() * photos.length)];
        },
        countChars() {
            this.remainingChars = this.maxLength - this.message.length;
            this.reachZero = this.remainingChars === 0;
            console.log(this.reachZero);
        }
        
    },
    created() {
        this.selected = this.randomPhoto(this.photos);
    },
    computed: {
        totalPrice() {
            return this.amount * this.price
        },
        filterLanguages() {
            var filtering = new RegExp(this.findLanguage, 'i');
            return this.languages.filter((el)=> el.match(filtering));

        }
    },
    watch: {
        eg(v) {
            this.sar = v/5;
        },
        sar(v) {
            this.eg = v*5;
        },
        hour(v) {
            this.minute = v * 60;
        },
        minute(v) {
            this.hour = v/60;
            this.second = v * 60;
        },
        second(v) {
            this.minute = v / 60;
        },
    }
 }).mount("#app-root")