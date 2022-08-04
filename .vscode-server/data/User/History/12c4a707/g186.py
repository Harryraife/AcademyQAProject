from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, DateField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Length, ValidationError
from datetime import date

class NewUser(FlaskForm):
    first_name = StringField("First Name", validators=[DataRequired()])
    last_name = StringField("Last Name", validators=[DataRequired()])
    submit = SubmitField("Submit")

class NewLift(FlaskForm):
    weight = IntegerField("Weight lifted")
    reps = IntegerField("Reps completed")
    lift = SelectField("Movement", choices=[
        ("squat","Squat"),
        ("bench","Bench"),
        ("deadlift","Deadlift")
    ])
    submit = SubmitField("Submit")
