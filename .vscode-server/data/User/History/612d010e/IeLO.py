from application import db 

class Lifter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(30), nullable = False)
    last_name = db.Column(db.String(30), nullable = False)
    username = db.Column(db.String(30), nullable = False)

class Log(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    weight = db.Column(db.Integer, nullable = False)
    reps = db.Column(db.Integer, nullable = False)
    exercise = db.Column(db.String(10), nullable = False)
    date = db.Column(db.Date)
    lifter_id = db.Column(db.Integer, db.ForeignKey('lifter.id'), nullable = False)
    def __str__(self):
        return f"{self.reps}@{self.weight}"

class Max(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise = db.Column(db.String(10), nullable = False)
    max = db.Column(db.Integer, nullable = False)
    date = db.Column(db.Date, db.ForeignKey('log.date')) 
    lifter_id = db.Column(db.Integer, db.ForeignKey('lifter.id'), nullable = False)

