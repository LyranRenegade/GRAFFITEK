
<?php


class DBConnect {

	public function returnObject ( $arraydata ) {
		return $arraydata;
		/*
		$return = new stdClass ();
		foreach ( $arraydata as $key => $value ) {
			$return->{$key} = $value;
		}
		return $return;
		*/
	}
	
	public function ripTable ( $args ) {
		$condata = $this->_connectDB ();
		$errorString = $condata [ "errorString" ];
		
		$table = $args->table;
		$query = "SELECT * FROM " . $table . ";";
		$result = mysqli_query ( $condata [ "connection" ], $query );
		
		$items = array ();
		if ( !$result ) {
			//$errorString = "Ongeldige query: " . mysqli_error ();	
		}
		else {
			while ( $row = mysqli_fetch_assoc ( $result ) ) array_push ( $items, $row );	
		}
		//mysqli_free_result ( $result );
		return $this->returnObject  ( 
                    array  ( 
                        "table" => $table, 
                        "items" => $items, 
                        "errorString" => $errorString, 
                        "serviceID" => $args->serviceID 
                            ) 
                );
	}	

        public function runQuery ( $args ) {
            $condata = $this->_connectDB ();    
            $result = mysqli_query ( $condata [ "connection" ], $args->query );
            return $this->returnObject  ( array ( "serviceID" => $args->serviceID ) );
        }
	
	
	public function _connectDB () {
	
		$errorString = "void";
		$succes = true;
		
		
		$host = "localhost";
		$db = "lr_data";
		$user = "root";
		$pass = "simonsimon";
		
		/*
		$host = "localhost";
		$db = "cl42-johann";
		$user = "cl42-johann";
		$pass = "TFYT!JDm2";
		*/
		
		$this->conn = mysqli_connect ( $host, $user, $pass, $db );
		if ( !$this->conn ) {
			$succes = false;
			$errorString = "no conn";//urlencode ( "Could not connect: " . mysqli_error () );
		}
		/*$this->dbsel = mysqli_select_db ( $db, $this->conn );
		if ( !$this->dbsel ) {
			$succes = false;
			$errorString = urlencode ( "Could not select database: " . mysqli_error() );
		}*/
		return $this->returnObject  ( array  ( "connection" => $this->conn, "succes" => $succes, "errorString" => $errorString ) );	
	}


}



?>