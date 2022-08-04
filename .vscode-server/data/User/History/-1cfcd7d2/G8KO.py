from flask import request, redirect, url_for, render_template
from application import app, db
from application.models import *
from application.forms import *
from datetime import date

#CRUD


@app.route('/', methods=['GET','POST'])
def home():
    return render_template('home.html')
    

@app.route('/addlifter', methods = ['GET', 'POST'])
def add_lifter():
    message="Hi, If you are a new user then please supply your first and last name"
    form = NewUser()

    if request.method=='POST':
        if form.validate_on_submit():
            lifter = Lifter(
                first_name = form.first_name.data,
                last_name = form.last_name.data,
                username= form.username.data
            )
            db.session.add(lifter)
            db.session.commit()
            return redirect(url_for('home'))
    return render_template('add_lifter.html',form=form,message=message)


@app.route('/addlift', methods = ['GET','POST'])
def add_lift():
    message = "Please input your weight, reps completed and the exercise which you completed"
    form = NewLift()

    if request.method == 'POST':
        if form.validate_on_submit():
            log = Log(
                date = form.date.data,
                weight = form.weight.data,
                reps = form.reps.data,
                exercise = form.lift.data,
                lifter_id = form.user.data
            )
            db.session.add(log)
            db.session.commit()
            return redirect(url_for('logs'))
    return render_template('add_lift.html',form=form, message = message)

@app.route('/log', methods = ['GET'])
def logs():
    all_lifts = Log.query.all()

    return render_template('view_all.html', entity='Log', log=Log, all_lifts=all_lifts)

@app.route('/view-users')
def view_all_users():
    users = Lifter.query.all()
    return render_template('view_all.html', entity='User', all_lifts=users)


@app.route('/update/<name>')
def update(name):
    first_lifter = Lifter.query.first()
    first_lifter.first_name = name
    db.session.commit()
    return redirect(url_for('view_all_users'))
