from flask import url_for
from application import app, db
from application.models import *
from flask_testing import TestCase
from datetime import date

class TestBase(TestCase):
    def create_app(self):
        app.config.update(
            SQLALCHEMY_DATABASE_URI = 'sqlite:///test-app.db',
            WTF_CSRF_ENABLED = False,
            DEBUG = True,
            SECRET_KEY = 'AGERSVBN'
        )
        return app

    def setUp(self):
        db.create_all()
        lifter1 = Lifter(first_name='Test', last_name='Lifter', username='SampleUser')
        lift1 = Log(weight='60', reps='6', exercise='Squat', date = date.today(), lifter_id= 'lifter1.id')
        db.session.add(lifter1)
        db.session.add(lift1)
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

class TestHomeView(TestBase):
    def test_get_home(self):
        response = self.client.get(url_for('home'))
        self.assert200(response)
        self.assertIn(b'One rep max Calculator', response.data)