
<?php
//upload.php
$output_dir = "../media/";
 



$info = "";
$c = 0;

if ( $_FILES ) {
    if ( $_FILES [ "file" ] ) {
        $c = count ( $_FILES [ "file" ] [ "name" ] );
    }
    else $info .= "<br/>- no valid filename found..";
}
else $info .= "<br/>- no valid filedata found.." . $_FILES;




$uc = 0;
$uploadedfiles = array ();

for ( $i = 0; $i < $c; $i ++ ) {
    

    $filename = $_FILES [ "file" ] [ "name" ] [ $i ];
    if ( file_exists ( $output_dir . $filename ) ) {
        $info .= "<br/>- " . $filename . " already on server, not overwritten.. ";
    }
    else if ( !move_uploaded_file ( $_FILES [ "file" ] [ "tmp_name" ] [ $i ], $output_dir . $filename ) ) {
        $info .= "<br/>- " . $filename . " wasn't uploaded! sorry.. ";
        $info .= "<br/>[tempname:] " . $_FILES [ "file" ] [ "tmp_name" ] [ $i ];
        $info .= "<br/>[index:] " . $i;
        $info .= "<br/>[error:] " . $_FILES [ "file" ] [ "error" ] [ $i ];
        $info .= "<br/>[max byts:] " . get_max_upload() . " bytes.";
    }
    else {
        $uc ++;
        array_push ( $uploadedfiles, $filename );
    }

}

$info .= "<br/>TOTAL: " . $uc . " files uploaded.";


echo json_encode ( array  ( "info" => $info, "uploadedfiles" => $uploadedfiles ) );




?>
