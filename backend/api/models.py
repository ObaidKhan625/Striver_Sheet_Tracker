from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here. Hey

class User(AbstractUser):
	problem_status = 			models.CharField(max_length = 350, default = '0'*350)
	topics_pinned = 			models.CharField(max_length = 31, default = "0000000000000000000000000000000")

	def __str__(self):
		return str(self.username)
	
	def create(self, *args, **kwargs):
		self.problem_status = '0'*350
		self.topics_pinned = '0'*31
		super(User, self).create(*args, **kwargs)
	
	def save(self, *args, **kwargs):
		# self.problem_status = '0'*350
		super(User, self).save(*args, **kwargs)

class ProblemInfo(models.Model):
	note_content = 				models.TextField(null = True, blank = True)
	user = 						models.ForeignKey(User, null = True, on_delete = models.CASCADE)
	problem_id = 				models.IntegerField(null = True)
	problem_done = 				models.BooleanField(default = False)
	
	def __str__(self):
		return str(self.user) + "'s on problem id: " + str(self.problem_id)