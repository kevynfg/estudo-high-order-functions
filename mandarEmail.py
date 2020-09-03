from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib

msg = MIMEMultipart()
texto = "estou enviando um email teste com python"


senha = "ke452366"
msg['From'] = "kevynfariaga@gmail.com"
msg['To'] = "kevynredlotus@gmail.com"
msg['Subject'] = "E-mail diretamente do python"

#criação do corpo da mensagem
msg.attach(MIMEText(texto, 'plain'))

 #criação do servidor
server = smtplib.SMTP('smtp.gmail.com: 587')
server.starttls()

 #Login na conta para envio
server.login(msg['From'], senha)

#envio da mensagem
server.sendmail(msg['From'], msg['To'], msg.as_string())

#encerramento do servidor
server.quit()

print('Mensagem enviada com sucesso!')