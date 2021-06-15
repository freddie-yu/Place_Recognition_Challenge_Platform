from django.contrib import admin
from .models import Docker
from .models import Leaderboardhistory
from .models import User
admin.site.register(Docker)
admin.site.register(Leaderboardhistory)
admin.site.register(User)