from flask import Flask, render_template
import script  # Import your existing Python file

app = Flask(__name__)

@app.route('/')
def home():
    # Call a function from your existing Python file
    data = script.your_function()  # Replace `your_function` with your actual function name
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)