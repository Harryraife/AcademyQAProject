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
        self.assertIn(b'username', response.data)
    
    def test_get_add_lift(self):
        response = self.client.get(url_for('add_lift'))
        self.assert200(response)
        self.assertIn(b'Movement', response.data)
    
    def test_get_update_lifter(self):
        response = self.client.get(url_for('update_lifter', id=1))
        self.assert200(response)
        self.assertIn(b'Test', response.data)
    
    def test_get_update_lift(self):
        response = self.client.get(url_for('update_lift', id=1))
        self.assert200(response)
        self.assertIn(b'Movement', response.data)
    
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
        self.assertNotIn(b'Movement', response.data)

"""
class TestPostRequests(TestBase):
    def test_post_add_u(self):
        response = self.client.post(
            url_for('add_user'),
            data = dict(forename = 'Alice', surname = 'Jones'),
            follow_redirects = True
        )

        self.assert200(response)
        # self.assertIn(b'Jones, Alice', response.data)
        assert User.query.filter_by(forename='Alice').first() is not None

    def test_post_update_u(self):
        response = self.client.post(
            url_for('update_user', id=1),
            data = dict(forename='New', surname='Data'),
            follow_redirects=True
        )

        self.assert200(response)
        assert User.query.filter_by(forename='New').first() is not None
        assert User.query.filter_by(forename='Sample').first() is None
    
    def test_post_add_t(self):
        response = self.client.post(
            url_for('create_new_task'),
            data = dict(
                task_name = 'Another Sample', 
                task_desc='Yet another sample task', 
                task_status='todo', 
                due_date = date.today() + timedelta(30), 
                assigned_to=1
                ),
            follow_redirects = True
        )

        self.assert200(response)
        self.assertIn(b'Another Sample', response.data)
    
    def test_post_update_t(self):
        response = self.client.post(
            url_for('update_task', id=1),
            data = dict(
                task_name = 'Updated Name', 
                task_desc='New description of task', 
                task_status='todo', 
                due_date = date.today() + timedelta(14), 
                assigned_to=1
                ),
            follow_redirects = True
        )

        self.assert200(response)
        self.assertIn(b'Updated Name', response.data)
"""
