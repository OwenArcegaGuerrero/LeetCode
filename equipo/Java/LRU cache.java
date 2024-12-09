
import java.util.HashMap;
public class Nodo{
    public Integer key;
    public Integer value;
    public Nodo anterior;
    public Nodo siguiente;
    public Nodo(Integer key, Integer value){
        this.key = key;
        this.value=value;
    }
}


class LRUCache {
    HashMap<Integer, Nodo> hashmap = new HashMap<Integer, Nodo>();
    public Integer capacity;
    public Nodo nuevo;
    public Nodo ultimo;
    public LRUCache(Integer capacity) {
        this.capacity = capacity;
    }
    private void insert(Nodo node){
        if(this.nuevo == null &&  this.ultimo  == null){
            this.nuevo= node;
            this.ultimo= node;
        }
        else{
            this.nuevo.siguiente = node;
            node.anterior = this.nuevo;
            this.nuevo = node;
        }
        this.hashmap.put(node.key, node);
    }
    private Nodo remove(Nodo node){
        if(this.ultimo==this.nuevo && this.nuevo==node){
            node.siguiente=null;
            node.anterior=null;
        }
        else if(this.ultimo.key==node.key && node.siguiente!=null){
            this.ultimo =node.siguiente;
            this.ultimo.anterior.siguiente = null;
            this.ultimo.anterior=null;
        }
        else if(this.nuevo.key==node.key && node.anterior!=null){
            this.nuevo = node.anterior;
            node.anterior=null;
            this.nuevo.siguiente=null;
        }
        else{
            node.anterior.siguiente=node.siguiente;
            node.siguiente.anterior=node.anterior;
            node.siguiente=null;
            node.anterior=null;
        }
        this.hashmap.remove(node.key);
        return node;
    }
    private void update(Nodo node){
        this.remove(this.hashmap.get(node.key));
        this.insert(node);
    }
    public Integer get(Integer key) {
        if(this.hashmap.get(key)!=null){
            Nodo node = this.remove(this.hashmap.get(key));
            this.insert(node);
            return node.value;
        }
        else{
            return -1;
        }
    }
    
    public void put(Integer key, Integer value) {
        Nodo node = new Nodo(key,value);
        if(this.hashmap.get(key)!=null){
            this.update(node);
            this.hashmap.put(key, node);
        }
        else{
            this.hashmap.put(key, node);
            if(this.hashmap.size()<=this.capacity){
                this.insert(node);
            }
            else if(this.hashmap.size()>this.capacity){
                this.insert(node);
                this.remove(this.ultimo);
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */