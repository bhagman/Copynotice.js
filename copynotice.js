var Copynotice = (function() {
    function Copynotice() {
    }
    
    Copynotice.prototype.right = function(owner){
        return "Copyright &copy; " + (new Date()).getFullYear() + " by " + owner; 
    }

    Copynotice.prototype.left = function(owner){
        return 'Copyleft <!--[if lte IE 8]><span style="filter: FlipH; -ms-filter: "FlipH"; display: inline-block;"><![endif]--><span style="-moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); transform: scaleX(-1); display: inline-block;"> &copy;</span><!--[if lte IE 8]></span><![endif]--> '+ (new Date()).getFullYear() + " by " + owner;
    }
    return Copynotice;
})();