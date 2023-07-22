const Inicio = (link) => {
    let rec = true;
    if(link === "/" || link === "/Login" || link === "/Registro"){ //sin sesión iniciada
        //reiniciar localStorage
        window.localStorage.setItem('id', "")
    }else if(window.localStorage.getItem("id")==null){
        window.localStorage.setItem("recargar", "true");
        rec = false;
        window.location.href = "/Login";
    }
    if(rec==true && window.localStorage.getItem("recargar") == "true"){
        window.localStorage.setItem("recargar", "false");
        window.location.href = link;
    }
}

export default Inicio;