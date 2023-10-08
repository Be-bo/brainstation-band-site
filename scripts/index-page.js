class Comment{
    #username = "Username";
    #timestamp = 0;
    #comment = "Comment";

    constructor(name, time, comm){
        this.#username = name;
        this.#timestamp = time;
        this.#comment = comm;
    }

    getUsername(){
        return this.#username;
    }

    getTimestamp(){
        return this.#timestamp;
    }

    getComment(){
        return this.#comment;
    }

    getDDMMYYYY(){
        const date = new Date(this.#timestamp);

        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const d = date.getDate().toString().padStart(2, '0');
        const y = date.getFullYear();

        return '${m}/${d}/${y}';
    }
}

commentArray = [
    new Comment("Connor Walton", 1613549548000, "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."),
    new Comment("Emilie Beach", 1610179948000, "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."),
    new Comment("Miles Acosta", 1608451948000, "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.")
];

function displayComment(comment){
    let commentsList = document.querySelector(".comments__list");
    let commentsCard = document.createElement("article");
    commentsCard.classList.add("comments__card");
    // TODO: the rest of the comment elements
    commentsList.appendChild(commentsCard);

    // MARK: DELETE
    // dateDetailEl.innerText = artist.date;
}

function clearComments(){
    // TODO
}

const form = document.getElementById("comments-form");
form.addEventListener('submit', function(e){

    e.preventDefault();
    const nameInput = e.target.username.value;
    const commentInput = e.target.comment.value;

    if(nameInput.length > 0 && commentInput > 0){
        commentArray.unshift(new Comment(nameInput, Date.now(), commentInput));
        clearComments();
        for(let i = 0; i<commentArray.length; i++) displayComment(commentArray[i]);
        form.reset();
    }
});