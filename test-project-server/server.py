import os
from jinja2 import StrictUndefined
from flask import (Flask, jsonify, render_template, redirect, request)
from flask_restful import Resource, Api, reqparse
from model import Student, connect_to_db, db
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)

app.secret_key = "ABC"


@app.route("/")
@cross_origin()
def index():
    return render_template('index.html')


@app.route("/api/students/")
@cross_origin()
def get_students():
    students = Student.query.all()
    student_list = []
    for student in students:
        student = {
            'student_id': student.student_id,
            'fname': student.fname,
            'lname': student.lname,
            'grade': student.grade
        }
        student_list.append(student)
    students = jsonify(student_list)
    return students


@app.route("/api/add-student", methods=['POST'])
@cross_origin()
def add_student():
    print("hello!")
    data = request.get_json()
    print(data)
    fname = data.get('fname')
    lname = data.get('lname')
    grade = data.get('grade')
    new_student = Student(fname=fname,  lname=lname, grade=grade)
    db.session.add(new_student)
    db.session.commit()
    return 'student added!'


if __name__ == "__main__":

    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
