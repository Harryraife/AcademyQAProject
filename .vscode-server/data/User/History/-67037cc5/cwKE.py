from app import db

db.drop_all()
db.create_all()

testuser = Person(first_name='Harry', last_name='Heth')
db.session.add(testuser)
db.session.commit()