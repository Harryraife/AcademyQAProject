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

    def test_get_lifters(self):
        response = self.client.get(url_for('view_all_users'))
        self.assert200(response)
        self.assertIn(b'Lifter', response.data)
    
    def test_get_lifts(self):
        response = self.client.get(url_for('logs'))
        self.assert200(response)
        self.assertIn(b'60', response.data)
        self.assertIn(b'Squat', response.data)
    
    def test_get_add_lifter(self):
        response = self.client.get(url_for('add_lifter'))
        self.assert200(response)
        self.assertIn(b'SampleUser', response.data)
    
    def test_get_add_lift(self):
        response = self.client.get(url_for('add_lift'))
        self.assert200(response)
        self.assertIn(b'Squat', response.data)
    
    def test_get_update_lifter(self):
        response = self.client.get(url_for('update_lifter', id=1))
        self.assert200(response)
        self.assertIn(b'Test', response.data)
    
    def test_get_update_lift(self):
        response = self.client.get(url_for('update_lift', id=1))
        self.assert200(response)
        self.assertIn(b'Squat', response.data)
    
    def test_get_delete_lifter(self):
        response = self.client.get(
            url_for('delete_lifter', id=1),
            follow_redirects = True
        )
        self.assert200(response)
        self.assertNotIn(b'Test Lifter', response.data)

    def test_get_delete_lift(self):
        response = self.client.get(
            url_for('delete_lift', id=1),
            follow_redirects = True
        )
        self.assert200(response)
        self.assertNotIn(b'Squat', response.data)