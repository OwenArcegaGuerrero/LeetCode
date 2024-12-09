class Solution {
    static Boolean repetidor(Integer i, Integer j,String s, String p){
            if(i>=s.length() && j>=p.length()){
                return true;
            }
            if(j>=p.length()){
                return false;
            }
            Boolean coinciden = i<s.length() && (s.charAt(i)==p.charAt(j)|| p.charAt(j)=='.');
            if((j+1)< p.length() && p.charAt(j+1)=='*'){
                return repetidor(i,j+2,s,p) || (coinciden && repetidor(i+1,j,s,p));
            }
            if(coinciden){
                return repetidor(i+1,j+1,s,p);
            }
            return false;
        }
    static Boolean isMatch(String s, String p) {        
        return repetidor(0,0,s,p);
    }   
}