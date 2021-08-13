#!/bin/bash


#Noticias Generales
curl -o top-headlines-general.json  https://newsapi.org/v2/top-headlines -G \
    -d country=ar \
    -d apiKey=d2358245efe14cf09b1f1e97c2e3a7f5

#Noticias Negocios
curl -o top-headlines-business.json https://newsapi.org/v2/top-headlines -G \
    -d country=ar \
	-d category=business \
    -d apiKey=d2358245efe14cf09b1f1e97c2e3a7f5
	
#Noticias Entretenimiento
curl -o top-headlines-entertainment.json https://newsapi.org/v2/top-headlines -G \
    -d country=ar \
	-d category=entertainment \
    -d apiKey=d2358245efe14cf09b1f1e97c2e3a7f5
	
#Noticias Salud
curl -o top-headlines-health.json  https://newsapi.org/v2/top-headlines -G \
    -d country=ar \
	-d category=health \
    -d apiKey=d2358245efe14cf09b1f1e97c2e3a7f5
	
#Noticias Ciencia
curl -o top-headlines-science.json https://newsapi.org/v2/top-headlines -G \
    -d country=ar \
	-d category=science \
    -d apiKey=d2358245efe14cf09b1f1e97c2e3a7f5
	
#Noticias Deportes
curl -o top-headlines-sports.json  https://newsapi.org/v2/top-headlines -G \
    -d country=ar \
	-d category=sports \
    -d apiKey=d2358245efe14cf09b1f1e97c2e3a7f5
	
#Noticias Tecnologia
curl -o top-headlines-technology.json https://newsapi.org/v2/top-headlines -G \
    -d country=ar \
	-d category=technology \
    -d apiKey=d2358245efe14cf09b1f1e97c2e3a7f5

echo Press Enter...


    