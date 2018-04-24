// It uses data_handler.js to visualize elements
let dom = {
    loadBoards: function() {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(dom.showBoards);
    },
    showBoards: function(boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
        var div = document.getElementById('boards');
        for (let i=0; i<boards.length; i++) {
            div.innerHTML += boards[i].title + "<br><br>";
        }
    },
    loadCards: function(boardId) {
        // retrieves cards and makes showCards called
    },
    showCards: function(cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
    },

    createNewBoardButton: function(buttonID) {
        let btn = document.getElementById(buttonID);
        btn.addEventListener("click", function () {
            let form = document.getElementById('new-board-form-div');
            form.style.display = "inline";
        });
    }
    // here comes more features
}
