// This function is to initialize the application
function init() {
    // init data
    dataHandler.init();
    // loads the boards to the screen
    dom.loadBoards();
    for (let i=0; i<dataHandler._data.cards.length; i++)
    {
        dom.loadCards(i)
    }
    dom.createNewBoardButton('new-board');
}

init();
