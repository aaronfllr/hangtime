https://blog.logrocket.com/creating-an-app-with-react-and-django/
Django BE
startproject
Settings.py
  INSTALLED_APPS
  MIDDLEWARE
Startapp
Models.py #Changed to hangboard
makemigrations #makemigrations new models
migrate #migrated new models
python manage.py makemigrations --empty --name students students #creating what we call a data migration file #changed to Tensionblock
^in file add create_data model #^
Serializers.py #in app folder #Changed to Tensionblock
url.py of project folder
views.py of app folder #changed to Tensionblock

React FE
install react #npx create-react-app NAME
install bootstrap #npm install bootstrap reactstrap axios --save
create folder in src/ constant, add file index.js
create folder in src/  components, add file header.js
create file in src/components/, NewStudentForm.js, NewStudentModal.js, StudentList.js, ConfirmRemovalModal.js#updated, Home.js
Import the header and Home components to App.js
