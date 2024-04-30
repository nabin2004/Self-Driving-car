class Level{
    constructor(inputCount, outputCount){
        this.input= new Array(inputCount);
        this.outputs = new Array(outputCount);
        this.biases = new Array(outputCount);

        this.weights = [];
        for(let i=0;i<outputCount;i++){
            this.weights[i] = new Array(outputCount);
        }
    }
}