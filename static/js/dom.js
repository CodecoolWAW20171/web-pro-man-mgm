// It uses data_handler.js to visualize elements
let dom = {
    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(dom.showBoards);
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
        var boardsDiv = document.createElement('div');
        boardsDiv.setAttribute('class', 'boards');
        document.body.appendChild(boardsDiv);
        for (let i = 0; i < boards.length; i++) {
            let board = document.createElement('div');
            board.setAttribute('id', 'board' + (i+1));
            board.innerHTML = boards[i].title + "<br><br>";
            boardsDiv.appendChild(board);

            /* appending statuses dives, for testing actually: */
            for (let j=1; j<=dataHandler._data.statuses.length; j++) {
                let statusDiv = document.createElement('div');
                statusDiv.setAttribute('class', 'status' + j);
                statusDiv.setAttribute('id', 'status' + (i+1) + '_' + j);
                statusDiv.innerHTML = dataHandler._data.statuses[j-1].name + "<br>";
                board.appendChild(statusDiv);
                placeForCard = document.createElement('div');
                placeForCard.setAttribute('class', 'place');
                // loadCards(i);  TO BE IMPLEMENTED
                statusDiv.appendChild(placeForCard);
                statusDiv.appendChild(placeForCard);

            };
        };

    },

    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
        dataHandler.getCardsByBoardId(boardId, dom.showCards);
    },

    showCards: function (cards) {
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

        /* let place = document.getElementsByClassName('place')[0]; */
        /* place.innerHTML = cards[0].title; */
        /* For testing only, sample cards: */

        cards.forEach(function(card) {
            let boardID = card.board_id;
            let statusID = card.status_id;
            let cardID = card.id;
            let div = document.getElementById("status" + boardID + "_" + statusID)
            div.innerHTML += (`<span class=\"card\" id="${cardID}">${card.title}</span>`)

        })
        let listCards = document.getElementsByClassName("card");
        for (let num=0; num<listCards.length; num++) {
                listCards[num].setAttribute("draggable", "True");
                listCards[num].addEventListener("dragstart", drag);
            };

        /* places for cards to drop */
        let places = document.getElementsByClassName("place");
        for (let num=0; num<places.length; num++) {
            places[num].addEventListener("drop", drop);
            places[num].addEventListener("dragover", allowDrop)
        };
    },

    createNewBoardButton: function (buttonID) {
        let btn = document.getElementById(buttonID);
        btn.addEventListener("click", function () {
            let form_div = document.getElementById('new-board-form-div');
            form_div.style.display = "inline";

        });
    },
    addAndDisplayNewBoard: function () {
        let formData = document.getElementById('board-name').value;
        dataHandler.createNewBoard(formData, this.showBoards)
    }
    // here comes more features
}
