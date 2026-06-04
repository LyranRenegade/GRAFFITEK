<?php



include '_locked/dbconnect.php';


if ( !array_key_exists ( 'c', $_POST ) || !array_key_exists ( 's', $_POST ) ) {
    echo json_encode (
                    array  ( 
                        "table" => "", 
                        "items" => "",
                        "errorString" => "malformed post",
                        "serviceID" => -1
                            ) 
                    );
}
else {

    $command = $_POST['c'];
    $serviceID = $_POST['s'];
    $d = $_POST['d'];

    $dbconnect = new DBConnect ();


    if ( $command == "riptable" ) {
            $args = new stdClass ();
            $args->table = $d;
            $args->serviceID = $serviceID;
            $data = $dbconnect->ripTable ( $args );
            echo json_encode ( $data );
    }
    else if ( $command == "query" ) {
            $args = new stdClass ();
            $args->query = $d;
            $args->serviceID = $serviceID;
            $data = $dbconnect->runQuery ( $args );
            echo json_encode ( $data );
    }
    else if ( $command == "deletefile" ) {
        $args = new stdClass ();
        $args->serviceID = $serviceID;
        $media_dir = "../media/";
        chdir ( $media_dir );
        unlink ( $d );
        echo json_encode ( $args );
    }
    else if ( $command == "mail" ) {
        $args = new stdClass ();
        $args->serviceID = $serviceID;
        $delimiter = "*^]";
        $values = explode ( $delimiter, $d );
       
        //name
        $nameFrom = $values [ 0 ];
        //email
        $emailFrom = $values [ 1 ];
        //tel
        $tel = $values [ 2 ];
        //title
        $title = $values [ 3 ];
        //question
        $question = $values [ 4 ];
        //mailto
        $mailto = $values [ 5 ];
        
        
        $txt = "<html>" . $question . "<br/><br/>afz.:" . $nameFrom . "<br/>tel.:" . $tel . "<br/><br/>e-mail:" . $emailFrom . "<br/><br/><i>E-mail verzonden via JohannVanGerwen.com</i></html>";
        $txt = wordwrap ( $txt, 70 );
        
        
        $headers = "From: " . /*strip_tags*/ ( $emailFrom ) . "\r\n";
        $headers .= "Reply-To: " . /*strip_tags*/ ( $emailFrom ) . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=ISO-8859-1\r\n";
        


        $succes = 0;
        try {
            $succes = mail ( $mailto, $title, $txt, $headers );
        }
        catch ( Exception $error ) {
            $succes = 0;
        }


        $args->name = $nameFrom;
        $args->email = $emailFrom;
        $args->tel = $tel;
        $args->title = $title;
        $args->mailto = $mailto;
        $args->txt = $txt;
        $args->headers = $headers;
        $args->succes = $succes;
        
        //$args->values = $values;
        
        echo json_encode ( $args );


    }
    else {
        echo json_encode (
                        array  ( 
                            "table" => "", 
                            "items" => "",
                            "errorString" => "unfound command: ".$command,
                            "serviceID" => -1
                                ) 
                        );
    }

}

?>