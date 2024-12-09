class Nodo{
    key : number;
    value : number;
    anterior : any;
    siguiente: any;
    constructor(key: number, value:number){
        this.key = key;
        this.value = value;
        this.anterior=null;
        this.siguiente=null;
    }
}

class LRUCache{
    capacity:number;
    nuevo:any;
    ultimo:any;
    hashmap: {
        [key: number]: Nodo;
        }
    nodoAux:any;
    constructor(capacity:number){
        this.capacity=capacity;
        this.hashmap={};
        this.nuevo=null;
        this.ultimo=null;
        this.nodoAux=null;
    }   
    private insert(nodo){
        if(this.nuevo== null && this.ultimo==null){
            this.nuevo=nodo;
            this.ultimo=nodo;
        }
        else{
            this.nuevo.siguiente = nodo;
            nodo.anterior = this.nuevo;
            this.nuevo=nodo;
            this.hashmap[nodo.key]=nodo;
            
        }
    }
    private remove(nodo){
        //if(this.ultimo.value===this.nuevo.value && this.nuevo.value==nodo.value && this.ultimo.value==nodo.value){
        if(this.ultimo.key===this.nuevo.key && this.nuevo.key==nodo.key && this.ultimo.key==nodo.key){
            
            nodo.siguiente=null;
            nodo.anterior=null;
        }
        else if(this.ultimo.key == nodo.key && nodo.siguiente!=null){
            
            this.ultimo = nodo.siguiente;
            this.ultimo.anterior.siguiente = null;
            this.ultimo.anterior=null;
        }
        else if(this.nuevo.key==nodo.key && nodo.anterior!=null){
            
            this.nuevo=nodo.anterior;
            nodo.anterior=null;
            this.nuevo.siguiente=null;
        }
        else{
            
            nodo.anterior.siguiente = nodo.siguiente;
            nodo.siguiente.anterior = nodo.anterior;
            nodo.siguiente=null;
            nodo.anterior= null;
        }
        delete this.hashmap[nodo.key];
        return nodo
    }  
    private update(nodo){
        this.remove(this.hashmap[nodo.key]);
        this.insert(nodo);
        return nodo
    }
    public get(key: number): number{
        
        if(key in this.hashmap){
            return this.update(this.hashmap[key]).value;           
        }
        else{
            return -1
        }
    }
    public put(key:number,value:number):void{
        
        let nodo = new Nodo(key,value);
        if(key in this.hashmap){
            this.update(nodo);
            this.hashmap[key]=nodo;
        }
        else{
            this.hashmap[key]=nodo;
            if(Object.keys(this.hashmap).length<=this.capacity){
                this.insert(nodo);
            }
            else  if(Object.keys(this.hashmap).length>this.capacity){
                this.insert(nodo);
                this.remove(this.ultimo);
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */