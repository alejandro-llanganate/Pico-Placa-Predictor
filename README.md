# Pico & Placa - Predictor
A TypeScript webb app to predict if a car can be on the road or not according to the Ecuadorian traffic regulation: Pico &amp; Placa.

You can review this web application in: https://alejandrollanganate.github.io/Pico-Placa-Predictor/public/index.html

### Pico & Placa Rules

**Hours:** 7:00am - 9:30 am / 16:00pm -19:30pm

*Restrictions according the last digit of a license plate:*
Monday |  Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday | 
--- | --- | --- | --- |--- |--- |--- |
1-2 | 3-4 | 5-6 | 7-8 | 9-0 | not apply |not apply | 

**Example of the format of an ecuadorian license plate:** ABC-123 or ABC-1234

## Installation

Install this proyect dependencies with npm:

```bash
  npm install Pico-Placa-Predictor
  cd Pico-Placa-Predictor
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/alejandrollanganate/Pico-Placa-Predictor
```

Go to the project directory

```bash
  cd my-Pico-Placa-Predictor
```

Install dependencies

```bash
  npm install
```

In public folder open in a browser the file `index.html` you can either do this usign Live Server of Visual Studio Code.

  
## Running Tests

To run the 16 tests in this proyect, you can run the command:

```bash
  npm test
```

  
## Acknowledgements

- Stack Builders
## Appendix

- [Pico y Placa - El Universo](https://www.eluniverso.com/noticias/2019/07/31/nota/7450038/horarios-pico-placa-hoy-no-circula-quito/)
- [Formatos de Placa ecuatoriano - ecuadorlegalonline](http://www.ecuadorlegalonline.com/consultas/agencia-nacional-de-transito/consultar-a-quien-pertenece-un-vehiculo-por-placa-ant/)
