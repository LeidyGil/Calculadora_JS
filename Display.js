/*Clase encargada de controlar la calculadora e interactuar con los bonotes y mostrar la info en el display*/

class Display{
    constructor(displayValorAnterior, displayValorActual){ /*tiene un constructor para pasarle valores para instanciarla*/
        this.displayValorAnterior = displayValorAnterior; /*son propiedades de la clase */
        this. displayValorActual = displayValorActual;
        this.calculador = new Calculadora(); /*instanciamos la calculadora para poderla controlar */
        this.tipoOperacion = undefined;
        this.valorActual = ''; /*estos valores son diferentes a los del display. Los del display son los elementos que queremos modificar y estos son los numeros que estamos guardando*/
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: '*',
            restar: '-'
        }
    } 

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString(); /*tomamos el valor actual del display al tomarlo en la calculadora al numero en este metodo */
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior))return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual)
    }


}