from flask import Flask, render_template, redirect
app = Flask(__name__)


@app.route("/")
def boards():
    ''' this is a one-pager which shows all the boards and cards '''
    return render_template('boards.html')

@app.route("/new-board", methods=["POST"])
def new_board():
    return redirect("/")

def main():
    app.run(debug=True)

if __name__ == '__main__':
    main()