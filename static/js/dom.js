// It uses data_handler.js to visualize elements
let dom = {
    loadBoards: function() {
        // retrieves boards and makes showBoards called
        datahandler.getBoards(datahandler.showBoards);
    },
    showBoards: function(boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
        var div = document.getElementById('boards');
        div.innerHTML += boards;
    },
    loadCards: function(boardId) {
        // retrieves cards and makes showCards called
    },
    showCards: function(cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
    }
    // here comes more features
}
