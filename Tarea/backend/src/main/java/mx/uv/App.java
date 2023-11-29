package mx.uv;

import static spark.Spark.*;
import  com.google.gson.*;
import java.util.Scanner;


public class App {

    static String nombre;
    static String apellido;


    

    public static void main( String[] args ){
        System.out.println( "Hola mundo" );
        //fuente:https://gist.github.com/saeidzebardast/e375b7d17be3e0f4dddf
        options("/*",(request,response)->{
            String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");
            if(accessControlRequestHeaders!=null){
                response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
            }
            String accessControlRequestMethod=request.headers("Access-Control-Request-Method");
            if(accessControlRequestMethod!=null){
                response.header("Access-Control-Allow-Methods",accessControlRequestMethod);
                }
            return "OK";
        });
        
        before((request,response)->response.header("Access-Control-Allow-Origin","*"));
        get("/", (request, response) ->{
            return "<h1>Hola mundo</h1>";
        });

        //Dar de alta el usuario
         get("/altas", (request,response) -> {
            nombre =  request.queryParams("nombre");
            apellido =  request.queryParams("apellido");
            
            return  "Usuario Registradro :3";
        });


        //Leer al usuario
        post("/leer", (request,response) -> {
            return  "Los datos del inicio son: "+ nombre + " " + apellido;
        });


        //Actualizar al usuario
        get("/actualizar", (request,response) -> {
            nombre =  request.queryParams("nombre");
            apellido =  request.queryParams("apellido");
            
            return  "Datos Actualizados";
        });

        //Eliminar al usuario
        delete("/eliminar", (request,response) -> {
           nombre = "";
           apellido ="";
            
            return  "Datos eliminados";
        });


    }
}
