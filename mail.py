import smtplib
oggetto = "Sbuject: Urgente da leggere subito\n\n"
contenuto = "connettiti al server"
messaggio = oggetto + contenuto
email = smtplib.SMTP("smtp.gmail.com", 587)
email.ehlo()
email.starttls()
email.login()
email.sendmail("proviamoquesta4@gmail.com", "lproviamoquesta4@gmail.com", messaggio)
email.quit()
