<h1 align="center">
<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Puddles&family=Smokum&display=swap');
</style>
<span style="font-family: 'Rubik Puddles', cursive;">Cactus Jo🌵</span>
</h1>

</h1>
<p align="center">
  <a href="#WebApp">WebApp</a> •
  <a href="#How-to-use">How to Use</a> •
  <a href="#Postman">Postman</a>
</p>

[![PyPI status](https://img.shields.io/pypi/status/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)

# ![WebApp](imgreadme/IDV%20-%20WEB4.jpg)

<h2 id="WebApp">WebApp</h2>

<table>
<tr>
<td>
API REST en node js avec une base de données Mongo DB qui contiendra tous nos produits. Elle est accompagné d'une application client en REACT qui permet de display les données et faire de la gestion de produits. 
</td>
</tr>
</table>

  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

vous retrouverez mon travail sur [github]()

***

<h2 id="How to use">How to use</h2>

Notre application se lance en 2 fois

 **Backend**
 qui va lancer le server gérant le backend de notre application: `npm start`

 **Front**
 App en react: `npm run start`

***
<h2 id="Postman">Postman</h2>
<h4  align=right>Ajout/Création d'un produit</h4>


```json
POST: http://localhost:8000/api/products
{
    {
    "name" : "AC1 Phone1", 
    "type" : "phone", 
    "price" : 200.05, 
    "rating" : 3.8,
    "warranty_years" : 1, 
    "available" : true 
    }
}
```

```
{
    "name": "AC1 Phone1",
    "type": "phone",
    "price": 200.05,
    "rating": 3.8,
    "warranty_years": 1,
    "available": true,
    "_id": "64a926e6c94a42765aaab6f0",
    "__v": 0
}
```

<h4>On récupère les produits</h4>

```json
GET: http://localhost:8000/api/products

    {
        "_id": "64a92142b6ab4666c05ad251",
        "name": "Iphone 15pro",
        "type": "phone",
        "price": 1200,
        "rating": 5,
        "warranty_years": 2,
        "available": false,
        "__v": 0
    },
    {
        "_id": "64a926e6c94a42765aaab6f0",
        "name": "AC1 Phone1",
        "type": "phone",
        "price": 150,
        "rating": 6,
        "warranty_years": 1,
        "available": true,
        "__v": 0
    }
```
<h4 align="right">Update d'un produit</h4>

```json
PUT: http://localhost:8000/api/products/64a926e6c94a42765aaab6f0

{
    "_id": "64a926e6c94a42765aaab6f0",
    "name": "AC1 Phone1",
    "type": "phone",
    "price": 150,
    "rating": 6,
    "warranty_years": 1,
    "available": true,
    "__v": 0
}
```

***

<div style="padding-top:56.042%;position:relative;">
<iframe src="https://gifer.com/embed/AXhO" width="100%" height="100%" style='position:absolute;top:0;left:0;' frameBorder="0" allowFullScreen></iframe>
</div>
