#importa tudo de tkinter
from tkinter import * 

def funcClicar():
    print("Botão pressionado")

janelaPrincipal = Tk()

texto = Label(master = janelaPrincipal, text = "janela exibida")
texto.pack()

pic = PhotoImage(file="favicon.jpg")

logo = Label(master = janelaPrincipal, image = pic)

logo.pack()

botao = Button(master = janelaPrincipal, texto = 'Cliquei', COMMAND = funcClicar)
botao.pack()

janelaPrincipal.mainloop()