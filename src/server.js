/**
 * Created by igor on 09/05/15.
 */


var Server = function() {

    this.service = {
        signUp:function(email, password) {

        }
    };

    this.validateEmailSyntax = function(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    };

    this.validateCredentials = function(email, password){
        var ret = {status:false, message:""};
        if (!email || email.trim() == "" || !this.validateEmailSyntax(email)) {
            ret.message = "Invalid e-mail..."
        }
        else if (!password || password.trim() == "") {
            ret.message = "Invalid password..."
        }
        else
        {
            ret.status = true;
        }
        return ret;
    };

    this.signUp = function(email, password) {
        if (this.validateCredentials(email, password)) {
            return this.service.signUp(email, password);
        }
    }
};