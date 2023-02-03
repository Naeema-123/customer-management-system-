from django.shortcuts import render, redirect
from django.core.mail import send_mail
from student.forms import StudentForm
from django.http import HttpResponse
from student.models import Student


def insert(request):
    form = StudentForm()
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            subject = 'subject'
            message = 'Hi!! You are Welcome to join us in this semester Congratulations'
            from_email = 'naeemaahme1996@gmail.com'
            recipient_list = ['naeemaahmed1996@gmail.com']
            send_mail(subject, message, from_email, recipient_list)
            try:
                form.save()
                return HttpResponse("<h1>data sent to Database...</h1>")
            except:
                pass
    return render(request,'index.html',{'form':form})
   
def send_email(request):
    if request.method == 'POST':
        subject ='subject'
        message ='message'
        from_email = 'naeemaahme1996@gmail.com'
        recipient_list = ['naeemaahmed1996@gmail.com']

        send_mail(subject, message, from_email, recipient_list)

        return HttpResponse('email_sent')
    else:
       return HttpResponse('Failed')

#def email_sent(request):
    #return render(request,'email_sent.html')

def show(request):
   students=Student.objects.all()
   return render(request,'show.html',{'students':students})

def delete(request,id):
    student=Student.objects.get(id=id)
    student.delete()
    return redirect('/show')

def edit(request,id):
    student=Student.objects.get(id=id)
    return render(request,'edit.html',{'student':student})

def update(request,id): 
    student=Student.objects.get(id=id)
    form=StudentForm(request.POST,instance=student)
    if form.is_valid():
        form.save()
        return redirect('/show')
    return render(request,'edit.html',{'student':student})



# from django.shortcuts import render
# from student.forms import StudentForm
# from django.http import HttpResponse
# def insert(request):
#     if request.method=='POST':
#        form =StudentForm(request.POST)
#     if form.is_valid():
#      try :
#         form.save()
#             return HttpResponse("data sent to Database")
#      except:
#          pass
#          form = StudentForm()
#     return render(request,'index.html',{'form':form})