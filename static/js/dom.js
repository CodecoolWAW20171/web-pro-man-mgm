// It uses data_handler.js to visualize elements
let dom = {
    loadBoards: function() {
        // retrieves boards and makes showBoards called
    },
    showBoards: function(boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
    },
    loadCards: function(boardId) {
        // retrieves cards and makes showCards called
    },
    showCards: function(cards) {
        // shows the cards of a board

        // it adds necessary event listeners also
        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        };
        
        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        };
        
        function allowDrop(ev) {
            ev.preventDefault();
        };
        
        
        let listOfCards = document.getElementsByClassName("card");
            for (let num=0; num<listOfCards.length; num++) {
                listOfCards[num].setAttribute("draggable", "True");
                listOfCards[num].addEventListener("dragstart", drag);
            };
        
        let places = document.getElementsByClassName("place");
        for (let num=0; num<places.length; num++) {
            places[num].addEventListener("drop", drop);
            places[num].addEventListener("dragover", allowDrop)
        };
    
    }
    // here comes more features
}
