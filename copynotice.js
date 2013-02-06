var Copynotice = (function() {

    function Copynotice() {
        var Notice = (function(){
            function Notice(){
                this.owner = "owner";
                this.since = "";
                this.now = (new Date()).getFullYear();
                this.copyRight = true;
            }
            Notice.prototype.setOwner = function(owner){
                this.owner = owner;
            }
            Notice.prototype.setRight = function(right){
                this.copyRight = right;
            }
            Notice.prototype.setSince = function(since){
                this.since = since;
            }
            Notice.prototype.toString = function(){
                var str = "";
                if (this.copyRight){
                    str = "Copyright &copy; ";
                } else {
                    str = 'Copyleft <!--[if lte IE 8]><span style="filter: FlipH; -ms-filter: "FlipH"; display: inline-block;"><![endif]--><span style="-moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); transform: scaleX(-1); display: inline-block;"> &copy;</span><!--[if lte IE 8]></span><![endif]--> ';
                }
                if (this.since!=="" && !(parseInt(this.since)>=parseInt(this.now))){
                    str = str + this.since + "-";
                }
                str = str + this.now + " by " + this.owner;
                return str;
            }
            return Notice;
        })();
        this.notice = new Notice();
    }
    
    Copynotice.prototype.right = function(owner){
        this.notice.setRight(true);
        this.notice.setOwner(owner);
        return this;
    }

    Copynotice.prototype.left = function(owner){
        this.notice.setRight(false);
        this.notice.setOwner(owner);
        return this;
    }

    Copynotice.prototype.since = function(since){
        this.notice.setSince(since);
        return this;
    }

    Copynotice.prototype.toString = function(){
        return this.notice.toString();
    }
    return Copynotice;
})();