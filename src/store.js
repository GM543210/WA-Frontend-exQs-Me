class Queue{
    constructor(){
      this.people = {};
      this.headIndex = 0;
      this.tailIndex = 0;
    }
  
    enqueue(PersonID){
      this.people[this.tailIndex] = PersonID;
      this.tailIndex++;
    }
  
    dequeue(){
      const PersonID = this.people[this.headIndex];
      delete this.people[this.headIndex];
      this.headIndex++;
      return PersonID;
    }
  
    peek(){
      return this.people[this.headIndex];
    }
  
    get length(){
      return this.tailIndex - this.headIndex;
    }
  };
const q = new Queue();


export default {
    authenticated: false,
    // currentUser: null,
    userType: '',
    isFirstQueueCheck: true,
    isFirstBack: false,
    //za testiranje
    fullname:'',
    email:'',
    password:'',
    UID:'',
    institution_name:'',
    branch_office_city:'',
    institution_adress:'',
    institution_wh:'',
    current: 0,
    i:0,
    assignedWindow:'',
    assignedWinState: false,
    selectedInstitution:{
        Caption: "",
        Adress:"",
        WorkingHours:"",
        City:""
    },
    selectedWindow:{
        Caption: "",
        ID:""
    },
    PQ:{
        ID:[],
        PlaceInQ:[]
    },
    Queue:{
        WindowID:'',
        PeopleInQ:'',
        BeingServed:'',
        NextInQ:'',

    },
    isEmpty: true,
    isExisting: false,
    isFirst: true,
    data(){
        return{
            q,
        };
    },


}