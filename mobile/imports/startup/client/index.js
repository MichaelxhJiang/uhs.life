import './routes.js'
import './imports.js'

Session.setDefault("DocumentTitle","uhs.life - By Students. For Students.");

Deps.autorun(function(){
    document.title = Session.get("DocumentTitle");
});
