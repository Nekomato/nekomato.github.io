class Message {
}

class Relative {
    constructor(kind) {
        this.kind = kind;
        this.message = new Message();
    }

    checkRelative() {
        if (this.relative.punched) {
            this.relative.punched = false;
            this.punch(this.relative.enemy);
        }
    }

    messageReaction()
    {
        if (this.message.text == "Сукин сын") {
            this.punch(this.message.sender);
        }
    }

    sendMessage(target, message){
        target.message.text = message;
        target.message.sender = this;
        alert(this.kind + " написал " + target.kind + ": " + message)
        target.messageReaction();
    }

    punch(target) {
        alert(this.kind + " ударил " + target.kind);
        //console.log(this.kind + " ударил " + target.kind);
        target.punched = true;
        target.enemy = this;
        this.checkRelative();
        target.checkRelative();
    }

}

var son = new Relative("сын");
var mother = new Relative("мама");
son.relative = mother;
mother.relative = son;
mother.sendMessage(son, "Сукин сын");