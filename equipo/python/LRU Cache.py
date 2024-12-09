class Node:
    def __init__(self,key, value):
        self.key = key
        self.value = value
        self.anterior=None
        self.siguiente = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity=capacity
        self.hashmap = {}
        self.nuevo = None
        self.ultimo = None


    
    def insert(self,node):
        if self.nuevo ==None and self.ultimo==None:
            self.nuevo = node
            self.ultimo = node
        else:
            self.nuevo.siguiente = node
            node.anterior = self.nuevo
            self.nuevo = node
        self.hashmap[node.key]=node

    def remove(self,node):
        if self.ultimo == self.nuevo == node:
            node.siguiente = None
            node.anterior=None
            
        elif self.ultimo.key == node.key and node.siguiente!= None:
            
            self.ultimo = node.siguiente
            self.ultimo.anterior.siguiente= None
            self.ultimo.anterior = None
        elif self.nuevo.key == node.key and node.anterior!=None:
            
            self.nuevo = node.anterior
            node.anterior = None
            self.nuevo.siguiente = None
        else:
            node.anterior.siguiente = node.siguiente
            node.siguiente.anterior= node.anterior
            node.siguiente = None
            node.anterior=None
        
        del self.hashmap[node.key]
        return node

        
        
    def update(self, node):
        self.remove(self.hashmap[node.key])
        self.insert(node)

    def get(self, key: int) -> int:
        if key in self.hashmap:
            node = self.remove(self.hashmap[key])
            self.insert(node)
            return node.value 
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        nodo = Node(key,value)
        
        if key in self.hashmap:
                self.update(nodo)
                self.hashmap[key]=nodo
        else:
            self.hashmap[key]=nodo
            if len(self.hashmap)<=self.capacity:
                    self.insert(nodo)
            elif len(self.hashmap)>self.capacity: 
                self.insert(nodo)
                self.remove(self.ultimo)




# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)