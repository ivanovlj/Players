class Player { 
    static playercounter = 0;
    private ID: number;
    private condition: number;
    constructor(ID: number, condition:number){
        Player.playercounter += 1;
        if(Player.playercounter > 5){
            console.log("Ne smee povekje igraci, ke se dobie Tehnicka Greska i ne smee da vlece igracot:");
        } else console.log("Vleguva vo igra igracot:");
        this.ID = ID;
        this.condition = condition;
    }
    setID(ID: number) {
        if (ID > 0) {
            this.ID = ID;
        }
        else {
            console.log(`Ovaa brojka ne moze da mu pripadne na igracot ${this.ID} `);
            return;
        }
        this.ID = ID;
    }
    getID() {
        return this.ID;
    }
    setCondition(condition: number) {
        if (condition < 50) {
            console.log(`Igracot so broj ${this.ID} mora da se zameni `);
            this.condition = condition;
        }
        else {
            console.log(`So broj ${this.ID}`);
        }

        this.condition = condition;

    }
    getCondition() {
        return this.condition;
    }}
    class Coach extends Player{
       public Timeout : boolean;
       setTimeout(Timeout: boolean){
           if(Timeout == true){
                console.log("Se povikuva TimeOut");
                this.Timeout = Timeout;
           }
           this.Timeout = Timeout;
       }
       
    }

const Player1 = new Player(10,12);
Player1.setID(11);
Player1.setCondition(50);

const Player2 = new Player(10,12);
Player2.setID(10);
Player2.setCondition(55);

const Player3 = new Player(10,12);
Player3.setID(14);
Player3.setCondition(56);

const Player14 = new Player(10,12);
Player14.setID(16);
Player14.setCondition(57);

const Player124 = new Player(10,12);
Player124.setID(20);
Player124.setCondition(58);

const Player41 = new Player(10,12);
Player41.setID(3);
Player41.setCondition(59);