import time, random, qrcode
# print("aguarde...")
# time.sleep(4)
# print("pronto!")
# numero_aleatorio = random.randint(1, 5)
# print(numero_aleatorio)

img = qrcode.make("https://www.youtube.com/watch?v=VzN6VuKzL9k")
img.save("QR_VIDEO.png")