from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    create_date= models.DateTimeField(null=True)
    memory_consumption = models.FloatField(null=True)
    accuracy = models.FloatField(null=True)
    execution_time = models.FloatField(null=True)
    file = models.FileField(upload_to='myapi_file')

    def __str__(self):
        return self.title

class Docker(models.Model):
    docker_id= models.CharField(max_length=45, primary_key=True)
    name= models.CharField(max_length=45, blank=True, null=True)
    algorithm_name= models.CharField(max_length=45)
    create_date= models.DateTimeField()
    delete_date= models.DateTimeField()
    memory_consumption = models.FloatField()
    accuracy = models.FloatField()
    execution_time = models.FloatField()
    owner = models.ForeignKey(User, related_name="docker", on_delete=models.CASCADE, null=True)

    #def __str__(self):
       # return self.name


class Leaderboardhistory(models.Model):
    rank= models.PositiveIntegerField()
    docker_id= models.ForeignKey(Docker,on_delete= models.CASCADE)


    #def __str__(self):
        #return self.name

class User(models.Model):
    user_id= models.PositiveIntegerField(primary_key=True)
    name= models.CharField(max_length=45)
    age= models.PositiveIntegerField()
    gender= models.CharField(max_length=10)
    institution=models.CharField(max_length=45)
    email = models.EmailField()
    phone=models.CharField(max_length=20)
    occupation=models.CharField(max_length=45)
    country = models.CharField(max_length=45)
    city = models.CharField(max_length=45)
    state = models.CharField(max_length=45)
    zip = models.CharField(max_length=10)
    password= models.CharField(max_length=45)
    login_date = models.DateTimeField()
    logout_date = models.DateTimeField()
    dockers = models.ManyToManyField(Docker)
