from app import db, Lifter

db.drop_all()
db.create_all()

#testuser = Lifter(first_name='Harry', last_name='Heth')
#db.session.add(testuser)
#db.session.commit()