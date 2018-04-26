// this object contains the functions which handle the data and its reading/writing
// feel free to extend and change to fit your needs

// (watch out: when you would like to use a property/function of an object from the
// object itself then you must use the 'this' keyword before. For example: 'this._data' below)
let dataHandler = {
    keyInLocalStorage: 'proman-data', // the string that you use as a key in localStorage to save your application data
    _data: {}, // it contains the boards and their cards and statuses. It is not called from outside.
    _loadData: function () {
        // it is not called from outside
        // loads data from local storage, parses it and put into this._data property
        let data = localStorage.getItem(this.keyInLocalStorage);
        this._data = JSON.parse(data);
    },
    _saveData: function () {
        // it is not called from outside
        // saves the data from this._data to local storage
        localStorage.setItem(this.keyInLocalStorage, JSON.stringify(this._data))
    },
    init: function () {
        this._loadData();
    },
    getBoards: function (callback) {
        // the boards are retrieved and then the callback function is called with the boards
        callback(this._data.boards, this._data.statuses);
    },
    getBoard: function (boardId, callback) {
        // the board is retrieved and then the callback function is called with the board
        callback(this._data.boards[boardId])
    },
    getStatuses: function (callback) {
        // the statuses are retrieved and then the callback function is called with the statuses
        callback(this._data.statuses);
    },
    getStatus: function (statusId, callback) {
        // the status is retrieved and then the callback function is called with the status
        callback(this._data.statuses[statusId]);
    },
    getCardsByBoardId: function (boardId, callback) {
        // the cards are retrieved and then the callback function is called with the cards
        let cards = [];
        this._data.cards.forEach(function (entry) {
            if (entry.board_id === boardId) {
                cards.push(entry);
            }
        })
        callback(cards);
    },
    getCard: function (cardId, callback) {
        // the card is retrieved and then the callback function is called with the card
        let card;
        this._data.cards.forEach(function (entry) {
            if (entry.id === cardId) {
                card = entry;
            }
        })
        callback(card);
    },
    createNewBoard: function (boardTitle, callback) {
        // creates new board, saves it and calls the callback function with its data
        let board = {
            "id": dataHandler._data.boards.length + 1,
            "title": boardTitle,
            "is_active": true
        }
        dataHandler._data.boards.push(board);
        dataHandler._saveData();
        callback(board);
    },
    createNewCard: function (cardTitle, boardId, statusId) {
        // creates new card, saves it and calls the callback function with its data
        let card = {
            "id": dataHandler._data.cards.length + 1,
            "title": cardTitle,
            "board_id": boardId,
            "status_id": statusId,
            "order": dataHandler.getNewCardOrder(statusId, boardId),
        }
        dataHandler._data.cards.push(card);
        dataHandler._saveData();
    },
    getNewCardOrder: function (statusID, boardID) {
    let cards = dataHandler._data.cards;
    let order = 1;
    cards.forEach(function (card) {
        if (card.board_id === boardID && card.status_id === statusID) {
            order += 1
        };
    })
    return order;
},
    changeCardStatus: function (targetElement, cardID) {
    let statusDiv = targetElement.parentElement.className;
    let status = parseInt(statusDiv[statusDiv.length - 1],10);
    for (let i=0; i<dataHandler._data.cards.length;i++) {
        if (dataHandler._data.cards[i].id === parseInt(cardID,10)) {
            dataHandler._data.cards[i].status_id = status;
        }
    }
    dataHandler._saveData();
    }
}
